import {
  type Kata,
  type KataListItem,
  Level,
  type UnpublishedKata,
} from "@/type";
import { BASSAI_DAI } from "./bassai-dai";
import { HEIAN_GODAN } from "./heian-godan";
import { HEIAN_NIDAN } from "./heian-nidan";
import { HEIAN_SANDAN } from "./heian-sandan";
import { HEIAN_SHODAN } from "./heian-shodan";
import { HEIAN_YONDAN } from "./heian-yondan";
import { JION } from "./jion";
import { TEKKI_SHODAN } from "./tekki-shodan";

const unpublished = (
  id: string,
  name: string,
  level: Level,
): UnpublishedKata => ({
  id,
  name,
  level,
  isPublished: false,
});

// The 26 kata of the JKA (Japan Karate Association) Shotokan curriculum, in
// curriculum order. Single source of truth for every kata list on the site.
const ALL_KATA: KataListItem[] = [
  HEIAN_SHODAN,
  HEIAN_NIDAN,
  HEIAN_SANDAN,
  HEIAN_YONDAN,
  HEIAN_GODAN,
  TEKKI_SHODAN,
  unpublished("tekki-nidan", "Tekki Nidan", Level.ADVANCED),
  unpublished("tekki-sandan", "Tekki Sandan", Level.ADVANCED),
  BASSAI_DAI,
  unpublished("bassai-sho", "Bassai Sho", Level.ADVANCED),
  unpublished("kanku-dai", "Kanku Dai", Level.INTERMEDIATE),
  unpublished("kanku-sho", "Kanku Sho", Level.ADVANCED),
  unpublished("empi", "Empi", Level.INTERMEDIATE),
  JION,
  unpublished("jiin", "Jiin", Level.ADVANCED),
  unpublished("jitte", "Jitte", Level.ADVANCED),
  unpublished("hangetsu", "Hangetsu", Level.ADVANCED),
  unpublished("gankaku", "Gankaku", Level.ADVANCED),
  unpublished("chinte", "Chinte", Level.ADVANCED),
  unpublished("sochin", "Sochin", Level.ADVANCED),
  unpublished("nijushiho", "Nijushiho", Level.ADVANCED),
  unpublished("meikyo", "Meikyo", Level.ADVANCED),
  unpublished("unsu", "Unsu", Level.ADVANCED),
  unpublished("wankan", "Wankan", Level.ADVANCED),
  unpublished("gojushiho-dai", "Gojushiho Dai", Level.ADVANCED),
  unpublished("gojushiho-sho", "Gojushiho Sho", Level.ADVANCED),
];

const PUBLISHED_KATA: Kata[] = ALL_KATA.filter(
  (kata): kata is Kata => kata.isPublished,
);

// Only published kata have pages: use this for anything that renders or
// links to a kata page.
export function getKata(kataId: string): Kata | undefined {
  return PUBLISHED_KATA.find((kata) => kata.id === kataId);
}

export function getPublishedKataList(): Kata[] {
  return PUBLISHED_KATA;
}

// Published and unpublished kata, for lists only (homepage, sidebar).
export function getAllKataList(): KataListItem[] {
  return ALL_KATA;
}
