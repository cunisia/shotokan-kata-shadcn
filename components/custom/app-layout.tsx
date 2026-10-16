import { getAllKataList } from "@/app/data/get-kata";
import AppLayoutClient, { type SidebarKata } from "./app-layout-client";

// Server Component: reads the kata list here so the full kata data (motions,
// descriptions) never ships to the browser. The client part only receives
// what the sidebar and the page title need.
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const kataList: SidebarKata[] = getAllKataList().map((kata) => ({
    id: kata.id,
    name: kata.name,
    level: kata.level,
    isPublished: kata.isPublished,
    isUnderReview: kata.isPublished && kata.isUnderReview === true,
  }));

  return <AppLayoutClient kataList={kataList}>{children}</AppLayoutClient>;
}
