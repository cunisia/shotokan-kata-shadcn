import {
  type Kata,
  Level,
  Orientation,
  Position,
  Side,
  Target,
  Type,
} from "@/type";

export const HEIAN_GODAN: Kata = {
  id: "heian-godan",
  name: "Heian Godan",
  meaning: "Heian N° 5",
  level: Level.BEGINNER,
  videoId: "dBFe54glhTs",
  description:
    "The final Heian kata introduces a broad range of advanced techniques. Its opening sequence combines an inward-to-outward block and a reverse punch in a back stance, followed by a flowing-water guard with the feet together. It also features low and high cross blocks, a crescent kick, a forward elbow strike, a reinforced rear uppercut, downward spear-hand strikes and simultaneous high and low blocks. A jump avoids a low staff attack, followed by a counter to the shin on landing.",
  motions: [
    {
      position: Position.HACHIJI,
      techniques: [
        {
          name: "yoi",
          type: Type.KAMAE,
        },
      ],
      note: "Stand naturally with your fists in front of your hips.",
    },
    {
      index: "1",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "uchi-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.W,
      note: "Turn 90 degrees left and step out with the left foot.",
    },
    {
      index: "2",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "gyaku-zuki",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      orientation: Orientation.W,
      note: "Stay in the same stance and rotate the hips right.",
    },
    {
      index: "3",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "kagi-gamae",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Bring the right foot beside the left and turn your head right.",
      isSlow: true,
    },
    {
      index: "4",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "uchi-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.E,
      note: "Step out to the right with the right foot.",
    },
    {
      index: "5",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "gyaku-zuki",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      orientation: Orientation.E,
      note: "Stay in the same stance and rotate the hips left.",
    },
    {
      index: "6",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "kagi-gamae",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Bring the left foot beside the right and turn your head 90 degrees left.",
      isSlow: true,
    },
    {
      index: "7",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "morote-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.N,
      note: "Step forward with the right foot.",
    },
    {
      index: "8a",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "juji-uke-arm",
          target: Target.GEDAN,
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Step forward with the left foot and cross the fists above the left hip, right fist on top.",
      hasSidePicture: true,
    },
    {
      index: "8",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "juji-uke",
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.N,
      note: "Complete the forward step into a left front stance.",
      hasSidePicture: true,
    },
    {
      index: "9",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "haishu juji-uke",
          target: Target.JODAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.N,
      note: "Stay in the same stance; open the hands and raise the crossed arms.",
    },
    {
      index: "10b",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "osae-uke",
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.N,
      note: "Stay in the same stance and rotate the hands down to chest height.",
    },
    {
      index: "10c",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki-arm",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Start stepping forward with the right foot, extending the left hand and pulling the right fist to the hip.",
    },
    {
      index: "10",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "oi-zuki",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      orientation: Orientation.N,
      note: "Complete the forward step with the right foot.",
      kiai: true,
    },
    {
      index: "11b",
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "fumikomi-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
        {
          name: "sokumen gedan-barai-arm",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.E,
      note: "Turn 180 degrees left around the left foot, then lower the raised right leg and right arm.",
    },
    {
      index: "11",
      position: Position.KIBA,
      techniques: [
        {
          name: "fumikomi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
        {
          name: "sokumen gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.E,
      note: "Stamp the right foot down into a horse stance.",
    },
    {
      index: "12b",
      position: Position.KIBA,
      techniques: [
        {
          name: "haishu-uke-arm",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.E,
      note: "Stay in the same stance; turn your head left, sweep the left arm outward and pull the right fist to the hip.",
      isSlow: true,
    },
    {
      index: "12",
      position: Position.KIBA,
      techniques: [
        {
          name: "haishu-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.E,
      note: "Stay in the same stance and complete the left back-of-hand block.",
      isSlow: true,
    },
    {
      index: "13a",
      position: Position.TSURU_ASHI,
      techniques: [
        {
          name: "mikazuki-geri",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      orientation: Orientation.N,
      note: "Kick forward in a crescent with the right foot into the open left palm.",
    },
    {
      index: "13",
      position: Position.KIBA,
      techniques: [
        {
          name: "mae empi-uchi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      orientation: Orientation.W,
      note: "Set the right foot down into a horse stance and strike the left palm with the right elbow.",
    },
    {
      index: "14",
      position: Position.KOSA,
      techniques: [
        {
          name: "morote-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.N,
      note: "Turn right around the right foot and bring the left foot behind it into a crossed stance.",
    },
    {
      index: "15",
      position: Position.RENOJI,
      techniques: [
        {
          name: "koho tsuki-age",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      orientation: Orientation.E,
      note: "Look left behind you and move the left foot backward into an L stance; reinforce the right elbow with the left fist.",
    },
    {
      index: "16b",
      techniques: [
        {
          name: "jump",
        },
      ],
      orientation: Orientation.S,
      note: "Pivot 180 degrees right around the left foot and jump upward, drawing both knees under the body.",
      kiai: true,
    },
    {
      index: "16c",
      position: Position.KOSA,
      techniques: [
        {
          name: "juji-uke",
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.E,
      note: "Land with bent knees and crossed legs, right foot in front, right fist over left.",
    },
    {
      index: "16",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "morote-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.S,
      note: "Push off the left leg, shift the right foot right and settle into a right front stance.",
      hasBackPicture: true,
    },
    {
      index: "17",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "nagashi-uke",
          side: Side.HIDARI,
          type: Type.BLOCK,
        },
        {
          name: "nukite",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.HATEMI,
        },
      ],
      orientation: Orientation.N,
      note: "Turn 180 degrees left into a left front stance.",
    },
    {
      index: "18",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "uchi-uke",
          side: Side.MIGI,
          target: Target.JODAN,
          type: Type.BLOCK,
        },
        {
          name: "gedan-barai",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.N,
      note: "Shift your weight backward and move the left foot right into a back stance, blocking high behind with the right arm and low in front with the left.",
    },
    {
      index: "19",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "manji-gamae",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.E,
      note: "Bring the left foot beside the right without changing the arm positions.",
      isSlow: true,
    },
    {
      index: "20a",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "manji-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.N,
      note: "Stay in place and begin rotating the hips left, raising the left fist in front and lowering the right elbow.",
    },
    {
      index: "20b",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "manji-uke-arm",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.W,
      note: "Continue rotating left, passing the left fist under the right arm as the right arm sweeps down and back.",
    },
    {
      index: "20c",
      position: Position.HEISOKU,
      techniques: [
        {
          name: "manji-gamae",
          type: Type.KAMAE,
        },
      ],
      orientation: Orientation.W,
      note: "Complete the left rotation with the left arm raised behind the head and the right arm extended downward.",
    },
    {
      index: "20",
      position: Position.ZENKUTSU,
      techniques: [
        {
          name: "nagashi-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
        {
          name: "nukite",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.HATEMI,
        },
      ],
      orientation: Orientation.N,
      note: "Step forward with the right foot into a right front stance.",
    },
    {
      index: "21",
      position: Position.KOKUTSU,
      techniques: [
        {
          name: "uchi-uke",
          side: Side.HIDARI,
          target: Target.JODAN,
          type: Type.BLOCK,
        },
        {
          name: "gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      orientation: Orientation.W,
      note: "Shift your weight backward and move the right foot left into a back stance, blocking high behind with the left arm and low in front with the right.",
    },
    {
      position: Position.HACHIJI,
      techniques: [
        {
          name: "yame",
          type: Type.KAMAE,
        },
      ],
      note: "Bring the right foot back beside the left, then stand naturally with the feet hip-width apart.",
    },
  ],
};
