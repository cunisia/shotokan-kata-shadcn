import { getKata } from "@/app/data/get-kata";
import MotionsCarousel from "@/components/custom/motions-carousel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kataId: string }>;
}) {
  const { kataId } = await params;
  const kata = await getKata(kataId);
  return {
    title: kata?.name,
  };
}

export default function Page() {
  return <MotionsCarousel />;
}
