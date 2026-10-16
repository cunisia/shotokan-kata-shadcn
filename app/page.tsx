import { groupBy } from "es-toolkit";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllKataList } from "@/app/data/get-kata";
import { getKataNumberOfKiai } from "@/app/data/kata-stats";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getLevelClassNames, LEVELS_IN_ORDER } from "@/lib/level";
import type { Kata, UnpublishedKata } from "@/type";

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

const KATA_PAGES = [
  { path: "motions", label: "Motions" },
  { path: "map", label: "Map" },
  { path: "info", label: "Info" },
] as const;

function KataRow({ kata }: Readonly<{ kata: Kata }>) {
  return (
    <TableRow>
      <TableCell className="whitespace-normal">
        <Link
          href={`/kata/${kata.id}/info`}
          className="font-medium underline-offset-4 hover:underline"
        >
          {kata.name}
        </Link>
        {kata.meaning && (
          <p className="text-muted-foreground">{kata.meaning}</p>
        )}
        <nav
          aria-label={`${kata.name} pages`}
          className="mt-1 flex gap-4 text-sm"
        >
          {KATA_PAGES.map(({ path, label }) => (
            <Link
              key={path}
              href={`/kata/${kata.id}/${path}`}
              className="py-1 text-primary underline-offset-4 hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>
      </TableCell>
      <TableCell className="text-right tabular-nums">
        {kata.numberOfMoves}
      </TableCell>
      <TableCell className="text-right tabular-nums">
        {getKataNumberOfKiai(kata)}
      </TableCell>
    </TableRow>
  );
}

export default function Page() {
  const allKata = getAllKataList();
  const publishedKata = allKata.filter(
    (kata): kata is Kata => kata.isPublished,
  );
  const unpublishedKata = allKata.filter(
    (kata): kata is UnpublishedKata => !kata.isPublished,
  );
  const kataByLevel = groupBy(publishedKata, (kata) => kata.level);

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
        <div className="flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/kata/heian-shodan/motions" />}
          >
            Start with Heian Shodan
          </Button>
          <Link
            href="/about"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Why this site?
          </Link>
        </div>
      </section>

      <section aria-labelledby="kata-list" className="flex flex-col gap-2">
        <h2 id="kata-list" className="text-xl font-semibold">
          Shotokan kata list
        </h2>
        <p className="text-sm text-muted-foreground">
          {publishedKata.length} of the {allKata.length} JKA Shotokan kata are
          covered so far, ordered by level.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kata</TableHead>
              <TableHead className="text-right">Moves</TableHead>
              <TableHead className="text-right">Kiai</TableHead>
            </TableRow>
          </TableHeader>
          {LEVELS_IN_ORDER.filter((level) => kataByLevel[level]).map(
            (level) => (
              <TableBody key={level}>
                <TableRow className="hover:bg-transparent">
                  <TableHead colSpan={3} scope="colgroup" className="h-10">
                    <Badge className={getLevelClassNames(level)}>{level}</Badge>
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

      {unpublishedKata.length > 0 && (
        <section aria-labelledby="coming-soon" className="flex flex-col gap-2">
          <h2 id="coming-soon" className="text-xl font-semibold">
            Coming soon
          </h2>
          <p className="text-sm text-muted-foreground">
            The other standard Shotokan kata, not covered yet.
          </p>
          <ul className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
            {unpublishedKata.map((kata) => (
              <li
                key={kata.id}
                className="flex items-center justify-between gap-2 border-b py-2 text-muted-foreground"
              >
                <span>{kata.name}</span>
                <span className="text-xs uppercase tracking-wide opacity-70">
                  Coming soon
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
