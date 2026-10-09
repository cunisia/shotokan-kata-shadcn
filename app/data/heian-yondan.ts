import {
  type Kata,
  Level,
  Orientation,
  Position,
  Side,
  Target,
  Type,
} from "@/type";

export const HEIAN_YONDAN: Kata = {
  id: "heian-yondan",
  name: "Heian Yondan",
  meaning: "Heian N° 4",
  level: Level.BEGINNER,
  description:
    "Heian Yondan begins much like Heian Nidan, but uses open hands. It features more kicks and knife-hand blocks in back stance, and introduces advanced combinations such as high front snap kicks, counterattacks supported by simultaneous blocks, and a knee strike performed while pulling an opponent’s head downward.",
  videoId: "HrAiTCcatbY",
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
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "kaishu haiwan-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
        },
      ],
      index: "1",
      orientation: Orientation.W,
      note: "rotate 90 degrees left and step left",
      isSlow: true
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "kaishu haiwan-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      index: "2",
      orientation: Orientation.E,
      note: "rotate 180 degrees right by transferring your weight to the left leg",
      isSlow: true
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "juji-uke",
          type: Type.BLOCK,
          target: Target.GEDAN,
        },
      ],
      index: "3",
      orientation: Orientation.N,
      note: "rotate 90 degrees left and step forward with the left foot",
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "morote-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      index: "4",
      orientation: Orientation.N,
      note: "step forward with the right foot",
    },
    {
      position: Position.HEISOKU,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      index: "5",
      orientation: Orientation.W,
      note: "turn left and bring the left foot beside the right; place both fists above the right hip",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "yoko ke-age-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
      ],
      index: "6a",
      orientation: Orientation.W,
      note: "raise the left foot above the right knee",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "yoko ke-age",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
        {
          name: "yoko-mawashi uraken-uchi",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      index: "6b",
      orientation: Orientation.W,
      note: "stay on the right leg; kick left and strike with the left backfist simultaneously",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "yoko ke-age-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
        {
          name: "yoko-mawashi uraken-uchi",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      index: "6c",
      orientation: Orientation.W,
      note: "retract the left foot above the right knee",
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "mae empi-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      index: "6",
      orientation: Orientation.W,
      note: "step forward with the left foot in the direction of the kick",
    },
    {
      position: Position.HEISOKU,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      index: "7",
      orientation: Orientation.E,
      note: "turn right and bring the right foot beside the left; place both fists above the left hip",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "yoko ke-age-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      index: "8a",
      orientation: Orientation.E,
      note: "raise the right foot above the left knee",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "yoko ke-age",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
        {
          name: "yoko-mawashi uraken-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      index: "8b",
      orientation: Orientation.E,
      note: "stay on the left leg; kick right and strike with the right backfist simultaneously",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "yoko ke-age-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
        {
          name: "yoko-mawashi uraken-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      index: "8c",
      orientation: Orientation.E,
      note: "retract the right foot above the left knee",
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "mae empi-uchi",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      index: "8",
      orientation: Orientation.E,
      note: "step forward with the right foot in the direction of the kick",
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "shuto gedan-barai",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.GEDAN,
        },
      ],
      index: "9",
      orientation: Orientation.N,
      note: "stay in the same stance; turn the head left and lower the left hand while drawing the right elbow behind the head",
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "shuto-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.JODAN,
        },
        {
          name: "shuto-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      index: "10",
      orientation: Orientation.N,
      note: "stay in the same stance; rotate the hips left into gyaku-hanmi",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "mae-geri",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      index: "11a",
      orientation: Orientation.N,
      note: "kick forward with the right foot without changing the upper-body position",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "mae-geri-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      index: "11b",
      orientation: Orientation.N,
      note: "retract the right foot; draw the right hand to the chest and extend the left hand",
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "osae-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
        {
          name: "uraken-uchi-arm",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      index: "11c",
      orientation: Orientation.N,
      note: "push forward from the left foot; lower the left hand and raise the right fist above the head",
    },
    {
      position: Position.KOSA,
      techniques: [
        {
          name: "uraken-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      index: "11",
      orientation: Orientation.N,
      note: "land on the right foot and cross the left leg behind it",
      hasBackPicture: true,
      kiai: true,
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "kakiwake-uke",
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      index: "12",
      orientation: Orientation.SE,
      note: "extend the left leg diagonally behind to the right and rotate 225 degrees left around the right foot into back stance",
      hasBackPicture: true,
      isSlow: true
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "mae-geri",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.JODAN,
        },
      ],
      index: "13a",
      orientation: Orientation.SE,
      note: "kick forward with the right foot without changing the arm position",
      hasBackPicture: true,
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      index: "13c",
      orientation: Orientation.SE,
      note: "land forward on the right foot",
      hasBackPicture: true,
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "gyaku-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      index: "13",
      orientation: Orientation.SE,
      note: "stay in the same stance",
      hasBackPicture: true,
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "kakiwake-uke",
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      index: "14",
      orientation: Orientation.SW,
      note: "rotate 90 degrees right; bring the right foot toward the left, then step diagonally right into back stance",
      hasBackPicture: true,
      isSlow: true
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "mae-geri",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.JODAN,
        },
      ],
      index: "15a",
      orientation: Orientation.SW,
      note: "kick forward with the left foot without changing the arm position",
      hasBackPicture: true,
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      index: "15b",
      orientation: Orientation.SW,
      note: "land forward on the left foot",
      hasBackPicture: true,
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "gyaku-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      index: "15",
      orientation: Orientation.SW,
      note: "stay in the same stance",
      hasBackPicture: true,
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "morote-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      index: "16",
      orientation: Orientation.S,
      note: "rotate 45 degrees left; transfer weight to the right leg and slide the left foot left",
      hasBackPicture: true,
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "morote-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      index: "17",
      orientation: Orientation.S,
      note: "step forward with the right foot",
      hasBackPicture: true,
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "morote-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      index: "18",
      orientation: Orientation.S,
      note: "step forward with the left foot",
      hasBackPicture: true,
    },
    {
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "morote kubi-osae",
          type: Type.KAMAE,
        },
      ],
      index: "19",
      orientation: Orientation.S,
      note: "slide the left foot forward and slightly left; extend both hands to seize the head",
      hasBackPicture: true,
    },
    {
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "hiza-uchi",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      index: "20a",
      orientation: Orientation.S,
      note: "raise the right knee sharply and pull both hands down beside it",
      hasBackPicture: true,
      kiai: true,
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "shuto-uke",
          type: Type.BLOCK,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      index: "20",
      orientation: Orientation.N,
      note: "rotate 180 degrees left around the supporting left foot and place the right foot behind",
    },
    {
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "shuto-uke",
          type: Type.BLOCK,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      index: "21",
      orientation: Orientation.N,
      note: "step forward with the right foot",
    },
    {
      position: Position.HACHIJI,
      techniques: [
        {
          name: "yame",
          type: Type.KAMAE,
        },
      ],
      note: "bring the right foot beside the left, hip-width apart, and return to the ready stance",
    },
  ],
};
