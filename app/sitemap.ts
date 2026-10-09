import type { MetadataRoute } from "next";
import { getKataList } from "@/app/data/get-kata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shotokan-kata.org";

  return getKataList().flatMap((kata) =>
    ["info", "motions", "map"].map((page) => ({
      url: `${baseUrl}/kata/${kata.id}/${page}`,
    })),
  );
}
