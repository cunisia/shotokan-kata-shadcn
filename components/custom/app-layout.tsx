"use client";

import { groupBy } from "es-toolkit";
import type { ParamValue } from "next/dist/server/request/params";
import { useParams } from "next/navigation";
import { getKata, getKataList } from "@/app/data/get-kata";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Level } from "@/type";

const getPageTitle = (kataId: string | undefined) => {
  if (!kataId) {
    return "";
  }
  return getKata(kataId)?.name ?? "";
};

const LEVEL_TO_VALUE: Record<Level, number> = {
  [Level.BEGINNER]: 0,
  [Level.INTERMEDIATE]: 2,
  [Level.ADVANCED]: 3,
};

const sortLevel = (l1: Level, l2: Level) =>
  LEVEL_TO_VALUE[l1] - LEVEL_TO_VALUE[l2];

const getParamValueAsString = (value: ParamValue): string =>
  typeof value === "string" ? value : "";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const katas = getKataList();

  const { kataId: kataIdValue } = useParams();
  const kataId = getParamValueAsString(kataIdValue);

  const kataByLevel = groupBy(katas, (kata) => kata.level);

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          {Object.values(Level)
            .sort(sortLevel)
            .map((level) => (
              <SidebarGroup key={level}>
                <SidebarGroupLabel className="capitalize">
                  {level}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  {(kataByLevel[level] ?? []).map((kata) => (
                    <SidebarMenu key={kata.id}>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <a
                            className={kata.id === kataId ? "text-bold" : ""}
                            href={`/kata/${kata.id}/motions`}
                          >
                            {kata.name}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  ))}
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="h-svh flex flex-col">
          <header className="relative py-2 shrink-0">
            <SidebarTrigger
              size="icon-lg"
              className="[&_svg]:size-5! absolute left-1 top-1/2 -translate-y-1/2"
            />
            <h1 className="text-center text-2xl font-semibold">
              {getPageTitle(kataId)}
            </h1>
          </header>
          <div className="flex flex-col flex-1 min-h-0">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
