import { type Kata, Type } from "@/type";

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
