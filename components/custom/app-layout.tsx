"use client";

import type { ParamValue } from "next/dist/server/request/params";
import { notFound, useParams } from "next/navigation";
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

const getPageTitle = (kataId: string | undefined) => {
  if (!kataId) {
    return "";
  }
  return getKata(kataId)?.name ?? "";
};

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

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Katas</SidebarGroupLabel>
            <SidebarGroupContent>
              {katas.map((kata) => (
                <SidebarMenu key={kata.id}>
                  <SidebarMenuItem key={kata.id}>
                    <SidebarMenuButton isActive={kata.id === kataId}>
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
