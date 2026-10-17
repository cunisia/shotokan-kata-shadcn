"use client";

import dynamic from "next/dynamic";
import Image, { getImageProps } from "next/image";
import { useEffect, useState } from "react";

// The lightbox and its plugins are only needed once the image is enlarged:
// keep them out of the page's initial JS.
// Shared with the idle preload below: the browser caches the chunk, so
// next/dynamic doesn't download it again on the first open.
const loadLightbox = () => import("./zoomable-image-lightbox");

const ZoomableImageLightbox = dynamic(loadLightbox, { ssr: false });

type NetworkInformation = { saveData?: boolean };

// The zoom viewer shows a ~2000px wide version made by the image optimiser
// rather than the original picture (up to 3000+ px wide, several MB). 2048 is
// one of the default `images.deviceSizes`, the only widths the optimiser
// accepts, and the closest to 2000.
// getImageProps returns its 2x candidate as `src`, so it is given half of
// 2048. The height only matters for the <img> attributes, not the URL: the
// optimiser resizes by width and keeps the picture's own aspect ratio (and
// never enlarges, so narrower maps come back at their own width).
const ZOOM_DISPLAY_WIDTH = 1024; // getImageProps' 2x candidate → w=2048

// Optimised URL of the zoomed picture. Shared by the idle preload and the
// lightbox so that opening it reuses the preloaded file.
const getZoomSrc = (src: string, alt: string) =>
  getImageProps({
    src,
    alt,
    width: ZOOM_DISPLAY_WIDTH,
    height: ZOOM_DISPLAY_WIDTH,
  }).props.src;

// Once the page has loaded and the browser is idle, fetch what the first open
// needs (the lightbox code and the zoomed picture), so the zoom opens
// instantly without competing with the page's initial load.
const usePreloadWhenIdle = (src: string) => {
  useEffect(() => {
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const preload = () => {
      loadLightbox().catch(() => {
        // Retried by next/dynamic on open.
      });
      const connection = (
        navigator as Navigator & { connection?: NetworkInformation }
      ).connection;
      // Data saver: the picture is only fetched when actually enlarged.
      if (connection?.saveData) return;
      // `window.Image`: `Image` is next/image here.
      const img = new window.Image();
      img.fetchPriority = "low";
      img.src = src;
    };

    // Safari has no requestIdleCallback.
    const onLoad = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(preload);
      } else {
        timeoutId = setTimeout(preload, 200);
      }
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onLoad);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [src]);
};

type ZoomableImageProps = {
  src: string;
  alt: string;
  sizes?: string;
};

export function ZoomableImage({ src, alt, sizes }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  // Mount the lightbox on the first open only (that triggers the download),
  // then keep it mounted so closing still animates.
  const [hasOpened, setHasOpened] = useState(false);
  const zoomSrc = getZoomSrc(src, alt);
  usePreloadWhenIdle(zoomSrc);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setHasOpened(true);
          setOpen(true);
        }}
        aria-label={`Enlarge: ${alt}`}
        // `fill` needs a sized, positioned box: it takes the height left in
        // the parent flex column.
        className="relative block min-h-0 w-full flex-1 cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-contain"
        />
      </button>

      {hasOpened && (
        <ZoomableImageLightbox
          open={open}
          close={() => setOpen(false)}
          src={zoomSrc}
          alt={alt}
        />
      )}
    </>
  );
}
