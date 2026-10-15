import { permanentRedirect } from "next/navigation";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ kataId: string }>;
}>) {
  const { kataId } = await params;
  permanentRedirect(`/kata/${kataId}/motions`);
}
