import { notFound } from "next/navigation";
import { getKata } from "@/app/data/get-kata";
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
    title: kata?.name,
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
        />
      </CardContent>
    </Card>
  );
}
