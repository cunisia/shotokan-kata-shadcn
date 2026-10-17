import { YouTubeEmbed } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import { getKata } from "@/app/data/get-kata";
import { getKataInfoMetadata } from "@/app/data/kata-metadata";
import {
  getKataNumberOfAttacks,
  getKataNumberOfBlocks,
  getKataNumberOfKiai,
} from "@/app/data/kata-stats";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { getKataBreadcrumbJsonLd, JsonLd } from "@/lib/json-ld";
import { getLevelClassNames } from "@/lib/level";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kataId: string }>;
}) {
  const { kataId } = await params;
  const kata = getKata(kataId);
  return {
    ...(kata && getKataInfoMetadata(kata)),
    alternates: {
      canonical: `/kata/${kataId}/info`,
    },
  };
}

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
      <JsonLd data={getKataBreadcrumbJsonLd(kata, "info")} />
      <CardContent className="flex flex-col gap-2 overflow-auto">
        <div className="grid grid-cols-2">
          {kata.meaning && (
            <Item className="items-start">
              <ItemContent>
                <ItemTitle className="text-muted-foreground">Meaning</ItemTitle>
                <ItemDescription className="text-foreground">
                  {kata.meaning}
                </ItemDescription>
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
              <ItemTitle className="text-muted-foreground">
                Description
              </ItemTitle>
              <ItemDescription className="line-clamp-none text-foreground">
                {kata.description}
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item className="items-start">
            <ItemContent>
              <ItemTitle className="text-muted-foreground">
                Number of counts
              </ItemTitle>
              <ItemDescription className="text-foreground">
                {kata.numberOfMoves}
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item className="items-start">
            <ItemContent>
              <ItemTitle className="text-muted-foreground">
                Number of kiais
              </ItemTitle>
              <ItemDescription className="text-foreground">
                {getKataNumberOfKiai(kata)}
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item className="items-start">
            <ItemContent>
              <ItemTitle className="text-muted-foreground">
                Number of attacks
              </ItemTitle>
              <ItemDescription className="text-foreground">
                {getKataNumberOfAttacks(kata)}
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item className="items-start">
            <ItemContent>
              <ItemTitle className="text-muted-foreground">
                Number of blocks
              </ItemTitle>
              <ItemDescription className="text-foreground">
                {getKataNumberOfBlocks(kata)}
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        {kata.videoId && (
          <Item className="items-start">
            <ItemContent>
              <ItemTitle className="text-muted-foreground">Video</ItemTitle>
              <div className="w-full shrink-0 mt-2">
                <YouTubeEmbed
                  videoid={kata.videoId}
                  playlabel={`Play ${kata.name} demonstration`}
                />
              </div>
            </ItemContent>
          </Item>
        )}
      </CardContent>
    </Card>
  );
}
