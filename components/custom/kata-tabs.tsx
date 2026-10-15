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
          <TabsTrigger
            value="info"
            nativeButton={false}
            render={<Link href={`/kata/${kataId}/info`} />}
          >
            Info
          </TabsTrigger>
          <TabsTrigger
            value="motions"
            nativeButton={false}
            render={<Link href={`/kata/${kataId}/motions`} />}
          >
            Motions
          </TabsTrigger>
          <TabsTrigger
            value="map"
            nativeButton={false}
            render={<Link href={`/kata/${kataId}/map`} />}
          >
            Map
          </TabsTrigger>
          {/* <TabsTrigger
            value="videos"
            nativeButton={false}
            render={<Link href={`/kata/${kataId}/videos`} />}
          >
            Videos
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
