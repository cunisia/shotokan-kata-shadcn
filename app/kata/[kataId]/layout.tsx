import { notFound } from "next/navigation";
import { getKata, getPublishedKataList } from "@/app/data/get-kata";
import KataTabs from "@/components/custom/kata-tabs";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedKataList().map((kata) => ({ kataId: kata.id }));
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ kataId: string }>;
}>) {
  const { kataId } = await params;
  if (!getKata(kataId)) {
    notFound();
  }

  return <KataTabs kataId={kataId}>{children}</KataTabs>;
}
