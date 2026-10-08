import { YouTubeEmbed } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import { getKata } from "@/app/data/get-kata";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { type Kata, Level, Type } from "@/type";

const getKataNumberOfCounts = (kata: Kata) => {
  const lastIndex =
    kata.motions.filter((motions) => !!motions.index).pop()?.index ?? "0";
  const digits = [...lastIndex.matchAll(/\d/g)].map((match) => match[0]);
  console.log(digits);
  return parseInt(digits.join(""), 10);
};

const getKataNumberOfBlocks = (kata: Kata) =>
  kata.motions
    .flatMap((motions) => motions.techniques)
    .filter((technique) => technique.type === Type.BLOCK).length;

const getKataNumberOfAttacks = (kata: Kata) =>
  kata.motions
    .flatMap((motions) => motions.techniques)
    .filter((technique) => technique.type === Type.HATEMI).length;

const getKataNumberOfKiai = (kata: Kata) =>
  kata.motions.filter((motion) => motion.kiai).length;

const getLevelClassNames = (level: Level) => {
  switch (level) {
    case Level.BEGINNER:
      return "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300";
    case Level.INTERMEDIATE:
      return "bg-oranbe-50 text-oranbe-700 dark:bg-oranbe-950 dark:text-oranbe-300";
    case Level.ADVANCED:
      return "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300";
  }
};

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ kataId: string }>;
}>) {
  const kataId = (await params).kataId;
  const kata = getKata(kataId);
  if (!kata) {
    notFound();
  }
  return (
    <Card>
      <CardContent className="flex flex-col gap-2 overflow-auto">
        <div className="grid grid-cols-2">
          {kata.meaning && (
            <Item className="items-start">
              <ItemContent>
                <ItemTitle>Meaning</ItemTitle>
                <ItemDescription>{kata.meaning}</ItemDescription>
              </ItemContent>
            </Item>
          )}
          <Item>
            <ItemContent className="items-end">
              <Badge className={`${getLevelClassNames(kata.level)} items-end`}>
                {kata.level}
              </Badge>
            </ItemContent>
          </Item>
          <Item className="items-start col-span-2">
            <ItemContent>
              <ItemTitle>Description</ItemTitle>
              <ItemDescription className="line-clamp-none">
                {kata.description}
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item className="items-start">
            <ItemContent>
              <ItemTitle>Number of counts</ItemTitle>
              <ItemDescription>{getKataNumberOfCounts(kata)}</ItemDescription>
            </ItemContent>
          </Item>
          <Item className="items-start">
            <ItemContent>
              <ItemTitle>Number of kiais</ItemTitle>
              <ItemDescription>{getKataNumberOfKiai(kata)}</ItemDescription>
            </ItemContent>
          </Item>
          <Item className="items-start">
            <ItemContent>
              <ItemTitle>Number of attacks</ItemTitle>
              <ItemDescription>{getKataNumberOfAttacks(kata)}</ItemDescription>
            </ItemContent>
          </Item>
          <Item className="items-start">
            <ItemContent>
              <ItemTitle>Number of blocks</ItemTitle>
              <ItemDescription>{getKataNumberOfBlocks(kata)}</ItemDescription>
            </ItemContent>
          </Item>
        </div>
        {kata.videoId && (
          <Item className="items-start">
            <ItemContent>
              <ItemTitle>Video</ItemTitle>
              <div className="w-full shrink-0 mt-2">
                <YouTubeEmbed
                  videoid={kata.videoId}
                  playlabel="Play Heian Shodan demonstration"
                />
              </div>
            </ItemContent>
          </Item>
        )}
      </CardContent>
    </Card>
  );
}
