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
        {kata.isPublished ? kata.numberOfMoves : "—"}
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
          A kata is a fixed sequence of stances, blocks and strikes performed
          against imaginary opponents, and one of the three pillars of Shotokan
          training alongside kihon and kumite. This site breaks each kata down
          into its numbered moves, with pictures of every move (sometimes from
          several angles), a floor map of its path (embusen) and key facts such
          as its level, number of moves and kiai.
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
