import { type Kata, Orientation, Position, Side, Target, Type } from "@/type";

export const HEIAN_SANDAN: Kata = {
  id: "heian-sandan",
  name: "Heian Sandan (Heian N° 3)",
  description:
    "Heian Sandan develops a varied set of techniques, including inward-to-outward forearm blocks and simultaneous crossed blocks combining a middle-level block with a downward block. A spear-hand attack is followed by a wrist-grab escape that uses a full-body turn and a counterstrike. The final sequence combines a backward elbow strike with a vertical punch over the shoulder against an opponent holding the practitioner from behind.",
  techniques: [
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
      position: Position.KOKUTSU,
      index: "1",
      hasSidePicture: true,
      note: "rotate 90 degrees left and step left",
      techniques: [
        {
          name: "uchi-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.W,
    },
    {
      position: Position.HEISOKU,
      index: "2a",
      hasSidePicture: true,
      note: "bring the right foot beside the left; raise the left fist toward the right shoulder and lower the right fist diagonally",
      techniques: [
        {
          name: "kosa-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.W,
    },
    {
      position: Position.HEISOKU,
      index: "2",
      hasSidePicture: true,
      note: "stay where you are",
      techniques: [
        {
          name: "uchi-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
        },
        {
          name: "gedan-barai",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.GEDAN,
        },
      ],
      orientation: Orientation.W,
    },
    {
      position: Position.HEISOKU,
      index: "3a",
      note: "stay where you are; raise the right fist toward the left shoulder and lower the left fist diagonally",
      techniques: [
        {
          name: "kosa-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.W,
    },
    {
      position: Position.HEISOKU,
      index: "3",
      hasSidePicture: true,
      note: "stay where you are",
      techniques: [
        {
          name: "uchi-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
        {
          name: "gedan-barai",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.GEDAN,
        },
      ],
      orientation: Orientation.W,
    },
    {
      position: Position.KOKUTSU,
      index: "4",
      note: "rotate 180 degrees right and move the right foot backward",
      techniques: [
        {
          name: "uchi-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.E,
    },
    {
      position: Position.HEISOKU,
      index: "5a",
      note: "bring the left foot beside the right; raise the right fist toward the left shoulder and lower the left fist to the right",
      techniques: [
        {
          name: "kosa-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.E,
    },
    {
      position: Position.HEISOKU,
      index: "5",
      note: "stay where you are",
      techniques: [
        {
          name: "uchi-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
        {
          name: "gedan-barai",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.GEDAN,
        },
      ],
      orientation: Orientation.E,
    },
    {
      position: Position.HEISOKU,
      index: "6a",
      note: "stay where you are; raise the left fist toward the right shoulder and lower the right fist to the left",
      techniques: [
        {
          name: "kosa-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.E,
    },
    {
      position: Position.HEISOKU,
      index: "6",
      note: "stay where you are",
      techniques: [
        {
          name: "uchi-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
        },
        {
          name: "gedan-barai",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.GEDAN,
        },
      ],
      orientation: Orientation.E,
    },
    {
      position: Position.KOKUTSU,
      index: "7",
      note: "rotate 90 degrees left and step left",
      techniques: [
        {
          name: "morote-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
    },
    {
      position: Position.ZENKUTSU,
      index: "8",
      hasSidePicture: true,
      note: "step forward",
      techniques: [
        {
          name: "shihon-nukite",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
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
      position: Position.KIBA,
      index: "9b",
      note: "continue rotating left on the right foot, cross the left foot behind the right and bring the right hand behind the back, palm outward",
      techniques: [
        {
          name: "tettsui-uchi-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "9",
      hasSidePicture: true,
      note: "continue rotating left and place the left foot outward; complete the full turn and strike with the left hammer-fist",
      techniques: [
        {
          name: "tettsui-uchi",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
    },
    {
      position: Position.ZENKUTSU,
      index: "10",
      hasSidePicture: true,
      note: "step forward",
      kiai: true,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
    },
    {
      position: Position.HEISOKU,
      index: "11",
      note: "rotate 180 degrees left around the right foot, bring the left foot beside it and place both fists above the hips",
      techniques: [
        {
          name: "ryoken koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.HEISOKU,
      index: "12a",
      hasBackPicture: true,
      note: "raise the right knee sharply in front of you",
      techniques: [
        {
          name: "fumikomi-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "12",
      hasSidePicture: true,
      note: "stamp down into horse stance",
      techniques: [
        {
          name: "empi-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
        },
        {
          name: "fumikomi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "13b",
      hasBackPicture: true,
      hasSidePicture: true,
      note: "stay where you are; strike with the right backfist using a snapping elbow and wrist action",
      techniques: [
        {
          name: "uraken-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "13",
      hasBackPicture: true,
      hasSidePicture: true,
      note: "stay where you are and return the right fist above the right hip",
      techniques: [
        {
          name: "ryoken koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "14a",
      hasBackPicture: true,
      note: "raise the left knee sharply in front of you",
      techniques: [
        {
          name: "fumikomi-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "14",
      note: "stamp down into horse stance",
      techniques: [
        {
          name: "empi-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
        {
          name: "fumikomi",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "15b",
      hasBackPicture: true,
      note: "stay where you are; strike with the left backfist using a snapping elbow and wrist action",
      techniques: [
        {
          name: "uraken-uchi",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "15",
      note: "stay where you are and return the left fist above the left hip",
      techniques: [
        {
          name: "ryoken koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "16a",
      note: "raise the right knee sharply in front of you",
      techniques: [
        {
          name: "fumikomi-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "16",
      note: "stamp down into horse stance",
      techniques: [
        {
          name: "empi-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
        },
        {
          name: "fumikomi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "17b",
      hasBackPicture: true,
      hasSidePicture: true,
      note: "stay where you are; repeat the right backfist strike from motion 13b",
      techniques: [
        {
          name: "uraken-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "17",
      hasSidePicture: true,
      note: "stay where you are and return the right fist above the right hip",
      techniques: [
        {
          name: "ryoken koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "18",
      hasBackPicture: true,
      hasSidePicture: true,
      note: "stay where you are; extend the open right hand sideways and draw the left elbow back",
      techniques: [
        {
          name: "tate shuto-gamae",
          type: Type.KAMAE,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.ZENKUTSU,
      index: "19",
      note: "step forward in the direction indicated by the right hand",
      kiai: true,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.S,
    },
    {
      position: Position.KIBA,
      index: "20",
      note: "bring the right foot level with the left, then cross the left foot behind it and rotate 180 degrees left",
      techniques: [
        {
          name: "tate-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
        {
          name: "ushiro empi-uchi",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      position: Position.KIBA,
      index: "21",
      note: "push off the left foot and shift sideways to the right",
      kiai: true,
      techniques: [
        {
          name: "tate-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
        {
          name: "ushiro empi-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.N,
    },
    {
      position: Position.HACHIJI,
      note: "bring the right foot inward toward the left and return to the ready stance",
      techniques: [
        {
          name: "yame",
          type: Type.KAMAE,
        },
      ],
    },
  ],
};
