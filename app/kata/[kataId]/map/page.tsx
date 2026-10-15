import { notFound } from "next/navigation";
import { getKata } from "@/app/data/get-kata";
import { getKataMapMetadata } from "@/app/data/kata-metadata";
import { ZoomableImage } from "@/components/custom/zoomable-image";
import { Card, CardContent } from "@/components/ui/card";
import type { Kata } from "@/type";

const getMapImageName = (kata: Kata) => {
  return `/maps/${kata.id}.png`;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kataId: string }>;
}) {
  const { kataId } = await params;
  const kata = getKata(kataId);
  return {
    ...(kata && getKataMapMetadata(kata)),
    alternates: {
      canonical: `/kata/${kataId}/map`,
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
      <CardContent className="flex flex-col gap-2 overflow-hidden">
        <ZoomableImage
          src={getMapImageName(kata)}
          alt={`${kata?.name} map`}
          width={1600}
          height={2400}
          // Never wider than the content column: viewport minus tab and card
          // padding (2 x 16px + 2 x 24px) on mobile, 460px column from md.
          sizes="(min-width: 768px) 380px, calc(100vw - 80px)"
        />
      </CardContent>
    </Card>
  );
}
