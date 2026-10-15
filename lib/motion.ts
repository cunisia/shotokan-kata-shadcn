import { type Motion, Position } from "@/type";

export type Angle = "back" | "side" | "default";

export const getMotionName = (motion: Motion) => {
  const nameItems: string[] = [];
  const name = motion.techniques[0].name;
  if (motion.index) {
    nameItems.push(`${motion.index} - `);
  }
  const target = motion.techniques[0].target;
  if (target) {
    nameItems.push(target);
  }
  nameItems.push(name);
  return nameItems.join(" ");
};

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
