"use client";
import { notFound, useParams } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import { getKata } from "@/app/data/get-kata";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Motion } from "@/type";
import MotionCard, { type Angle } from "./motion-card";

const getMotionId = (motion: Motion) => {
  if (motion.index) {
    return motion.index;
  }
  return motion.techniques[0].name;
};

export default function MotionsCarousel() {
  const [angle, setAngle] = useState<Angle>("default");

  const { kataId } = useParams();
  const kata = getKata(typeof kataId === "string" ? kataId : "");

  const [api, setApi] = useState<CarouselApi>();

  const goBackToYoi = () => api?.scrollTo(0);

  // The page is prerendered at build time, so `?index=` is unknown on the
  // server: render slide 0 there and jump to the requested slide after mount.
  // Reading `window.location` (rather than `useSearchParams`) keeps the motion
  // cards in the prerendered HTML instead of bailing out to client rendering.
  const scrollToInitialIndex = useEffectEvent(
    (_api: NonNullable<CarouselApi>) => {
      const value = Number(
        new URLSearchParams(window.location.search).get("index") ?? "0",
      );
      if (!Number.isSafeInteger(value) || value <= 0) return;
      _api.scrollTo(Math.min(value, _api.scrollSnapList().length - 1), true);
    },
  );

  const onNavigate = useEffectEvent((_api: CarouselApi) => {
    const params = new URLSearchParams(window.location.search);
    const index = _api?.selectedScrollSnap();
    if (index !== undefined) {
      params.set("index", `${index}`);
    } else {
      params.delete("index");
    }
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  });

  useEffect(() => {
    if (!api) return;

    api.on("select", onNavigate);
    scrollToInitialIndex(api);

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
      opts={{ containScroll: false }}
    >
      <CarouselContent className="h-full">
        {kata.motions.map((motion, index) => (
          <CarouselItem
            key={getMotionId(motion)}
            className="basis-[85%] md:basis-full"
          >
            <MotionCard
              motion={motion}
              angle={angle}
              setAngle={setAngle}
              goBackToYoi={goBackToYoi}
              // The first slide is visible on load and the second one peeks
              // in on mobile: load both right away (LCP candidates).
              isAboveTheFold={index < 2}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
