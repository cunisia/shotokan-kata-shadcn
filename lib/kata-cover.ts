import { getDisplayedAngle, getPictureName } from "@/lib/motion";
import type { Kata, Motion } from "@/type";

const isYoiOrYame = (motion: Motion) =>
  ["yoi", "yame"].includes(motion.techniques[0].name);

// Default cover: the first kiai, a kata's most striking moment; for a kata
// without one, its first technique after yoi.
const getDefaultCoverMotionIndex = (motions: Motion[]) => {
  const kiaiIndex = motions.findIndex((motion) => motion.kiai);
  if (kiaiIndex !== -1) {
    return kiaiIndex;
  }
  return Math.max(
    motions.findIndex((motion) => !isYoiOrYame(motion)),
    0,
  );
};

// The motion picture shown on a kata's homepage card: `kata.cover` when set,
// the default cover otherwise. The angle falls back like the motion card's
// (the back picture for a motion without a front one, the default angle when
// the requested one has no picture).
export function getKataCoverPicture(kata: Kata) {
  const motion =
    (kata.cover && kata.motions[kata.cover.motionIndex]) ??
    kata.motions[getDefaultCoverMotionIndex(kata.motions)];
  const { isBackPictureDisplayed, isSidePictureDisplayed } = getDisplayedAngle(
    motion,
    kata.cover?.angle ?? "default",
  );
  return getPictureName(motion, isBackPictureDisplayed, isSidePictureDisplayed);
}
