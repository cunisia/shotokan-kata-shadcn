'use client";';

import { Motion, Position } from "@/type";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import TechniquesTables from "./techniques-table";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Field, FieldLabel } from "../ui/field";
import { Checkbox } from "../ui/checkbox";

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

const getPictureName = (motion: Motion, isBack?: boolean, isSide?: boolean) => {
  const nameItems: (string | undefined)[] = [
    `${motion.position}`,
    ...motion.techniques.map(
      (technique) => `${technique.side}_${technique.target}_${technique.name}`,
    ),
    motion.orientation,
    ...(isBack && !isSide ? ["back"] : []),
    ...(isSide ? ["side"] : []),
  ];
  return `/motions/${nameItems.join("_")}.png`;
};

export default function MotionCard({
  motion,
  showBackPicture,
  setShowBackPicture,
  goBackToYoi,
}: {
  motion: Motion;
  showBackPicture: boolean;
  setShowBackPicture: (show: boolean) => void;
  goBackToYoi: () => void;
}) {
  const [showSidePicture, setShowSidePicture] = useState<boolean>(false);

  const isSidePictureDisplayed = (motion: Motion) =>
    showSidePicture && motion.hasSidePicture;

  const isBackPictureDisplayed = (motion: Motion) =>
    !isSidePictureDisplayed(motion) &&
    motion.hasBackPicture &&
    (motion.hasNoFrontPicture || showBackPicture);

  const isBackPictureSwitchDisplayed = (motion: Motion) =>
    motion.hasBackPicture || showBackPicture;

  const isSidePictureSwitchDisplayed = (motion: Motion) =>
    !motion.hasBackPicture && motion.hasSidePicture;

  const isTableDisplayed = (motion: Motion) =>
    !["yoi", "yame"].includes(motion.techniques[0].name);

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
        <div className="relative bg-white h-6/10">
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
              motion.hasBackPicture && showBackPicture,
              showSidePicture,
            )}
            alt={getMotionName(motion)}
            width={385}
            height={500}
            className="h-full w-auto max-w-none m-auto"
          />
          {(isBackPictureDisplayed(motion) ||
            isSidePictureDisplayed(motion)) && (
            <Badge
              variant="secondary"
              className="absolute bottom-2 right-2 font-bold"
            >
              {isBackPictureDisplayed(motion) && "Back"}
              {isSidePictureDisplayed(motion) && "Side"}
            </Badge>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {isBackPictureSwitchDisplayed(motion) && (
            <div className="flex items-center space-x-2">
              <Switch
                checked={showBackPicture}
                onCheckedChange={(isChecked) => setShowBackPicture(isChecked)}
                id="always-show-front-picture"
              />
              <Label htmlFor="always-show-front-picture">
                Always show front picture
              </Label>
            </div>
          )}
          {isSidePictureSwitchDisplayed(motion) && (
            <div className="flex items-center space-x-2">
              <Field orientation="horizontal" data-disabled>
                <Checkbox
                  id="show-side-picture"
                  name="show-side-picture"
                  checked={showSidePicture}
                  onCheckedChange={(isChecked) => setShowSidePicture(isChecked)}
                />
                <FieldLabel htmlFor="show-side-picture">
                  Show side picture
                </FieldLabel>
              </Field>
            </div>
          )}
          {isTableDisplayed(motion) && <TechniquesTables motion={motion} />}
          <div className="grid grid-cols-2">
            {!isTableDisplayed(motion) && (
              <>
                <Item className="items-start">
                  <ItemContent>
                    <ItemTitle className="text-muted-foreground">
                      Technique
                    </ItemTitle>
                    <ItemDescription className="first-letter:uppercase text-foreground">
                      {motion.techniques[0].name}
                      {motion.kiai && (
                        <span className="font-bold"> + kiai</span>
                      )}
                    </ItemDescription>
                  </ItemContent>
                </Item>
                {/* { motion.techniques[0].target &&
                                (<Item className="items-start">
                                    <ItemContent>
                                        <ItemTitle className="text-muted-foreground">Target</ItemTitle>
                                        <ItemDescription className="first-letter:uppercase text-foreground">{motion.techniques[0].target}</ItemDescription>
                                    </ItemContent>
                                </Item>)
                            }
                            { motion.techniques[0].side &&
                                (<Item className="items-start">
                                    <ItemContent>
                                        <ItemTitle className="text-muted-foreground">Side</ItemTitle>
                                        <ItemDescription className="first-letter:uppercase text-foreground">{getSideName(motion.techniques[0].side)}</ItemDescription>
                                    </ItemContent>
                                </Item>)
                            } */}
              </>
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
