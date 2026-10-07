'use client'

import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getKataList } from "./data/get-kata";
import { useParams, usePathname } from "next/navigation";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const katas = getKataList()
  const { kataId } = useParams()

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
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
                        <SidebarMenu>
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
  )
}
