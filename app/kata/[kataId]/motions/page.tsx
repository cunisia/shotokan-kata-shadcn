import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item";
import { Motion, Position, Side } from "@/type";
import Image from 'next/image'
import { Badge } from "@/components/ui/badge";
import { getKata } from "@/app/data/get-kata";
import { notFound } from "next/navigation";

const getMotionName = (motion: Motion) => {
    const nameItems: string[] = []
    const name  = motion.technique.name;
    if (!!motion.index) {
        nameItems.push(`${motion.index} - `)
    }
    const target = motion.technique.target
    if (!!target) {
        nameItems.push(target)
    }
    nameItems.push(name);
    return nameItems.join(' ')
}

const getPositionName = (position: Position) => {
    switch (position) {
        case Position.HACHIJI: 
            return `Shizentai ${position} dachi`
        default: 
            return `${position} dachi`
    }
}

const getSideName = (side: Side) => {
    switch (side) {
        case Side.HIDARI: 
            return `${side} (left)`
        case Side.MIGI: 
            return `${side} (right)`
    }
}

const getPictureName = (motion: Motion) => {
    return `/${motion.position}_${motion.technique.side}_${motion.technique.target}_${motion.technique.name}_${motion.technique.orientation}.png`
}

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
    <Carousel className="w-full">
      <CarouselContent>
        {kata.techniques.map((motion, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader>
                    <CardTitle><h2 className="text-xl font-semibold capitalize">{getMotionName(motion)}</h2></CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div className="relative">
                        {motion.kiai && (<Badge variant="destructive" className="absolute top-2 right-2 font-bold">Kiai!</Badge>)}
                        <Image src={getPictureName(motion)} alt={getMotionName(motion)} width={385} height={500}/>
                    </div>
                    <div className="grid grid-cols-2">
                        <Item className="items-start">
                            <ItemContent>
                                <ItemTitle>Technique</ItemTitle>
                                <ItemDescription className="first-letter:uppercase">{motion.technique.name}{motion.kiai && (<span className="font-bold"> + kiai</span>)}</ItemDescription>
                            </ItemContent>
                        </Item>
                        { motion.technique.target &&
                            (<Item className="items-start">
                                <ItemContent>
                                    <ItemTitle>Target</ItemTitle>
                                    <ItemDescription className="first-letter:uppercase">{motion.technique.target}</ItemDescription>
                                </ItemContent>
                            </Item>)
                        }
                        <Item className="items-start">
                            <ItemContent>
                                <ItemTitle>Position</ItemTitle>
                                <ItemDescription className="first-letter:uppercase">{getPositionName(motion.position)}</ItemDescription>
                            </ItemContent>
                        </Item>
                        { motion.technique.side &&
                            (<Item className="items-start">
                                <ItemContent>
                                    <ItemTitle>Side</ItemTitle>
                                    <ItemDescription className="first-letter:uppercase">{getSideName(motion.technique.side)}</ItemDescription>
                                </ItemContent>
                            </Item>)
                        }
                        { motion.note &&
                            (<Item className="col-span-2 items-start">
                                <ItemContent>
                                    <ItemTitle>Note</ItemTitle>
                                    <ItemDescription className="first-letter:uppercase">{motion.note}</ItemDescription>
                                </ItemContent>
                            </Item>)
                        }
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>)
}