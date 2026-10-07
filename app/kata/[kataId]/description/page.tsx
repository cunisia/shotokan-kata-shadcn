import { getKata } from "@/app/data/get-kata"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation";

export default async function Page({
  params
}: Readonly<{
  params: Promise<{kataId: string}>
}>) {
    const kataId = (await params).kataId;
    const kata = getKata(kataId);
    if (!kata) {
        notFound()
    }
    return (
        <Card>
            <CardContent>
                <p>{kata.description}</p>
            </CardContent>
        </Card>
    )
}