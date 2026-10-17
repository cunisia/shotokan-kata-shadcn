import { capitalize } from "es-toolkit";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { KataListItem, Level } from "@/type";
import { KataCard, KataPlaceholderCard } from "./kata-carousel-card";

// How many covers load eagerly in the first row: the ones visible on load
// (about 2.5 on phones, 5 on desktop) minus the ones mostly off screen. Only
// the first of them gets a high fetch priority (the LCP candidate).
const EAGER_COVERS = 3;

// One row of kata cards for a level, flicked freely like a streaming
// catalogue. Cards are server-rendered children, so every name and link is in
// the HTML; only the carousel mechanics run on the client.
export default function KataCarouselRow({
  level,
  kataList,
  isFirstRow = false,
}: Readonly<{
  level: Level;
  kataList: KataListItem[];
  isFirstRow?: boolean;
}>) {
  const headingId = `kata-level-${level}`;

  return (
    <section aria-labelledby={headingId}>
      <Carousel
        opts={{ align: "start", dragFree: true }}
        aria-labelledby={headingId}
        className="flex flex-col gap-3"
      >
        <div className="flex items-center justify-between gap-2">
          <h2 id={headingId} className="text-xl font-semibold">
            {capitalize(level)}
          </h2>
          {/* On touch screens the row is swiped; desktop gets arrows, in the
              heading line so they never overflow the column. */}
          <div className="hidden gap-2 md:flex">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </div>
        <CarouselContent className="-ml-3">
          {kataList.map((kata, index) => (
            <CarouselItem
              key={kata.id}
              className="basis-[40%] pl-3 sm:basis-1/4 lg:basis-1/5"
            >
              {kata.isPublished ? (
                <KataCard
                  kata={kata}
                  isAboveTheFold={isFirstRow && index < EAGER_COVERS}
                  isLcpCandidate={isFirstRow && index === 0}
                />
              ) : (
                <KataPlaceholderCard kata={kata} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
