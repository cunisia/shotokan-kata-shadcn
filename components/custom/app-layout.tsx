"use client";

import { groupBy } from "es-toolkit";
import type { ParamValue } from "next/dist/server/request/params";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { getAllKataList, getKata } from "@/app/data/get-kata";
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
  useSidebar,
} from "@/components/ui/sidebar";
import { LEVELS_IN_ORDER } from "@/lib/level";
import { Badge } from "../ui/badge";

const getPageTitle = (pathName: string, kataId: string | undefined) => {
  if (pathName === "/") {
    return "Shotokan Kata";
  }
  if (pathName === "/about") {
    return "About";
  }
  if (!kataId) {
    return "";
  }
  return getKata(kataId)?.name ?? "";
};

const getParamValueAsString = (value: ParamValue): string =>
  typeof value === "string" ? value : "";

// Must be rendered inside SidebarProvider: closes the mobile sheet once a link
// is followed, since client-side navigation keeps the sidebar state.
function SidebarNavButton({
  href,
  isActive,
  children,
}: Readonly<{ href: string; isActive: boolean; children: React.ReactNode }>) {
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarMenuButton
      isActive={isActive}
      render={<Link href={href} />}
      onClick={() => setOpenMobile(false)}
    >
      {children}
    </SidebarMenuButton>
  );
}

// Unpublished kata have no page: a span is neither a link nor focusable, and
// aria-disabled applies the button's disabled styles (greyed, no pointer events).
function SidebarDisabledButton({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarMenuButton render={<span />} role="link" aria-disabled="true">
      {children}
    </SidebarMenuButton>
  );
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  const { kataId: kataIdValue } = useParams();
  const kataId = getParamValueAsString(kataIdValue);

  const kataByLevel = groupBy(getAllKataList(), (kata) => kata.level);

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarNavButton href="/" isActive={pathName === "/"}>
                      Home
                    </SidebarNavButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {LEVELS_IN_ORDER.filter((level) => kataByLevel[level]).map(
              (level) => (
                <SidebarGroup key={level}>
                  <SidebarGroupLabel className="capitalize">
                    {level}
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {kataByLevel[level].map((kata) => (
                        <SidebarMenuItem key={kata.id}>
                          {kata.isPublished ? (
                            <SidebarNavButton
                              href={`/kata/${kata.id}/motions`}
                              isActive={kata.id === kataId}
                            >
                              <div className="w-full flex flex-row gap-2 items-center justify-between">
                                <span>{kata.name}</span>
                                {kata.isUnderReview && (
                                  <Badge className="text-orange-700 dark:bg-orange-950 dark:text-orange-300 flex-none">
                                    Under Review
                                  </Badge>
                                )}
                              </div>
                            </SidebarNavButton>
                          ) : (
                            <SidebarDisabledButton>
                              {kata.name}
                            </SidebarDisabledButton>
                          )}
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ),
            )}
          </div>
          <div className="flex flex-col gap-2 shrink-0 py-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarNavButton
                  href="/about"
                  isActive={pathName.includes("about")}
                >
                  About
                </SidebarNavButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="h-svh flex flex-col">
          <header className="relative py-2 shrink-0">
            <SidebarTrigger
              size="icon-lg"
              className="[&_svg]:size-5! absolute inset-y-0 left-1 my-auto"
            />
            <h1 className="text-center text-2xl font-semibold">
              {getPageTitle(pathName, kataId)}
            </h1>
          </header>
          <div className="w-full md:w-[460px] flex-1 min-h-0 flex flex-col gap-4 items-center m-auto pb-2">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
