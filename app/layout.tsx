import { Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import AppLayout from "@/components/custom/app-layout";
import { RegisterSW } from "@/components/custom/register-sw";
import { ThemeProvider } from "@/components/theme-provider";
import { BACKGROUND_COLOR, SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Shotokan Kata",
    template: "%s | Shotokan Kata",
  },
  description:
    "Explore Shotokan karate katas, techniques, and step-by-step sequences to support your practice.",
  keywords: "shotokan, kata, karate, jka, kwf",
  metadataBase: new URL(SITE_URL),
  // Installed on iOS: full-screen app with a dark status bar. The title is
  // the home screen label, short like the manifest's `short_name`.
  appleWebApp: {
    capable: true,
    title: "Kata",
    statusBarStyle: "black",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shotokan Kata",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: BACKGROUND_COLOR,
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
        <RegisterSW />
        <ThemeProvider forcedTheme="dark">
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
