'use client';

import { TabsTrigger, TabsContent, Tabs, TabsList } from "@/components/ui/tabs";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { getKata } from "@/app/data/get-kata";

export default async function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{kataId: string}>
}>){
    const pathName = usePathname();
    
    const kataId = (await params).kataId;
    const kata = getKata(kataId);
    if (!kata) {
      notFound()
    }

    return (
      <div className='w-full md:w-[460px] h-full flex flex-col gap-4 items-center m-auto'>
        <h1 className="text-2xl font-semibold">{kata.name}</h1>
        <Tabs defaultValue={pathName.includes('description') ? 'description' : 'motions'} className="flex-none">
          <TabsList>
            <TabsTrigger value="description"><Link href={`/kata/${kataId}/description`}>Description</Link></TabsTrigger>
            <TabsTrigger value="motions"><Link href={`/kata/${kataId}/motions`}>Motions</Link></TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex w-full flex-col items-centerflex w-full flex-col items-center px-4">
          {children}
        </div>
      </div>

    )
}