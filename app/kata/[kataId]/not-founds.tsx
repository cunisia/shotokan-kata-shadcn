import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="w-full h-full flex flex-col justify-center items-center gap-4">
            <p>Could not find kata.</p>       
            <Button variant="outline">
                <Link href='/'>Go Back</Link>
            </Button>
        </main>
    )
}