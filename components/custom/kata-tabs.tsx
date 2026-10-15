"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const useCurrentPath = () => {
  const pathName = usePathname();

  if (pathName.includes("info")) {
    return "info";
  }
  if (pathName.includes("motions")) {
    return "motions";
  }
  if (pathName.includes("map")) {
    return "map";
  }
  if (pathName.includes("videos")) {
    return "videos";
  }
  return undefined;
};

export default function KataTabs({
  kataId,
  children,
}: Readonly<{ kataId: string; children: React.ReactNode }>) {
  const currentPath = useCurrentPath();

  return (
    <>
      <Tabs value={currentPath} className="flex-none">
        <TabsList>
          <TabsTrigger value="info">
            <Link href={`/kata/${kataId}/info`}>Info</Link>
          </TabsTrigger>
          <TabsTrigger value="motions">
            <Link href={`/kata/${kataId}/motions`}>Motions</Link>
          </TabsTrigger>
          <TabsTrigger value="map">
            <Link href={`/kata/${kataId}/map`}>Map</Link>
          </TabsTrigger>
          {/* <TabsTrigger value="videos">
            <Link href={`/kata/${kataId}/videos`}>Videos</Link>
          </TabsTrigger> */}
        </TabsList>
      </Tabs>
      <div
        className={cn(
          "flex w-full flex-col items-center flex-1 min-h-0",
          currentPath !== "motions" && "px-4",
        )}
      >
        {children}
      </div>
    </>
  );
}
