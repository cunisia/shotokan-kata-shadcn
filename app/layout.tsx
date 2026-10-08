import { Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
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
import { cn } from "@/lib/utils";
import { getKataList } from "./data/get-kata";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shotokan Kata",
  description:
    "Explore Shotokan karate katas, techniques, and step-by-step sequences to support your practice.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ kataId: string }>;
}>) {
  const katas = getKataList();
  const kataId = (await params).kataId;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body>
        <ThemeProvider>
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
                            <a href={`/kata/${kata.id}/motions`}>{kata.name}</a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    ))}
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <SidebarTrigger />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
