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
import type { Angle } from "@/lib/motion";
import type { Motion } from "@/type";
import MotionCard from "./motion-card";

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
  // server: the server HTML always shows slide 0. On the client, the lazy
  // initializer reads the URL so Embla starts directly on the requested slide
  // when it initializes. `startIndex` is only an Embla option (applied in an
  // effect after hydration), not rendered markup, so there is no hydration
  // mismatch. Reading `window.location` (rather than `useSearchParams`) keeps
  // the motion cards in the prerendered HTML instead of bailing out to client
  // rendering. During a client-side navigation the URL may still be the
  // previous page's when this runs, hence the pathname check.
  const [startIndex] = useState(() => {
    if (typeof window === "undefined" || !kata) return 0;
    if (window.location.pathname !== `/kata/${kata.id}/motions`) return 0;
    const value = Number(
      new URLSearchParams(window.location.search).get("index") ?? "0",
    );
    if (!Number.isSafeInteger(value) || value < 0) return 0;
    return Math.min(value, kata.motions.length - 1);
  });

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
      opts={{ containScroll: false, startIndex }}
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
              // The first slide is visible on load (LCP) and the second one
              // peeks in on mobile: load both right away, but only give the
              // first one a high fetch priority.
              isAboveTheFold={index < 2}
              isLcpCandidate={index === 0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
