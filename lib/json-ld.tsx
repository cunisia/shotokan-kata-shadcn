import type { Kata } from "@/type";
import { SITE_URL } from "./site";

// Structured data (schema.org JSON-LD) for search engines. Only the few types
// the site needs are typed here, rather than pulling in schema-dts.

const SITE_NAME = "Shotokan Kata";

type WebSite = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
};

type BreadcrumbList = {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
};

type JsonLdData = WebSite | BreadcrumbList;

const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export const getWebSiteJsonLd = (): WebSite => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: absoluteUrl("/"),
});

// Same labels as the kata tabs.
const KATA_TAB_LABELS = {
  info: "Info",
  motions: "Motions",
  map: "Map",
} as const;

export type KataTab = keyof typeof KATA_TAB_LABELS;

// Home › kata (its motions page, the kata's entry point) › current tab.
export const getKataBreadcrumbJsonLd = (
  kata: Kata,
  tab: KataTab,
): BreadcrumbList => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { name: SITE_NAME, path: "/" },
    { name: kata.name, path: `/kata/${kata.id}/motions` },
    { name: KATA_TAB_LABELS[tab], path: `/kata/${kata.id}/${tab}` },
  ].map(({ name, path }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: absoluteUrl(path),
  })),
});

// Renders one JSON-LD script, as recommended by the Next.js JSON-LD guide:
// `<` is escaped so the payload can't close the script tag (XSS).
export function JsonLd({ data }: Readonly<{ data: JsonLdData }>) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: escaped JSON-LD payload
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
