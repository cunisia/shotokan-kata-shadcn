import { groupBy } from "es-toolkit";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllKataList } from "@/app/data/get-kata";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LEVELS_IN_ORDER } from "@/lib/level";
import type { KataListItem } from "@/type";

export const metadata: Metadata = {
  title: {
    absolute: "Shotokan Kata List & Step-by-Step Guide",
  },
  description:
    "The Shotokan kata list, ordered by level, with step-by-step motions and pictures, floor maps (embusen) and key facts such as moves and kiai for each kata.",
  alternates: {
    canonical: "/",
  },
};

function KataRow({ kata }: Readonly<{ kata: KataListItem }>) {
  return (
    <TableRow>
      <TableCell className="whitespace-normal">
        <div className="flex flex-wrap items-center gap-2">
          {kata.isPublished ? (
            <Link
              href={`/kata/${kata.id}/motions`}
              className="py-1 font-medium underline-offset-4 hover:underline"
            >
              {kata.name}
            </Link>
          ) : (
            <span className="text-muted-foreground">{kata.name}</span>
          )}
          {kata.isPublished && kata.isUnderReview && (
            <Badge className="text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Under Review
            </Badge>
          )}
          {!kata.isPublished && <Badge variant="outline">Coming soon</Badge>}
        </div>
      </TableCell>
      <TableCell className="text-right tabular-nums">
        {kata.numberOfMoves}
      </TableCell>
    </TableRow>
  );
}

export default function Page() {
  const kataByLevel = groupBy(getAllKataList(), (kata) => kata.level);

  return (
    <div className="w-full overflow-y-auto px-4 pb-6 flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <p>
          The kata capture the essence of Shotokan karate. For a very long time,
          they were the only means of passing on karate knowledge from sensei to
          disciple. They are taught in the dojo, by the sensei.
        </p>
        <p>
          This site is meant as a textbook to help you practise them outside the
          dojo, should you forget part of one. Each kata page brings together a
          series of cards (one per motion), a floor map of the kata's path
          (embusen), a video, and some general information. May it help you in
          your practice.
        </p>
      </section>

      <section aria-labelledby="kata-list" className="flex flex-col gap-2">
        <h2 id="kata-list" className="text-xl font-semibold">
          Shotokan kata list
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kata</TableHead>
              <TableHead className="text-right">Moves</TableHead>
            </TableRow>
          </TableHeader>
          {LEVELS_IN_ORDER.filter((level) => kataByLevel[level]).map(
            (level) => (
              <TableBody key={level}>
                <TableRow className="hover:bg-transparent">
                  <TableHead
                    colSpan={2}
                    scope="rowgroup"
                    className="capitalize"
                  >
                    {level}
                  </TableHead>
                </TableRow>
                {kataByLevel[level].map((kata) => (
                  <KataRow key={kata.id} kata={kata} />
                ))}
              </TableBody>
            ),
          )}
        </Table>
      </section>
    </div>
  );
}
