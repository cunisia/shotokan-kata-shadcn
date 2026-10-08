"use client";

import Link from "next/link";
import { notFound, useParams, usePathname } from "next/navigation";
import { getKata } from "@/app/data/get-kata";
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
  return undefined;
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentPath = useCurrentPath();
  const { kataId } = useParams();
  const kata = getKata(typeof kataId === "string" ? kataId : "");
  if (!kata) {
    notFound();
  }

  return (
    <div className="w-full md:w-[460px] h-full flex flex-col gap-4 items-center m-auto">
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
        </TabsList>
      </Tabs>
      <div className="flex w-full flex-col items-centerflex w-full flex-col items-center px-4">
        {children}
      </div>
    </div>
  );
}
