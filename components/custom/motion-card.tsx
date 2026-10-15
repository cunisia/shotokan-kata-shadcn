import { RadioGroup } from "@base-ui/react";
import { capitalize } from "es-toolkit";
import { ChevronDown, ListIcon, Undo2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import {
  type Angle,
  getDisplayedAngle,
  getMotionName,
  getPictureName,
  getPositionName,
  getTechniqueName,
} from "@/lib/motion";
import type { Motion } from "@/type";
import { Field, FieldLabel } from "../ui/field";
import { RadioGroupItem } from "../ui/radio-group";
import TechniquesTables from "./techniques-table";

export default function MotionCard({
  motion,
  angle,
  setAngle,
  goBackToYoi,
  isAboveTheFold = false,
  isLcpCandidate = false,
  isListOpen,
  toggleList,
}: {
  motion: Motion;
  angle: Angle;
  setAngle: (angle: Angle) => void;
  goBackToYoi: () => void;
  isAboveTheFold?: boolean;
  isLcpCandidate?: boolean;
  isListOpen: boolean;
  toggleList: (counter: HTMLButtonElement) => void;
}) {
  const isTableDisplayed = (motion: Motion) =>
    !["yoi", "yame"].includes(motion.techniques[0].name);

  const { isBackPictureDisplayed, isSidePictureDisplayed } = getDisplayedAngle(
    motion,
    angle,
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-center gap-2">
          <Button
            variant="outline"
            size={motion.index ? "sm" : "icon-sm"}
            data-slot="step-counter"
            aria-haspopup="dialog"
            aria-expanded={isListOpen}
            aria-label={`${
              motion.index
                ? `Step ${motion.index}`
                : capitalize(motion.techniques[0].name)
            }, open motion list`}
            onClick={(event) => toggleList(event.currentTarget)}
            // Visually compact (32px) to leave the width to the title, with
            // a 44px tap area.
            className="relative shrink-0 gap-0.5 tabular-nums after:absolute after:-inset-1.5"
          >
            {motion.index ? (
              <>
                {motion.index}
                <ChevronDown data-icon="inline-end" />
              </>
            ) : (
              // Yoi and yame have no step number, and their name is already
              // the title: an icon only avoids repeating it.
              <ListIcon />
            )}
          </Button>
          <h2 className="text-lg md:text-xl font-semibold capitalize flex-1 min-w-0 break-words">
            {getTechniqueName(motion)}
          </h2>
          {motion.techniques[0].name !== "yoi" && (
            <Button
              variant="outline"
              size="icon"
              aria-label="Back to beginning"
              onClick={goBackToYoi}
            >
              <Undo2 />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 min-h-0 gap-4">
        <div className="relative bg-white h-1/2">
          {motion.kiai && (
            <Badge
              variant="destructive"
              className="absolute top-2 right-2 font-bold"
            >
              Kiai!
            </Badge>
          )}
          {motion.isSlow && (
            <Badge className="absolute top-2 right-2 font-bold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Slow
            </Badge>
          )}
          <Image
            src={getPictureName(
              motion,
              isBackPictureDisplayed,
              isSidePictureDisplayed,
            )}
            alt={getMotionName(motion)}
            width={385}
            height={500}
            // Slide width: 85% of the viewport on mobile, the 460px content
            // column (minus card padding) from the md breakpoint.
            sizes="(min-width: 768px) 412px, 85vw"
            loading={isAboveTheFold ? "eager" : "lazy"}
            fetchPriority={isLcpCandidate ? "high" : undefined}
            className="h-full w-full object-contain"
          />
          {(isBackPictureDisplayed || isSidePictureDisplayed) && (
            <Badge
              variant="secondary"
              className="absolute bottom-2 right-2 font-bold"
            >
              {isBackPictureDisplayed && "Back"}
              {isSidePictureDisplayed && "Side"}
            </Badge>
          )}
        </div>
        <div className="flex flex-col gap-4 overflow-auto ">
          {(motion.hasBackPicture || motion.hasSidePicture) && (
            <RadioGroup
              value={angle}
              onValueChange={setAngle}
              className="flex flex-row justify-between w-full px-4 shrink-0"
            >
              <Field orientation="horizontal">
                <RadioGroupItem
                  value="default"
                  id="default"
                  disabled={motion.hasNoFrontPicture}
                />
                <FieldLabel htmlFor="default" className="font-normal">
                  Default angle
                </FieldLabel>
              </Field>
              {motion.hasBackPicture && (
                <Field orientation="horizontal">
                  <RadioGroupItem
                    value="back"
                    id="back"
                    disabled={!motion.hasBackPicture}
                  />
                  <FieldLabel htmlFor="back" className="font-normal">
                    Front angle
                  </FieldLabel>
                </Field>
              )}
              {motion.hasSidePicture && (
                <Field orientation="horizontal">
                  <RadioGroupItem
                    value="side"
                    id="side"
                    disabled={!motion.hasSidePicture}
                  />
                  <FieldLabel htmlFor="side" className="font-normal">
                    Side
                  </FieldLabel>
                </Field>
              )}
            </RadioGroup>
          )}
          {isTableDisplayed(motion) && <TechniquesTables motion={motion} />}
          <div className="grid grid-cols-2 shrink-0">
            {!isTableDisplayed(motion) && (
              <Item className="items-start">
                <ItemContent>
                  <ItemTitle className="text-muted-foreground">
                    Technique
                  </ItemTitle>
                  <ItemDescription className="first-letter:uppercase text-foreground">
                    {motion.techniques[0].name}
                    {motion.kiai && <span className="font-bold"> + kiai</span>}
                  </ItemDescription>
                </ItemContent>
              </Item>
            )}
            {motion.position && (
              <Item className="items-start col-span-2">
                <ItemContent>
                  <ItemTitle className="text-muted-foreground">
                    Position
                  </ItemTitle>
                  <ItemDescription className="first-letter:uppercase text-foreground">
                    {getPositionName(motion.position)}
                  </ItemDescription>
                </ItemContent>
              </Item>
            )}
            {motion.note && (
              <Item className="col-span-2 items-start">
                <ItemContent>
                  <ItemTitle className="text-muted-foreground">Note</ItemTitle>
                  <ItemDescription className="first-letter:uppercase line-clamp-none text-foreground">
                    {motion.note}
                  </ItemDescription>
                </ItemContent>
              </Item>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
