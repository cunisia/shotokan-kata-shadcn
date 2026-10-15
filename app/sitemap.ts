import type { MetadataRoute } from "next";
import { getKataList } from "@/app/data/get-kata";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    { url: `${baseUrl}/about` },
    ...getKataList().flatMap((kata) =>
      ["info", "motions", "map"].map((page) => ({
        url: `${baseUrl}/kata/${kata.id}/${page}`,
      })),
    ),
  ];
}
