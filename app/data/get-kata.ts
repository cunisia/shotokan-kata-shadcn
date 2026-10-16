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
  kata: Omit<UnpublishedKata, "isPublished">,
): UnpublishedKata => ({ ...kata, isPublished: false });

const PUBLISHED_KATA: Kata[] = [
  HEIAN_SHODAN,
  HEIAN_NIDAN,
  HEIAN_SANDAN,
  HEIAN_YONDAN,
  HEIAN_GODAN,
  TEKKI_SHODAN,
  JION,
  BASSAI_DAI,
];

const UNPUBLISHED_KATA: UnpublishedKata[] = [
  unpublished({
    id: "tekki-nidan",
    name: "Tekki Nidan",
    level: Level.ADVANCED,
    numberOfMoves: 24,
  }),
  unpublished({
    id: "tekki-sandan",
    name: "Tekki Sandan",
    level: Level.ADVANCED,
    numberOfMoves: 36,
  }),
  unpublished({
    id: "bassai-sho",
    name: "Bassai Sho",
    level: Level.ADVANCED,
    numberOfMoves: 27,
  }),
  unpublished({
    id: "kanku-dai",
    name: "Kanku Dai",
    level: Level.INTERMEDIATE,
    numberOfMoves: 65,
  }),
  unpublished({
    id: "kanku-sho",
    name: "Kanku Sho",
    level: Level.ADVANCED,
    numberOfMoves: 48,
  }),
  unpublished({
    id: "empi",
    name: "Empi",
    level: Level.INTERMEDIATE,
    numberOfMoves: 37,
  }),
  unpublished({
    id: "jiin",
    name: "Jiin",
    level: Level.ADVANCED,
    numberOfMoves: 38,
  }),
  unpublished({
    id: "jitte",
    name: "Jitte",
    level: Level.ADVANCED,
    numberOfMoves: 24,
  }),
  unpublished({
    id: "hangetsu",
    name: "Hangetsu",
    level: Level.ADVANCED,
    numberOfMoves: 41,
  }),
  unpublished({
    id: "gankaku",
    name: "Gankaku",
    level: Level.ADVANCED,
    numberOfMoves: 42,
  }),
  unpublished({
    id: "chinte",
    name: "Chinte",
    level: Level.ADVANCED,
    numberOfMoves: 32,
  }),
  unpublished({
    id: "sochin",
    name: "Sochin",
    level: Level.ADVANCED,
    numberOfMoves: 41,
  }),
  unpublished({
    id: "nijushiho",
    name: "Nijushiho",
    level: Level.ADVANCED,
    numberOfMoves: 34,
  }),
  unpublished({
    id: "meikyo",
    name: "Meikyo",
    level: Level.ADVANCED,
    numberOfMoves: 33,
  }),
  unpublished({
    id: "unsu",
    name: "Unsu",
    level: Level.ADVANCED,
    numberOfMoves: 48,
  }),
  unpublished({
    id: "wankan",
    name: "Wankan",
    level: Level.ADVANCED,
    numberOfMoves: 24,
  }),
  unpublished({
    id: "gojushiho-dai",
    name: "Gojushiho Dai",
    level: Level.ADVANCED,
    numberOfMoves: 67,
  }),
  unpublished({
    id: "gojushiho-sho",
    name: "Gojushiho Sho",
    level: Level.ADVANCED,
    numberOfMoves: 65,
  }),
];

// The 26 kata of the JKA (Japan Karate Association) Shotokan curriculum, in
// curriculum order. Single source of truth for every kata list on the site.
const ALL_KATA: KataListItem[] = [...PUBLISHED_KATA, ...UNPUBLISHED_KATA];

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
