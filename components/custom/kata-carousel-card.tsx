import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getKataCoverPicture } from "@/lib/kata-cover";
import type { Kata, KataListItem } from "@/type";

// Card width (see KataCarouselRow): 40% of the viewport on phones, a quarter
// of it on small screens, a fifth of the 900px homepage column on large ones.
const KATA_CARD_IMAGE_SIZES =
  "(min-width: 1024px) 170px, (min-width: 640px) 25vw, 40vw";

// Same portrait ratio as the motion pictures (385x500).
const PICTURE_BOX =
  "relative aspect-[385/500] w-full overflow-hidden rounded-lg border";

// Bottom centre: a corner badge at the top would often hide the karateka's
// head on the cover pictures.
const BADGE_POSITION = "absolute bottom-2 left-1/2 -translate-x-1/2";

function MovesCount({ kata }: Readonly<{ kata: KataListItem }>) {
  return (
    <span className="text-xs tabular-nums text-muted-foreground">
      {kata.numberOfMoves} moves
    </span>
  );
}

// A published kata: the whole card links to its motions page. The focus ring
// is drawn on an inset overlay, so the carousel's overflow does not clip it.
export function KataCard({
  kata,
  isAboveTheFold = false,
  isLcpCandidate = false,
}: Readonly<{
  kata: Kata;
  isAboveTheFold?: boolean;
  isLcpCandidate?: boolean;
}>) {
  return (
    <Link
      href={`/kata/${kata.id}/motions`}
      className="group relative flex flex-col gap-1.5 rounded-lg outline-none after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50"
    >
      <div className={cn(PICTURE_BOX, "bg-white")}>
        <Image
          src={getKataCoverPicture(kata)}
          // Decorative: the card text names the kata.
          alt=""
          width={385}
          height={500}
          sizes={KATA_CARD_IMAGE_SIZES}
          loading={isAboveTheFold ? "eager" : "lazy"}
          fetchPriority={isLcpCandidate ? "high" : undefined}
          className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
        {kata.isUnderReview && (
          <Badge
            className={cn(
              BADGE_POSITION,
              "text-orange-700 dark:bg-orange-950 dark:text-orange-300",
            )}
          >
            Under Review
          </Badge>
        )}
      </div>
      <div className="flex flex-col px-0.5 pb-1">
        <span className="truncate font-medium underline-offset-4 group-hover:underline">
          {kata.name}
        </span>
        <MovesCount kata={kata} />
      </div>
    </Link>
  );
}

// An unpublished kata has no page: like the sidebar entries, a disabled link
// that is neither followed nor focusable. The tiger logo stands in for a
// cover picture: white on a transparent background, so the whole box shows
// the muted token, the card's grey.
export function KataPlaceholderCard({
  kata,
}: Readonly<{ kata: KataListItem }>) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: an <a> needs an href, and this link has nowhere to go.
    // biome-ignore lint/a11y/useFocusableInteractive: disabled, so deliberately out of the tab order.
    <div
      role="link"
      aria-disabled="true"
      className="flex cursor-default flex-col gap-1.5"
    >
      {/* A column rather than an absolute badge: the tiger is centred in the
          space above the badge, which sits where the cover badges do (bottom
          centre, 0.5rem from the edge). */}
      <div className={cn(PICTURE_BOX, "flex flex-col items-center bg-muted")}>
        <div className="flex min-h-0 w-full flex-1 items-center justify-center">
          <Image
            src="/tiger-placeholder.png"
            alt=""
            width={256}
            height={256}
            sizes="128px"
            loading="lazy"
            className="w-1/2 opacity-40 grayscale"
          />
        </div>
        <Badge variant="outline" className="mb-2 bg-background">
          Coming soon
        </Badge>
      </div>
      <div className="flex flex-col px-0.5 pb-1">
        <span className="truncate font-medium text-muted-foreground">
          {kata.name}
        </span>
        <MovesCount kata={kata} />
      </div>
    </div>
  );
}
