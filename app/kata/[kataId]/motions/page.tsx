import { getKata } from "@/app/data/get-kata";
import { getKataMotionsMetadata } from "@/app/data/kata-metadata";
import MotionsCarousel from "@/components/custom/motions-carousel";

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

export default function Page() {
  return <MotionsCarousel />;
}
