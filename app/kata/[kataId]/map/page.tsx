"use client";

import { notFound, useParams } from "next/navigation";
import { getKata } from "@/app/data/get-kata";
import { ZoomableImage } from "@/components/custom/zoomable-image";
import { Card, CardContent } from "@/components/ui/card";
import type { Kata } from "@/type";

const getMapImageName = (kata: Kata) => {
  return `/maps/${kata.id}.png`;
};

export default function Page() {
  const { kataId } = useParams();
  const kata = getKata(typeof kataId === "string" ? kataId : "");

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
