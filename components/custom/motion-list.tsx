"use client";
import { cn } from "cn";
import Image from "next/image";
import { type RefObject, useLayoutEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTitle } from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  type Angle,
  getDisplayedAngle,
  getPictureName,
  getPositionName,
  getTechniquesName,
} from "@/lib/motion";
import type { Motion } from "@/type";

type MotionListProps = {
  motions: Motion[];
  angle: Angle;
  currentIndex: number;
  currentRowRef: RefObject<HTMLButtonElement | null>;
  onSelect: (index: number) => void;
};

// Arrow keys, Home and End move the focus between rows, on top of Tab.
const moveFocus = (event: React.KeyboardEvent<HTMLUListElement>) => {
  const rows = Array.from(
    event.currentTarget.querySelectorAll<HTMLButtonElement>(
      "[data-slot=motion-list-row]",
    ),
  );
  const focusedIndex = rows.indexOf(
    document.activeElement as HTMLButtonElement,
  );
  const nextIndex = {
    ArrowDown: Math.min(focusedIndex + 1, rows.length - 1),
    ArrowUp: Math.max(focusedIndex - 1, 0),
    Home: 0,
    End: rows.length - 1,
  }[event.key];
  if (nextIndex === undefined) return;
  event.preventDefault();
  rows[nextIndex]?.focus();
};

function MotionList({
  motions,
  angle,
  currentIndex,
  currentRowRef,
  onSelect,
}: MotionListProps) {
  const listRef = useRef<HTMLUListElement>(null);

  // Centre the current motion in the scrollable list when it opens. The list
  // scroll position is set directly rather than with `scrollIntoView`, which
  // could also scroll the page or the carousel behind it.
  useLayoutEffect(() => {
    const list = listRef.current;
    const row = currentRowRef.current;
    if (!list || !row) return;
    // The list is the rows' offset parent (it is `relative`).
    list.scrollTop = row.offsetTop - (list.clientHeight - row.offsetHeight) / 2;
  }, [currentRowRef]);

  return (
    <ul
      ref={listRef}
      aria-label="Motions"
      onKeyDown={moveFocus}
      className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain p-1"
    >
      {motions.map((motion, index) => {
        const isCurrent = index === currentIndex;
        const { isBackPictureDisplayed, isSidePictureDisplayed } =
          getDisplayedAngle(motion, angle);
        return (
          <li key={`${motion.index}-${motion.techniques[0].name}`}>
            <button
              type="button"
              ref={isCurrent ? currentRowRef : undefined}
              data-slot="motion-list-row"
              aria-current={isCurrent ? "step" : undefined}
              onClick={() => onSelect(index)}
              className={cn(
                "flex h-18 w-full items-center gap-3 rounded-xl px-2 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-[3px] focus-visible:ring-ring/50",
                isCurrent && "bg-muted ring-1 ring-foreground/20",
              )}
            >
              <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded-md bg-white">
                <Image
                  src={getPictureName(
                    motion,
                    isBackPictureDisplayed,
                    isSidePictureDisplayed,
                  )}
                  // Decorative: the row text already names the motion.
                  alt=""
                  width={385}
                  height={500}
                  sizes="48px"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <div className="flex min-w-0 items-center gap-2">
                  {motion.index && (
                    <span className="shrink-0 font-semibold tabular-nums">
                      {motion.index}
                    </span>
                  )}
                  <span className="truncate font-medium capitalize">
                    {getTechniquesName(motion)}
                  </span>
                  {motion.kiai && (
                    <Badge variant="destructive" className="ml-auto font-bold">
                      Kiai
                    </Badge>
                  )}
                </div>
                {motion.position && (
                  <span className="truncate text-xs text-muted-foreground first-letter:uppercase">
                    {getPositionName(motion.position)}
                  </span>
                )}
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

// The motion list in a bottom sheet on mobile, and in a popover anchored to
// the step counter that opened it from the md breakpoint. Both are only
// rendered while open.
export default function MotionListPicker({
  open,
  onOpenChange,
  anchor,
  finalFocus,
  ...listProps
}: MotionListProps & {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  anchor: HTMLElement | null;
  finalFocus: () => HTMLElement | null;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="bottom"
          initialFocus={listProps.currentRowRef}
          finalFocus={finalFocus}
          className="max-h-[80svh] rounded-t-2xl pb-[env(safe-area-inset-bottom)]"
        >
          <SheetHeader className="p-4 pr-14">
            <SheetTitle>Motions</SheetTitle>
          </SheetHeader>
          <MotionList {...listProps} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Popover
      open={open}
      onOpenChange={(nextOpen, details) => {
        // The counter toggles the list itself: ignore the outside press it
        // triggers, or the list would close on pointer down and reopen on click.
        if (
          details.reason === "outside-press" &&
          anchor?.contains(details.event.target as Node)
        ) {
          return;
        }
        onOpenChange(nextOpen);
      }}
    >
      <PopoverContent
        anchor={anchor}
        align="end"
        initialFocus={listProps.currentRowRef}
        finalFocus={finalFocus}
        className="max-h-[60vh] w-[380px] max-w-[calc(100vw-2rem)] gap-0 p-0"
      >
        <PopoverTitle className="sr-only">Motions</PopoverTitle>
        <MotionList {...listProps} />
      </PopoverContent>
    </Popover>
  );
}
