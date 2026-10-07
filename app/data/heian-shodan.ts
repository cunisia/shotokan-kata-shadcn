import { Kata, Position, Side, Target, Type, Orientation } from "@/type";

export const HEIAN_SHODAN: Kata = {
  id: 'heian-shodan',
  name: "Heian Shodan (Heian N° 1)",
  description: "Heian Shodan is the most accessible of the five Heian katas. It combines five basic techniques: downward blocks, stepping straight punches to the middle level, rising blocks, knife-hand blocks and a hammer-fist strike. In Shotokan, it is now the first kata taught to beginners, although Heian Nidan originally came first and still does in some styles. The change is generally explained as a way to introduce technical difficulty more gradually. The book offers two possible explanations for the earlier sequence: Itosu may have believed that practising the simpler kata was more beneficial after mastering the harder second one, or Heian Nidan may have been a revised form of Kushanku.",
  techniques: [
    // Yoi
    {
      position: Position.HACHIJI,
      technique: {
        name: "yoi",
        type: Type.KAMAE,
      },
      note: "Take the ready stance with feet turned outward and fists in front of the hips.",
    },
    // 1
    {
      index: "1",
      position: Position.ZENKUTSU,
      technique: {
        name: "gedan-barai",
        target: Target.GEDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.W,
      },
      note: "Rotate 90 degrees left.",
    },
    // 2
    {
      index: "2",
      position: Position.ZENKUTSU,
      technique: {
        name: "oi-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.W,
      },
      note: "Step forward.",
    },
    // 3
    {
      index: "3",
      position: Position.ZENKUTSU,
      technique: {
        name: "gedan-barai",
        target: Target.GEDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.E,
      },
      note: "Rotate 180 degrees right.",
    },
    // 4
    {
      index: "4",
      position: Position.RENOJI,
      technique: {
        name: "tate-mawashi tettsui-uchi",
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.E,
      },
      note: "Move the right foot half a step backward.",
    },
    // 5
    {
      index: "5",
      position: Position.ZENKUTSU,
      technique: {
        name: "oi-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.HIDARI,
        orientation: Orientation.E,
      },
      note: "Step forward.",
    },
    // 6
    {
      index: "6",
      position: Position.ZENKUTSU,
      technique: {
        name: "gedan-barai",
        target: Target.GEDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.N,
      },
      note: "Rotate 90 degrees left.",
    },
    // 7
    {
      index: "7",
      position: Position.ZENKUTSU,
      technique: {
        name: "age-uke",
        target: Target.JODAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.N,
      },
      note: "Step forward.",
    },
    // 8
    {
      index: "8",
      position: Position.ZENKUTSU,
      technique: {
        name: "age-uke",
        target: Target.JODAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.N,
      },
      note: "Step forward.",
    },
    // 9
    {
      index: "9",
      position: Position.ZENKUTSU,
      technique: {
        name: "age-uke",
        target: Target.JODAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.N,
      },
      kiai: true,
      note: "Step forward.",
    },
    // 10
    {
      index: "10",
      position: Position.ZENKUTSU,
      technique: {
        name: "gedan-barai",
        target: Target.GEDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.E,
      },
      note: "rotate 90 degrees right around front foot",
    },
    // 11
    {
      index: "11",
      position: Position.ZENKUTSU,
      technique: {
        name: "oi-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.E,
      },
      note: "Step forward.",
    },
    // 12
    {
      index: "12",
      position: Position.ZENKUTSU,
      technique: {
        name: "gedan-barai",
        target: Target.GEDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.W,
      },
      note: "Rotate 180 degrees right.",
    },
    // 13
    {
      index: "13",
      position: Position.ZENKUTSU,
      technique: {
        name: "oi-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.HIDARI,
        orientation: Orientation.W,
      },
      note: "Step forward.",
    },
    // 14
    {
      index: "14",
      position: Position.ZENKUTSU,
      technique: {
        name: "gedan-barai",
        target: Target.GEDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.S,
      },
      note: "Rotate 90 degrees left.",
    },
    // 15
    {
      index: "15",
      position: Position.ZENKUTSU,
      technique: {
        name: "oi-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.S,
      },
      note: "Step forward.",
    },
    // 16
    {
      index: "16",
      position: Position.ZENKUTSU,
      technique: {
        name: "oi-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.HIDARI,
        orientation: Orientation.S,
      },
      note: "Step forward.",
    },
    // 17
    {
      index: "17",
      position: Position.ZENKUTSU,
      technique: {
        name: "oi-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.S,
      },
      kiai: true,
      note: "Step forward.",
    },
    // 18
    {
      index: "18",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.W,
      },
      note: "rotate 90 degrees right around front foot",
    },
    // 19
    {
      index: "19",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.NW,
      },
      note: "Rotate 45 degrees right and step forward.",
    },
    // 20
    {
      index: "20",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.E,
      },
      note: "Rotate 135 degrees right.",
    },
    // 21
    {
      index: "21",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.NE,
      },
      note: "Rotate 45 degrees left and step forward.",
    },
    // Yame
    {
      position: Position.HACHIJI,
      technique: {
        name: "yame",
        type: Type.KAMAE,
      },
      note: "Bring the left foot beside the right, then return to the ready stance.",
    },
  ],
};
