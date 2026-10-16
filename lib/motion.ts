import { type Motion, Position, type Technique } from "@/type";

export type Angle = "back" | "side" | "default";

const TECHNIQUE_WITH_OBVIOUS_TARGET = ['gedan-barai']

// Technique name with its target: "chudan uchi-uke".
const getTargetedName = (technique: Technique) =>
  [TECHNIQUE_WITH_OBVIOUS_TARGET.includes(technique.name) ? undefined : technique.target, technique.name].filter(Boolean).join(" ");

// Technique name shown as the card title, without the target, which the
// techniques table already shows: "uchi-uke". A target word that is part of
// the name itself stays: "gedan-barai". The step index is shown separately,
// in the step selector.
export const getTechniqueName = (motion: Motion) => motion.techniques[0].name;

// Full motion name with its step index and target, for contexts without a
// separate step selector or techniques table (e.g. image alt text):
// "8 - chudan uchi-uke".
export const getMotionName = (motion: Motion) =>
  [motion.index, getTargetedName(motion.techniques[0])]
    .filter(Boolean)
    .join(" - ");

// All the techniques of a motion with their target, for the rare motions
// combining two: "chudan uchi ude-uke + soete".
export const getTechniquesName = (motion: Motion) =>
  motion.techniques.map(getTargetedName).join(" + ");

export const getPositionName = (position: Position) => {
  switch (position) {
    case Position.HACHIJI:
      return `Shizentai ${position} dachi`;
    default:
      return `${position} dachi`;
  }
};

export const getPictureName = (
  motion: Motion,
  isBackPictureDisplayed: boolean | undefined,
  isSidePictureDisplayed: boolean | undefined,
) => {
  const nameItems: (string | undefined)[] = [
    `${motion.position}`,
    ...motion.techniques.map(
      (technique) => `${technique.side}_${technique.target}_${technique.name}`,
    ),
    motion.orientation,
    ...(isBackPictureDisplayed ? ["back"] : []),
    ...(isSidePictureDisplayed ? ["side"] : []),
  ];
  return `/motions/${nameItems.join("_")}.png`;
};

// Which picture to show for a motion given the selected camera angle: the
// requested angle when the motion has a picture for it, the default otherwise.
export const getDisplayedAngle = (motion: Motion, angle: Angle) => ({
  isBackPictureDisplayed:
    (angle === "back" || motion.hasNoFrontPicture) && motion.hasBackPicture,
  isSidePictureDisplayed: angle === "side" && motion.hasSidePicture,
});
