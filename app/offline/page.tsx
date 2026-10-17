import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Served by the service worker (public/sw.js) when a page is requested
// offline and hasn't been saved on this device yet.
export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
};

export default function Offline() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center">
      <p>You're offline.</p>
      <p>
        This page hasn't been saved on this device yet. Pages you've already
        visited are still available.
      </p>
      <Button variant="outline" nativeButton={false} render={<Link href="/" />}>
        Back to the kata list
      </Button>
    </div>
  );
}
