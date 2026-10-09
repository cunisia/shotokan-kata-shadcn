import type { Kata } from "@/type";
import { HEIAN_NIDAN } from "./heian-nidan";
import { HEIAN_SANDAN } from "./heian-sandan";
import { HEIAN_SHODAN } from "./heian-shodan";
import { HEIAN_YONDAN } from "./heian-yondan";
import { HEIAN_GODAN } from "./heian-godan";

const ALL_KATA: Kata[] = [
  HEIAN_SHODAN,
  HEIAN_NIDAN,
  HEIAN_SANDAN,
  HEIAN_YONDAN,
  HEIAN_GODAN
];

export function getKata(kataId: string): Kata | undefined {
  return ALL_KATA.find((kata) => kata.id === kataId);
}

export function getKataList(): Kata[] {
  return ALL_KATA;
}
