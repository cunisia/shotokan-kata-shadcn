'use client";';

import { RadioGroup } from "@base-ui/react";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { type Motion, Position } from "@/type";
import { Field, FieldLabel } from "../ui/field";
import { RadioGroupItem } from "../ui/radio-group";
import TechniquesTables from "./techniques-table";

export type Angle = "back" | "side" | "default";

const getMotionName = (motion: Motion) => {
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

const getPositionName = (position: Position) => {
  switch (position) {
    case Position.HACHIJI:
      return `Shizentai ${position} dachi`;
    default:
      return `${position} dachi`;
  }
};

const getPictureName = (
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

export default function MotionCard({
  motion,
  angle,
  setAngle,
  goBackToYoi,
}: {
  motion: Motion;
  angle: Angle;
  setAngle: (angle: Angle) => void;
  goBackToYoi: () => void;
}) {
  const isTableDisplayed = (motion: Motion) =>
    !["yoi", "yame"].includes(motion.techniques[0].name);

  const isBackPictureDisplayed =
    (angle === "back" || motion.hasNoFrontPicture) && motion.hasBackPicture;

  const isSidePictureDisplayed = angle === "side" && motion.hasSidePicture;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-center">
          <h2 className="text-xl font-semibold capitalize flex-1">
            {getMotionName(motion)}
          </h2>
          {motion.techniques[0].name !== "yoi" && (
            <Button
              variant="outline"
              size="icon"
              aria-label="Back to beginning"
              onClick={goBackToYoi}
            >
              <Undo2 />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 min-h-0 gap-4">
        <div className="relative bg-white h-1/2">
          {motion.kiai && (
            <Badge
              variant="destructive"
              className="absolute top-2 right-2 font-bold"
            >
              Kiai!
            </Badge>
          )}
          {motion.isSlow && (
            <Badge className="absolute top-2 right-2 font-bold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Slow
            </Badge>
          )}
          <Image
            src={getPictureName(
              motion,
              isBackPictureDisplayed,
              isSidePictureDisplayed,
            )}
            alt={getMotionName(motion)}
            width={385}
            height={500}
            className="h-full w-full object-contain"
          />
          {(isBackPictureDisplayed || isSidePictureDisplayed) && (
            <Badge
              variant="secondary"
              className="absolute bottom-2 right-2 font-bold"
            >
              {isBackPictureDisplayed && "Back"}
              {isSidePictureDisplayed && "Side"}
            </Badge>
          )}
        </div>
        <div className="flex flex-col gap-4 overflow-auto ">
          {(motion.hasBackPicture || motion.hasSidePicture) && (
            <RadioGroup
              value={angle}
              onValueChange={setAngle}
              className="flex flex-row justify-between w-full px-4 shrink-0"
            >
              <Field orientation="horizontal">
                <RadioGroupItem
                  value="default"
                  id="default"
                  disabled={motion.hasNoFrontPicture}
                />
                <FieldLabel htmlFor="default" className="font-normal">
                  Default angle
                </FieldLabel>
              </Field>
              {motion.hasBackPicture && (
                <Field orientation="horizontal">
                  <RadioGroupItem
                    value="back"
                    id="back"
                    disabled={!motion.hasBackPicture}
                  />
                  <FieldLabel htmlFor="back" className="font-normal">
                    Front angle
                  </FieldLabel>
                </Field>
              )}
              {motion.hasSidePicture && (
                <Field orientation="horizontal">
                  <RadioGroupItem
                    value="side"
                    id="side"
                    disabled={!motion.hasSidePicture}
                  />
                  <FieldLabel htmlFor="side" className="font-normal">
                    Side
                  </FieldLabel>
                </Field>
              )}
            </RadioGroup>
          )}
          {isTableDisplayed(motion) && <TechniquesTables motion={motion} />}
          <div className="grid grid-cols-2 shrink-0">
            {!isTableDisplayed(motion) && (
              <Item className="items-start">
                <ItemContent>
                  <ItemTitle className="text-muted-foreground">
                    Technique
                  </ItemTitle>
                  <ItemDescription className="first-letter:uppercase text-foreground">
                    {motion.techniques[0].name}
                    {motion.kiai && <span className="font-bold"> + kiai</span>}
                  </ItemDescription>
                </ItemContent>
              </Item>
            )}
            {motion.position && (
              <Item className="items-start">
                <ItemContent>
                  <ItemTitle className="text-muted-foreground">
                    Position
                  </ItemTitle>
                  <ItemDescription className="first-letter:uppercase text-foreground">
                    {getPositionName(motion.position)}
                  </ItemDescription>
                </ItemContent>
              </Item>
            )}
            {motion.note && (
              <Item className="col-span-2 items-start">
                <ItemContent>
                  <ItemTitle className="text-muted-foreground">Note</ItemTitle>
                  <ItemDescription className="first-letter:uppercase line-clamp-none text-foreground">
                    {motion.note}
                  </ItemDescription>
                </ItemContent>
              </Item>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
