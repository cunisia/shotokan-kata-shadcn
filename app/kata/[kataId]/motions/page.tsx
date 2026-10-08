"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { getKata } from "@/app/data/get-kata";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import TechniquesTables from "@/components/ui/techniques-table";
import { type Motion, Position } from "@/type";

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

const getPictureName = (motion: Motion, isBack?: boolean) => {
  const nameItems: (string | undefined)[] = [
    motion.position,
    ...motion.techniques.map(
      (technique) => `${technique.side}_${technique.target}_${technique.name}`,
    ),
    motion.orientation,
    ...(isBack ? ["back"] : []),
  ];
  return `/${nameItems.join("_")}.png`;
};

const getMotionId = (motion: Motion) => {
  if (motion.index) {
    return motion.index;
  }
  return motion.techniques[0].name;
};

export default function Page() {
  const [showBackPicture, setShowBackPicture] = useState<boolean>(false);

  const { kataId } = useParams();
  const kata = getKata(typeof kataId === "string" ? kataId : "");

  const isBackPictureDisplayed = (motion: Motion) =>
    motion.hasBackPicture && showBackPicture;
  const isBackPictureSwitchDisplayed = (motion: Motion) =>
    motion.hasBackPicture || showBackPicture;
  const isTableDisplayed = (motion: Motion) =>
    !["yoi", "yame"].includes(motion.techniques[0].name);

  if (!kata) {
    notFound();
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {kata.techniques.map((motion) => (
          <CarouselItem key={getMotionId(motion)}>
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h2 className="text-xl font-semibold capitalize">
                      {getMotionName(motion)}
                    </h2>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="relative">
                    {motion.kiai && (
                      <Badge
                        variant="destructive"
                        className="absolute top-2 right-2 font-bold"
                      >
                        Kiai!
                      </Badge>
                    )}
                    <Image
                      src={getPictureName(
                        motion,
                        motion.hasBackPicture && showBackPicture,
                      )}
                      alt={getMotionName(motion)}
                      width={385}
                      height={500}
                    />
                    {isBackPictureDisplayed(motion) && (
                      <Badge
                        variant="secondary"
                        className="absolute bottom-2 right-2 font-bold"
                      >
                        Back
                      </Badge>
                    )}
                  </div>
                  {isBackPictureSwitchDisplayed(motion) && (
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={showBackPicture}
                        onCheckedChange={(isChecked) =>
                          setShowBackPicture(isChecked)
                        }
                      />
                      <Label htmlFor="airplane-mode">Show back picture</Label>
                    </div>
                  )}
                  {isTableDisplayed(motion) && (
                    <TechniquesTables motion={motion} />
                  )}
                  <div className="grid grid-cols-2">
                    {!isTableDisplayed(motion) && (
                      <>
                        <Item className="items-start">
                          <ItemContent>
                            <ItemTitle>Technique</ItemTitle>
                            <ItemDescription className="first-letter:uppercase">
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
                                        <ItemTitle>Target</ItemTitle>
                                        <ItemDescription className="first-letter:uppercase">{motion.techniques[0].target}</ItemDescription>
                                    </ItemContent>
                                </Item>)
                            }
                            { motion.techniques[0].side &&
                                (<Item className="items-start">
                                    <ItemContent>
                                        <ItemTitle>Side</ItemTitle>
                                        <ItemDescription className="first-letter:uppercase">{getSideName(motion.techniques[0].side)}</ItemDescription>
                                    </ItemContent>
                                </Item>)
                            } */}
                      </>
                    )}
                    <Item className="items-start">
                      <ItemContent>
                        <ItemTitle>Position</ItemTitle>
                        <ItemDescription className="first-letter:uppercase">
                          {getPositionName(motion.position)}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                    {motion.note && (
                      <Item className="col-span-2 items-start">
                        <ItemContent>
                          <ItemTitle>Note</ItemTitle>
                          <ItemDescription className="first-letter:uppercase">
                            {motion.note}
                          </ItemDescription>
                        </ItemContent>
                      </Item>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
