import {
  type Kata,
  Level,
  Orientation,
  Position,
  Side,
  Target,
  Type,
} from "@/type";

export const HEIAN_SHODAN: Kata = {
  id: "heian-shodan",
  name: "Heian Shodan",
  meaning: "Heian N° 1",
  level: Level.BEGINNER,
  description:
    "Heian Shodan is the most accessible of the five Heian katas. It combines five basic techniques: downward blocks, stepping straight punches to the middle level, rising blocks, knife-hand blocks and a hammer-fist strike. In Shotokan, it is now the first kata taught to beginners, although Heian Nidan originally came first and still does in some styles. The change is generally explained as a way to introduce technical difficulty more gradually. The book offers two possible explanations for the earlier sequence: Itosu may have believed that practising the simpler kata was more beneficial after mastering the harder second one, or Heian Nidan may have been a revised form of Kushanku.",
  videoId: "9D2yOzDsW8k",
  motions: [
    {
      position: Position.HACHIJI,
      note: "Take the ready stance with feet turned outward and fists in front of the hips.",
      techniques: [
        {
          name: "yoi",
          type: Type.KAMAE,
        },
      ],
    },
    {
      index: "1",
      position: Position.ZENKUTSU,
      note: "Rotate 90 degrees left.",
      techniques: [
        {
          name: "gedan-barai",
          target: Target.GEDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "2",
      position: Position.ZENKUTSU,
      note: "Step forward.",
      techniques: [
        {
          name: "oi-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "3",
      position: Position.ZENKUTSU,
      note: "Rotate 180 degrees right.",
      techniques: [
        {
          name: "gedan-barai",
          target: Target.GEDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "4",
      position: Position.RENOJI,
      note: "Move the right foot half a step backward.",
      techniques: [
        {
          name: "tate-mawashi tettsui-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "5",
      position: Position.ZENKUTSU,
      note: "Step forward.",
      techniques: [
        {
          name: "oi-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "6",
      position: Position.ZENKUTSU,
      note: "Rotate 90 degrees left.",
      techniques: [
        {
          name: "gedan-barai",
          target: Target.GEDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      index: "7",
      position: Position.ZENKUTSU,
      note: "Step forward.",
      techniques: [
        {
          name: "age-uke",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      index: "8",
      position: Position.ZENKUTSU,
      note: "Step forward.",
      techniques: [
        {
          name: "age-uke",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      index: "9",
      position: Position.ZENKUTSU,
      kiai: true,
      note: "Step forward.",
      techniques: [
        {
          name: "age-uke",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      index: "10",
      position: Position.ZENKUTSU,
      note: "rotate 90 degrees right around front foot",
      techniques: [
        {
          name: "gedan-barai",
          target: Target.GEDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "11",
      position: Position.ZENKUTSU,
      note: "Step forward.",
      techniques: [
        {
          name: "oi-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "12",
      position: Position.ZENKUTSU,
      note: "Rotate 180 degrees right.",
      techniques: [
        {
          name: "gedan-barai",
          target: Target.GEDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "13",
      position: Position.ZENKUTSU,
      note: "Step forward.",
      techniques: [
        {
          name: "oi-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "14",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "Rotate 90 degrees left.",
      techniques: [
        {
          name: "gedan-barai",
          target: Target.GEDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "15",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "Step forward.",
      techniques: [
        {
          name: "oi-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "16",
      position: Position.ZENKUTSU,
      note: "Step forward.",
      techniques: [
        {
          name: "oi-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "17",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      kiai: true,
      note: "Step forward.",
      techniques: [
        {
          name: "oi-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "18",
      position: Position.KOKUTSU,
      note: "rotate 90 degrees right around front foot",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "19",
      position: Position.KOKUTSU,
      note: "Rotate 45 degrees right and step forward.",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.NW,
    },
    {
      index: "20",
      position: Position.KOKUTSU,
      note: "Rotate 135 degrees right.",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "21",
      position: Position.KOKUTSU,
      note: "Rotate 45 degrees left and step forward.",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.NE,
    },
    {
      position: Position.HACHIJI,
      note: "Bring the left foot beside the right, then return to the ready stance.",
      techniques: [
        {
          name: "yame",
          type: Type.KAMAE,
        },
      ],
    },
  ],
};
