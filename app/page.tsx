import { groupBy } from "es-toolkit";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllKataList } from "@/app/data/get-kata";
import KataCarouselRow from "@/components/custom/kata-carousel-row";
import { Button } from "@/components/ui/button";
import { getWebSiteJsonLd, JsonLd } from "@/lib/json-ld";
import { LEVELS_IN_ORDER } from "@/lib/level";

export const metadata: Metadata = {
  title: {
    absolute: "Shotokan Kata – Step-by-Step Guide",
  },
  description:
    "The Shotokan kata list, ordered by level, with step-by-step motions and pictures, floor maps (embusen) and key facts such as moves and kiai for each kata.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  // Published kata first, each half keeping the canonical list order, so every
  // level group starts with the kata that have a page.
  const allKata = getAllKataList();
  const kataByLevel = groupBy(
    [
      ...allKata.filter((kata) => kata.isPublished),
      ...allKata.filter((kata) => !kata.isPublished),
    ],
    (kata) => kata.level,
  );

  return (
    <div className="w-full overflow-y-auto px-4 pb-6">
      <JsonLd data={getWebSiteJsonLd()} />
      <section className="mt-8">
        <div className="flex flex-col gap-4">
          <p>
            The kata capture the essence of Shotokan karate. For a very long
            time, they were the only means of passing on karate knowledge from
            sensei to disciple. They are taught in the dojo, by the sensei.
          </p>
          <p>
            This site is meant as a textbook to help you practise them outside
            the dojo, should you forget part of one. Each kata page brings
            together a series of cards (one per motion), a floor map of the
            kata's path (embusen), a video, and some general information. May it
            help you in your practice.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/kata/heian-shodan/motions" />}
          >
            Start with Heian Shodan
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/about" />}
          >
            Why this site?
          </Button>
        </div>
      </section>

      {/* One h2 per level under the layout's h1: the levels are the list's
          only structure, so a "kata list" heading above them would be empty. */}
      <div className="mt-10 flex flex-col gap-8">
        {LEVELS_IN_ORDER.filter((level) => kataByLevel[level]).map(
          (level, index) => (
            <KataCarouselRow
              key={level}
              level={level}
              kataList={kataByLevel[level]}
              isFirstRow={index === 0}
            />
          ),
        )}
      </div>
    </div>
  );
}
