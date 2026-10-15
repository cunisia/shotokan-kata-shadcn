import { type Kata, Type } from "@/type";

export const getKataNumberOfCounts = (kata: Kata) => {
  const lastIndex =
    kata.motions.filter((motions) => !!motions.index).pop()?.index ?? "0";
  const digits = [...lastIndex.matchAll(/\d/g)].map((match) => match[0]);
  console.log(digits);
  return parseInt(digits.join(""), 10);
};

export const getKataNumberOfBlocks = (kata: Kata) =>
  kata.motions
    .flatMap((motions) => motions.techniques)
    .filter((technique) => technique.type === Type.BLOCK).length;

export const getKataNumberOfAttacks = (kata: Kata) =>
  kata.motions
    .flatMap((motions) => motions.techniques)
    .filter((technique) => technique.type === Type.HATEMI).length;

export const getKataNumberOfKiai = (kata: Kata) =>
  kata.motions.filter((motion) => motion.kiai).length;
