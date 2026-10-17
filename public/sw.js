// Hand-written service worker: basic offline support.
//
// Caching layout (bump VERSION to drop every cache on the next activate):
// - pages:  HTML documents, network-first (3 s timeout) -> cache -> /offline
// - assets: /_next/static/* (content-hashed), cache-first
// - images: /_next/image*, /motions/*, /maps/*, cache-first, capped
// - RSC requests, other same-origin requests and every cross-origin request
//   (YouTube, Vercel analytics) are not intercepted.
//
// Updates: skipWaiting() + clients.claim() make a new worker take over open
// tabs right away. That's safe here: /_next/static/* files are hashed and
// served cache-first, so a page rendered by an older build still finds its
// chunks in the assets cache (or on the network if it's still deployed),
// and HTML is network-first, so the next navigation picks up the new build.

const VERSION = "v1";
const PAGES_CACHE = `pages-${VERSION}`;
const ASSETS_CACHE = `assets-${VERSION}`;
const IMAGES_CACHE = `images-${VERSION}`;
const CURRENT_CACHES = [PAGES_CACHE, ASSETS_CACHE, IMAGES_CACHE];

const OFFLINE_URL = "/offline";
const NAVIGATION_TIMEOUT_MS = 3000;
const MAX_IMAGES = 400;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES_CACHE)
      .then((cache) => cache.add(new Request(OFFLINE_URL, { cache: "reload" })))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !CURRENT_CACHES.includes(key))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // RSC requests (client-side navigations and prefetches): network-only.
  // Not intercepting them means that, offline, the fetch rejects. Next's
  // router (fetchServerResponse in
  // next/dist/client/components/router-reducer/fetch-server-response.js)
  // catches that and falls back to a browser (hard) navigation to the same
  // URL, which the navigation handler below then serves from the pages
  // cache or with the offline page. Serving a stale RSC payload instead
  // could mismatch the current build, so we don't cache them at all.
  // (Only true while `experimental.useOffline` is off: with it, Next waits
  // for the connection to come back instead.)
  if (request.headers.get("RSC") === "1" || url.searchParams.has("_rsc")) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(event));
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, ASSETS_CACHE));
    return;
  }

  if (
    url.pathname.startsWith("/_next/image") ||
    url.pathname.startsWith("/motions/") ||
    url.pathname.startsWith("/maps/")
  ) {
    event.respondWith(cacheFirst(request, IMAGES_CACHE, MAX_IMAGES));
  }
});

async function handleNavigation(event) {
  const { request } = event;
  const cache = await caches.open(PAGES_CACHE);

  const network = fetch(request).then((response) => {
    if (isCacheableHtml(response)) {
      event.waitUntil(cache.put(request, response.clone()));
    }
    return response;
  });

  try {
    return await Promise.race([network, timeout(NAVIGATION_TIMEOUT_MS)]);
  } catch {
    // Network failed or is slow: use the saved copy if there is one.
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    // Nothing saved: keep waiting for a slow network, else go offline.
    try {
      return await network;
    } catch {
      return (await cache.match(OFFLINE_URL)) ?? Response.error();
    }
  }
}

async function cacheFirst(request, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) {
    await cache.put(request, response.clone());
    if (maxEntries) await trimCache(cache, maxEntries);
  }
  return response;
}

// Cache keys come back in insertion order, so the first ones are the oldest.
async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  const excess = keys.length - maxEntries;
  for (let i = 0; i < excess; i++) {
    await cache.delete(keys[i]);
  }
}

function isCacheableHtml(response) {
  return (
    response.ok &&
    response.type === "basic" &&
    // Redirected responses can't be replayed for a navigation.
    !response.redirected &&
    (response.headers.get("Content-Type") ?? "").includes("text/html")
  );
}

function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), ms),
  );
}
