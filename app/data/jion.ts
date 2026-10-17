import {
  type Kata,
  Level,
  Orientation,
  Position,
  Side,
  Target,
  Type,
} from "@/type";

export const JION: Kata = {
  id: "jion",
  name: "Jion",
  meaning: "I don't want to fight",
  description:
    "Jion belongs to the same family as Jitte and Jiin. The book links their history to Tomari and to traditions associated with the Buddhist temple Jionji, while presenting these origins as historical interpretations. Its character combines calm, mature movement with underlying strength. Many sequences build on the five Heian katas, making their mastery a useful foundation for learning Jion. Front, back and horse stances give it a strong emphasis on Shotokan fundamentals. Understanding the applications matters as much as performing the sequence, particularly the closing actions that seize and pull an opponent's wrist before a counterpunch.",
  videoId: "Lrr-c5RCKpo",
  level: Level.INTERMEDIATE,
  isUnderReview: true,
  isPublished: true,
  numberOfMoves: 47,
  motions: [
    {
      position: Position.HEISOKU,
      techniques: [
        {
          name: "yoi jion",
          type: Type.KAMAE,
        },
      ],
      note: "Stand with feet together and cover the right fist with the left hand in front of the chin.",
    },
    {
      index: "1a",
      techniques: [
        {
          name: "kosa-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Step backward with the left foot and prepare the crossed block.",
    },
    {
      index: "1",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "kosa-uke",
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.N,
      note: "Complete the backward step into a right front stance.",
    },
    {
      index: "2",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "kakiwake-uke",
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.NW,
      note: "Rotate 45 degrees left around rear foot and step forward with the left foot.",
    },
    {
      index: "3",
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "mae-geri",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.NW,
      note: "Keep the left foot planted and kick forward with the right leg.",
    },
    {
      index: "4",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.NW,
      note: "Place the right foot forward.",
    },
    {
      index: "5",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "gyaku-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.NW,
      note: "Stay in the same stance.",
    },
    {
      index: "6",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.NW,
      note: "Stay in the same stance.",
    },
    {
      index: "7",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "kakiwake-uke",
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.NE,
      note: "Draw the right foot back, rotate 90 degrees right around rear foot, then step out with the right foot.",
    },
    {
      index: "8",
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "mae-geri",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.NE,
      note: "Keep the right foot planted and kick forward with the left leg.",
    },
    {
      index: "9",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.NE,
      note: "Place the left foot forward.",
    },
    {
      index: "10",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "gyaku-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.NE,
      note: "Stay in the same stance.",
    },
    {
      index: "11",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.NE,
      note: "Stay in the same stance.",
    },
    {
      index: "12a",
      techniques: [
        {
          name: "age-uke-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Draw the left foot back half a step and rotate 45 degrees left around rear foot.",
    },
    {
      index: "12",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "age-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Step forward with the left foot.",
    },
    {
      index: "13",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "gyaku-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
      note: "Stay in the same stance.",
    },
    {
      index: "14a",
      techniques: [
        {
          name: "age-uke-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Begin stepping forward with the right foot and prepare the rising block.",
    },
    {
      index: "14",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "age-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Complete the step forward with the right foot.",
    },
    {
      index: "15",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "gyaku-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
      note: "Stay in the same stance.",
    },
    {
      index: "16a",
      techniques: [
        {
          name: "age-uke-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Begin stepping forward with the left foot and prepare the rising block.",
    },
    {
      index: "16",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "age-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Complete the step forward with the left foot.",
    },
    {
      index: "17",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
      note: "Step forward with the right foot.",
      kiai: true,
    },
    {
      index: "18",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "manji-uke",
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.E,
      note: "Rotate 90 degrees right around front foot and place the left foot into a back stance.",
      hasBackPicture: true,
    },
    {
      index: "19",
      position: Position.KIBA,
      techniques: [
        {
          name: "kagi-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.S,
      note: "Stay in place and switch to kiba-dachi while delivering kagi-zuki.",
      hasBackPicture: true,
    },
    {
      index: "20",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "manji-uke",
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.W,
      note: "Shift weight on the left leg and turn right into a back stance.",
      hasBackPicture: true,
    },
    {
      index: "21",
      position: Position.KIBA,
      techniques: [
        {
          name: "kagi-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.S,
      note: "Stay in place and switch to kiba-dachi while delivering kagi-zuki.",
      hasBackPicture: true,
    },
    {
      index: "22",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "gedan-barai",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.GEDAN,
        },
      ],
      orientation: Orientation.S,
      note: "Bring the left foot toward the right, then step forward with the left foot.",
    },
    {
      index: "23",
      position: Position.KIBA,
      techniques: [
        {
          name: "teisho-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.E,
      note: "Step forward with the right foot and rotate 90 degrees left around left foot into a horse stance.",
      hasBackPicture: true,
    },
    {
      index: "24",
      position: Position.KIBA,
      techniques: [
        {
          name: "teisho-uchi",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.W,
      note: "Advance the left foot and rotate 180 degrees right around right foot into a horse stance.",
      hasBackPicture: true,
    },
    {
      index: "25",
      position: Position.KIBA,
      techniques: [
        {
          name: "teisho-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.E,
      note: "Advance the right foot and rotate 180 degrees left around left foot into a horse stance.",
      hasBackPicture: true,
    },
    {
      index: "26a",
      techniques: [
        {
          name: "manji-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Draw the left foot back and rotate 90 degrees left around right foot to prepare the next back stance.",
    },
    {
      index: "26",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "manji-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.N,
      note: "Settle into the back stance.",
    },
    {
      index: "27",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "morote-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Push from the right foot and bring it against the left, keeping the same body orientation while performing morote-uke.",
    },
    {
      index: "28",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "manji-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.N,
      note: "Step out to the right with the right foot and settle into a left back stance while performing manji-uke.",
    },
    {
      index: "29",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "morote-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Push from the left foot and bring it against the right, keeping the same body orientation while performing morote-uke.",
    },
    {
      index: "30",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "ryowan-gamae",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Keep the feet together and slowly lower both arms to the sides.",
      isSlow: true,
    },
    {
      index: "31a",
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "juji-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Raise the right knee and pull both fists above the hips.",
    },
    {
      index: "31",
      position: Position.KOSA,
      techniques: [
        {
          name: "juji-uke",
          type: Type.BLOCK,
          target: Target.GEDAN,
        },
      ],
      orientation: Orientation.N,
      note: "Push off the left foot and land forward with the legs crossed.",
    },
    {
      index: "32",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "ryowan gedan kakiwake-uke",
          type: Type.BLOCK,
          target: Target.GEDAN,
        },
      ],
      orientation: Orientation.N,
      note: "Push from the right foot and extend the left leg backward into a low front stance.",
    },
    {
      index: "33",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "ryowan uchi-uke",
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
      note: "Step forward with the left foot.",
    },
    {
      index: "34",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "juji-uke",
          type: Type.BLOCK,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Step forward with the right foot.",
    },
    {
      index: "35",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "ura-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.JODAN,
        },
        {
          name: "age-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Stay in the same stance and turn the hips to deliver the simultaneous techniques.",
    },
    {
      index: "36",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "ura-uchi zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Stay in the same stance and support the right elbow with the left fist.",
    },
    {
      index: "37",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "uchi-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.E,
      note: "Rotate 90 degrees right around front foot and place the left foot into a front stance.",
    },
    {
      index: "38",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.E,
      note: "Step forward with the right foot.",
    },
    {
      index: "39",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "uchi-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.W,
      note: "Rotate 180 degrees right around rear foot and place the right foot in the opposite direction.",
    },
    {
      index: "40",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.W,
      note: "Step forward with the left foot.",
    },
    {
      index: "41",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "gedan-barai",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.GEDAN,
        },
      ],
      orientation: Orientation.S,
      note: "Rotate 90 degrees left around rear foot and step out with the left foot.",
      hasBackPicture: true,
    },
    {
      index: "42a",
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "otoshi-uke-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
        {
          name: "fumikomi-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.S,
      note: "Raise the right leg and lift the right fist above the head.",
      hasBackPicture: true,
    },
    {
      index: "42",
      position: Position.KIBA,
      techniques: [
        {
          name: "otoshi-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
        {
          name: "fumikomi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.E,
      note: "Stamp down with the right foot and rotate 90 degrees left around left foot into a horse stance.",
      hasBackPicture: true,
    },
    {
      index: "43a",
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "otoshi-uke-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
        {
          name: "fumikomi-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.E,
      note: "Raise the left leg across the body and lift the left fist above the head.",
      hasBackPicture: true,
    },
    {
      index: "43",
      position: Position.KIBA,
      techniques: [
        {
          name: "otoshi-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
        {
          name: "fumikomi",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.W,
      note: "Stamp down with the left foot and rotate 180 degrees right around right foot into a horse stance.",
    },
    {
      index: "44a",
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "otoshi-uke-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
        {
          name: "fumikomi-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.W,
      note: "Raise the right leg across the body and lift the right fist above the head.",
    },
    {
      index: "44",
      position: Position.KIBA,
      techniques: [
        {
          name: "otoshi-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
        {
          name: "fumikomi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      orientation: Orientation.E,
      note: "Stamp down with the right foot and rotate 180 degrees left around left foot into a horse stance.",
    },
    {
      index: "45a",
      techniques: [
        {
          name: "tsukami-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Rotate 90 degrees left around right foot and bring the left foot toward the right.",
    },
    {
      index: "45b",
      position: Position.KIBA,
      techniques: [
        {
          name: "yumi-zuki-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
      ],
      orientation: Orientation.N,
      note: "Step out to the left while drawing the right elbow to the right.",
    },
    {
      index: "45",
      position: Position.KIBA,
      techniques: [
        {
          name: "yumi-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
      note: "Settle into the horse stance and complete the left punch.",
    },
    {
      index: "46a",
      position: Position.KIBA,
      techniques: [
        {
          name: "tsukami-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      orientation: Orientation.N,
      note: "Stay in the same stance and turn the head right while preparing the grasp.",
    },
    {
      index: "46",
      position: Position.KIBA,
      techniques: [
        {
          name: "yumi-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      orientation: Orientation.N,
      note: "Push from the left foot and slide both feet to the right.",
      kiai: true,
    },
    {
      position: Position.HEISOKU,
      techniques: [
        {
          name: "yame jion",
          type: Type.KAMAE,
        },
      ],
      note: "Bring the feet together and cover the right fist with the left hand in front of the chin.",
      isSlow: true,
    },
  ],
};
