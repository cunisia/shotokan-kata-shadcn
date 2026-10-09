import { Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import type { Metadata } from "next";
import AppLayout from "@/components/custom/app-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shotokan Kata",
  description:
    "Explore Shotokan karate katas, techniques, and step-by-step sequences to support your practice.",
  keywords: "shotokan, kata, karate, jka, kwf",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Analytics />
        <ThemeProvider forcedTheme="dark">
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
