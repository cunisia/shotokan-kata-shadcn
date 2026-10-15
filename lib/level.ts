import { Level } from "@/type";

const LEVEL_TO_VALUE: Record<Level, number> = {
  [Level.BEGINNER]: 0,
  [Level.INTERMEDIATE]: 2,
  [Level.ADVANCED]: 3,
};

export const sortLevel = (l1: Level, l2: Level) =>
  LEVEL_TO_VALUE[l1] - LEVEL_TO_VALUE[l2];

export const LEVELS_IN_ORDER: Level[] = Object.values(Level).sort(sortLevel);

export const getLevelClassNames = (level: Level) => {
  switch (level) {
    case Level.BEGINNER:
      return "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300";
    case Level.INTERMEDIATE:
      return "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300";
    case Level.ADVANCED:
      return "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300";
  }
};
