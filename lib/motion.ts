import { type Motion, Position } from "@/type";

export type Angle = "back" | "side" | "default";

// Technique name shown as the card title: "chudan uchi-uke". The step index
// is shown separately, in the step selector.
export const getTechniqueName = (motion: Motion) =>
  [motion.techniques[0].target, motion.techniques[0].name]
    .filter(Boolean)
    .join(" ");

// Full motion name with its step index, for contexts without a separate step
// selector (e.g. image alt text): "8 - chudan uchi-uke".
export const getMotionName = (motion: Motion) =>
  [motion.index, getTechniqueName(motion)].filter(Boolean).join(" - ");

// All the techniques of a motion, for the rare motions combining two:
// "chudan uchi ude-uke + soete".
export const getTechniquesName = (motion: Motion) =>
  motion.techniques
    .map((technique) =>
      [technique.target, technique.name].filter(Boolean).join(" "),
    )
    .join(" + ");

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
