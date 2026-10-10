import {
  type Kata,
  Level,
  Orientation,
  Position,
  Side,
  Target,
  Type,
} from "@/type";

export const HEIAN_NIDAN: Kata = {
  id: "heian-nidan",
  name: "Heian Nidan",
  meaning: "Heian N° 2",
  level: Level.BEGINNER,
  description:
    "Heian Nidan adds several fundamentals not found in Heian Shodan: inside-to-outside forearm blocks, close-range punches, snapping side kicks paired with a backfist strike, and snapping front kicks. Its greater use of knife-hand blocks in back stance gives it a particularly characteristic kata structure.",
  videoId: "6Hc1NMdjU9U",
  motions: [
    {
      position: Position.HACHIJI,
      techniques: [
        {
          name: "yoi",
          type: Type.KAMAE,
        },
      ],
    },
    {
      index: "1",
      position: Position.KOKUTSU,
      note: "rotate 90 degrees left and step left",
      techniques: [
        {
          name: "uchi haiwan-uke",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
        {
          name: "ude soete",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "2a",
      position: Position.KOKUTSU,
      note: "stay where you are and close the hips.",
      techniques: [
        {
          name: "ude-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
        {
          name: "tettsui-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "2",
      position: Position.KOKUTSU,
      note: "stay where you are and open the hips.",
      techniques: [
        {
          name: "zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "3",
      position: Position.KOKUTSU,
      note: "rotate 180 degrees right in place and transfer weight onto the left leg",
      techniques: [
        {
          name: "uchi haiwan-uke",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
        {
          name: "ude soete",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "4a",
      position: Position.KOKUTSU,
      note: "stay where you are and close the hips.",
      techniques: [
        {
          name: "ude-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
        },
        {
          name: "tettsui-uchi",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "4",
      position: Position.KOKUTSU,
      note: "stay where you are and open the hips",
      techniques: [
        {
          name: "zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.E,
    },
    {
      index: "5a",
      position: Position.KOKUTSU,
      note: "turn 90 degrees right on the left foot and bring the right foot halfway toward it; chamber both fists on the left side",
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "5b",
      position: Position.TSURU_ASHI,
      hasBackPicture: true,
      techniques: [
        {
          name: "yoko ke-age",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN
        },
        {
          name: "yoko-mawashi uraken-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "5",
      position: Position.KOKUTSU,
      note: "retract the kicking leg, rotate 180 degrees right on the supporting left foot and place the right foot backward",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      index: "6",
      position: Position.KOKUTSU,
      note: "step forward from previous position",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      index: "7",
      position: Position.KOKUTSU,
      note: "step forward from previous position",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      index: "8",
      position: Position.ZENKUTSU,
      kiai: true,
      note: "step forward from previous position",
      techniques: [
        {
          name: "shihon-nukite",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.MIGI,
        },
        {
          name: "osae-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      index: "9",
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
      orientation: Orientation.E,
    },
    {
      index: "10",
      position: Position.KOKUTSU,
      note: "rotate 45 degrees right around front foot and step forward",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.SE,
    },
    {
      index: "11",
      position: Position.KOKUTSU,
      note: "rotate 135 degrees right around rear foot",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.W,
    },
    {
      index: "12",
      position: Position.KOKUTSU,
      hasBackPicture: true,
      note: "rotate 45 degrees left around front foot and step forward",
      techniques: [
        {
          name: "shuto-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.SW,
    },
    {
      index: "13",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "rotate 45 degrees left around rear foot and move the left foot left",
      techniques: [
        {
          name: "gyaku uchi-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "14a",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "perform a right snapping front kick without moving the arms",
      techniques: [
        {
          name: "mae-geri",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "14",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "retract the kicking leg, then place the right foot forward",
      techniques: [
        {
          name: "gyaku-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "15",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "stay where you are and draw the front foot back slightly while rotating the hips",
      techniques: [
        {
          name: "gyaku uchi-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "16a",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "perform a left snapping front kick without moving the arms",
      techniques: [
        {
          name: "mae-geri",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "16",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "place the left foot forward after the kick",
      techniques: [
        {
          name: "gyaku-zuki",
          target: Target.CHUDAN,
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "17",
      position: Position.ZENKUTSU,
      hasBackPicture: true,
      note: "step forward from previous position",
      techniques: [
        {
          name: "morote-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      index: "18",
      position: Position.ZENKUTSU,
      note: "rotate 90 degrees right around front foot, both feet should be one the same line",
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
      index: "19a",
      position: Position.ZENKUTSU,
      note: "rotate 45 degrees right around front foot and step forward; raise the open left hand to prepare the right rising block",
      techniques: [
        {
          name: "age-uke-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.NW,
    },
    {
      index: "19",
      position: Position.ZENKUTSU,
      note: "stay where you are and complete the right rising block",
      techniques: [
        {
          name: "age-uke",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.NW,
    },
    {
      index: "20",
      position: Position.ZENKUTSU,
      note: "rotate 135 degrees right around rear foot",
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
      index: "21a",
      position: Position.ZENKUTSU,
      note: "rotate 45 degrees left around front foot and step forward; raise the open right hand to prepare the left rising block",
      techniques: [
        {
          name: "age-uke-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.NE,
    },
    {
      index: "21",
      position: Position.ZENKUTSU,
      kiai: true,
      note: "stay where you are and complete the left rising block",
      techniques: [
        {
          name: "age-uke",
          target: Target.JODAN,
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.NE,
    },
    {
      position: Position.HACHIJI,
      note: "bring the left foot beside the right and return to the ready stance",
      techniques: [
        {
          name: "yame",
          type: Type.KAMAE,
        },
      ],
    },
  ],
};
