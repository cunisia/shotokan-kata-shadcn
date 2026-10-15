import { YouTubeEmbed } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import { getKata } from "@/app/data/get-kata";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kataId: string }>;
}) {
  const { kataId } = await params;
  const kata = getKata(kataId);
  return {
    title: kata?.name,
    alternates: {
      canonical: `/kata/${kataId}/videos`,
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
      <CardContent className="flex flex-col gap-2 overflow-auto h-full">
        {kata.videoId && (
          <YouTubeEmbed
            videoid={kata.videoId}
            playlabel={`Play ${kata.name} demonstration`}
          />
        )}
      </CardContent>
    </Card>
  );
}
