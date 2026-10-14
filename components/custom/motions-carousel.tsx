"use client";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import {
  notFound,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import { getKata } from "@/app/data/get-kata";
import TechniquesTables from "@/components/custom/techniques-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
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
import { type Motion, Position } from "@/type";
import MotionCard from "./motion-card";

const getMotionId = (motion: Motion) => {
  if (motion.index) {
    return motion.index;
  }
  return motion.techniques[0].name;
};

export default function MotionsCarousel() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [showBackPicture, setShowBackPicture] = useState<boolean>(false);

  const { kataId } = useParams();
  const kata = getKata(typeof kataId === "string" ? kataId : "");

  const [api, setApi] = useState<CarouselApi>();

  const goBackToYoi = () => api?.scrollTo(0);

  const [initialIndex] = useState(() => {
    const value = Number(searchParams.get("index") ?? "0");

    return Number.isSafeInteger(value) && value >= 0 ? value : 0;
  });

  const onNavigate = useEffectEvent((_api: CarouselApi) => {
    const params = new URLSearchParams(searchParams);
    const index = _api?.selectedScrollSnap();
    if (index !== undefined) {
      params.set("index", `${index}`);
    } else {
      params.delete("index");
    }
    replace(`${pathName}?${params.toString()}`);
  });

  useEffect(() => {
    if (!api) return;

    api.on("select", onNavigate);

    return () => {
      api.off("select", onNavigate);
    };
  }, [api]);

  if (!kata) {
    notFound();
  }

  return (
    <Carousel
      className="w-full flex-1 min-h-0 [&>[data-slot=carousel-content]]:h-full"
      setApi={setApi}
      opts={{ startIndex: initialIndex }}
    >
      <CarouselContent className="h-full">
        {kata.motions.map((motion, index) => (
          <CarouselItem key={getMotionId(motion)}>
            <MotionCard
              motion={motion}
              showBackPicture={showBackPicture}
              setShowBackPicture={setShowBackPicture}
              goBackToYoi={goBackToYoi}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
