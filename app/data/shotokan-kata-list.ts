import { getKataList } from "./get-kata";

export interface ShotokanKata {
  id: string; // same id format as Kata.id (lowercase, dash-separated)
  name: string;
}

// The 26 kata of the JKA (Japan Karate Association) Shotokan curriculum.
export const SHOTOKAN_KATA: ShotokanKata[] = [
  { id: "heian-shodan", name: "Heian Shodan" },
  { id: "heian-nidan", name: "Heian Nidan" },
  { id: "heian-sandan", name: "Heian Sandan" },
  { id: "heian-yondan", name: "Heian Yondan" },
  { id: "heian-godan", name: "Heian Godan" },
  { id: "tekki-shodan", name: "Tekki Shodan" },
  { id: "tekki-nidan", name: "Tekki Nidan" },
  { id: "tekki-sandan", name: "Tekki Sandan" },
  { id: "bassai-dai", name: "Bassai Dai" },
  { id: "bassai-sho", name: "Bassai Sho" },
  { id: "kanku-dai", name: "Kanku Dai" },
  { id: "kanku-sho", name: "Kanku Sho" },
  { id: "empi", name: "Empi" },
  { id: "jion", name: "Jion" },
  { id: "jiin", name: "Jiin" },
  { id: "jitte", name: "Jitte" },
  { id: "hangetsu", name: "Hangetsu" },
  { id: "gankaku", name: "Gankaku" },
  { id: "chinte", name: "Chinte" },
  { id: "sochin", name: "Sochin" },
  { id: "nijushiho", name: "Nijushiho" },
  { id: "meikyo", name: "Meikyo" },
  { id: "unsu", name: "Unsu" },
  { id: "wankan", name: "Wankan" },
  { id: "gojushiho-dai", name: "Gojushiho Dai" },
  { id: "gojushiho-sho", name: "Gojushiho Sho" },
];

// Standard kata the site does not cover yet, in curriculum order.
export function getUncoveredShotokanKata(): ShotokanKata[] {
  const coveredIds = new Set(getKataList().map((kata) => kata.id));
  return SHOTOKAN_KATA.filter((kata) => !coveredIds.has(kata.id));
}
