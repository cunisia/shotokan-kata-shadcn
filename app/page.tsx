import { cn } from "cn";
import { groupBy } from "es-toolkit";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllKataList } from "@/app/data/get-kata";
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
import { LEVELS_IN_ORDER } from "@/lib/level";
import type { KataListItem } from "@/type";

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

// The table uses separate borders: with collapsed ones, a stuck cell leaves its
// border behind and Chrome paints scrolled rows through it. Row dividers are
// therefore drawn on the cells, keeping shadcn's look (none after the last row
// of a level).
const KATA_TABLE =
  "border-separate border-spacing-0 [&_td]:border-b [&_th]:border-b [&_tbody_tr:last-child>*]:border-b-0";

// Header cells stick to the top of the page's scroll box (th, not tr: Safari
// ignores sticky on rows). z-10 keeps them above the rows' link overlay, and
// the opaque background hides the rows scrolling underneath. A sticky cell is
// bounded by the whole table, so the next level header slides over the
// previous one.
const STICKY_HEAD = "sticky z-10 bg-background";
// The column header row is h-12 (TableHead), so level headers stick below it.
const STICKY_COLUMN_HEAD = `${STICKY_HEAD} top-0`;
const STICKY_LEVEL_HEAD = `${STICKY_HEAD} top-12`;

// Published rows are clickable as a whole: the name stays the only link (one
// tab stop, real href), and its ::after is stretched over the relative row, so
// a click anywhere on the row follows it. The focus ring is drawn on that
// overlay so keyboard users see the whole row as focused.
function KataRow({ kata }: Readonly<{ kata: KataListItem }>) {
  return (
    <TableRow
      className={
        kata.isPublished
          ? "group relative cursor-pointer"
          : "hover:bg-transparent"
      }
    >
      <TableCell className="whitespace-normal">
        <div className="flex items-center justify-between gap-2">
          {kata.isPublished ? (
            <Link
              href={`/kata/${kata.id}/motions`}
              className="min-w-0 py-1 font-medium underline-offset-4 outline-none group-hover:underline after:absolute after:inset-0 after:rounded-sm focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50 focus-visible:after:ring-inset"
            >
              {kata.name}
            </Link>
          ) : (
            <span className="min-w-0 text-muted-foreground">{kata.name}</span>
          )}
          {kata.isPublished && kata.isUnderReview && (
            <Badge className="shrink-0 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Under Review
            </Badge>
          )}
          {!kata.isPublished && (
            <Badge variant="outline" className="shrink-0">
              Coming soon
            </Badge>
          )}
        </div>
      </TableCell>
      <TableCell className="text-center tabular-nums text-muted-foreground">
        {kata.numberOfMoves}
      </TableCell>
    </TableRow>
  );
}

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

      <section
        aria-labelledby="kata-list"
        className="mt-10 flex flex-col gap-2"
      >
        <h2 id="kata-list" className="text-xl font-semibold">
          Shotokan kata list
        </h2>
        {/* The page wrapper above is the scroll box; the table container's
            overflow-x-auto would otherwise capture the sticky headers. */}
        <div className="*:data-[slot=table-container]:overflow-x-visible">
          <Table className={KATA_TABLE}>
            <TableHeader>
              <TableRow>
                <TableHead className={STICKY_COLUMN_HEAD}>Kata</TableHead>
                <TableHead
                  className={cn(STICKY_COLUMN_HEAD, "w-10 text-right")}
                >
                  Moves
                </TableHead>
              </TableRow>
            </TableHeader>
            {LEVELS_IN_ORDER.filter((level) => kataByLevel[level]).map(
              (level) => (
                <TableBody key={level}>
                  <TableRow className="hover:bg-transparent">
                    <TableHead
                      colSpan={2}
                      scope="rowgroup"
                      className={cn(
                        STICKY_LEVEL_HEAD,
                        "capitalize text-muted-foreground",
                      )}
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
        </div>
      </section>
    </div>
  );
}
