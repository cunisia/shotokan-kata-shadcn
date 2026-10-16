import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <p>Page not found.</p>
      <Button variant="outline" nativeButton={false} render={<Link href="/" />}>
        Back to the kata list
      </Button>
    </div>
  );
}
