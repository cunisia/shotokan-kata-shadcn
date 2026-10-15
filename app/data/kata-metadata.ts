import type { Metadata } from "next";
import type { Kata } from "@/type";
import {
  getKataNumberOfAttacks,
  getKataNumberOfBlocks,
  getKataNumberOfCounts,
  getKataNumberOfKiai,
} from "./kata-stats";

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const plural = (count: number, singular: string, pluralForm = `${singular}s`) =>
  `${count} ${count === 1 ? singular : pluralForm}`;

const hasSeveralAngles = (kata: Kata) =>
  kata.motions.some((motion) => motion.hasBackPicture || motion.hasSidePicture);

export const getKataInfoMetadata = (kata: Kata): Metadata => {
  const name = kata.meaning ? `${kata.name} (${kata.meaning})` : kata.name;
  return {
    title: `${kata.name} – Meaning, History & Key Facts`,
    description: `${name}: history, ${plural(getKataNumberOfCounts(kata), "move")}, ${plural(getKataNumberOfBlocks(kata), "block")}, ${plural(getKataNumberOfAttacks(kata), "attack")} and ${plural(getKataNumberOfKiai(kata), "kiai", "kiai")}. ${capitalize(kata.level)} Shotokan kata.`,
  };
};

export const getKataMotionsMetadata = (kata: Kata): Metadata => ({
  title: `${kata.name} – Step-by-Step Motions`,
  description: `Learn ${kata.name} step by step: all ${getKataNumberOfCounts(kata)} moves with photos${hasSeveralAngles(kata) ? " from several angles" : ""}, stances, techniques and kiai points. ${capitalize(kata.level)} Shotokan kata.`,
});

export const getKataMapMetadata = (kata: Kata): Metadata => ({
  title: `${kata.name} – Embusen (Floor Pattern)`,
  description: `${kata.name} floor pattern (embusen): the direction of each move, with a zoomable diagram.`,
});
