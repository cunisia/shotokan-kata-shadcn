import { notFound } from "next/navigation";
import { getKata } from "@/app/data/get-kata";
import { getKataMotionsMetadata } from "@/app/data/kata-metadata";
import MotionsCarousel from "@/components/custom/motions-carousel";
import { getKataBreadcrumbJsonLd, JsonLd } from "@/lib/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kataId: string }>;
}) {
  const { kataId } = await params;
  const kata = getKata(kataId);
  return {
    ...(kata && getKataMotionsMetadata(kata)),
    alternates: {
      canonical: `/kata/${kataId}/motions`,
    },
  };
}

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ kataId: string }>;
}>) {
  const { kataId } = await params;
  const kata = getKata(kataId);
  if (!kata) {
    notFound();
  }

  return (
    <>
      <JsonLd data={getKataBreadcrumbJsonLd(kata, "motions")} />
      <MotionsCarousel kataId={kata.id} motions={kata.motions} />
    </>
  );
}
