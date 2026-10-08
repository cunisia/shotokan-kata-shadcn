import { Kata } from "@/type";
import { HEIAN_NIDAN } from "./heian-nidan";
import { HEIAN_SHODAN } from "./heian-shodan";
import { HEIAN_SANDAN } from "./heian-sandan";

const ALL_KATA: Kata[] = [
    HEIAN_SHODAN,
    HEIAN_NIDAN,
    HEIAN_SANDAN
]

export function getKata(kataId: string): Kata | undefined {
    return ALL_KATA.find(kata => kata.id === kataId)
}

export function getKataList(): Kata[] {
    return ALL_KATA
}