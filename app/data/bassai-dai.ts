import {
  type Kata,
  Level,
  Orientation,
  Position,
  Side,
  Target,
  Type,
} from "@/type";

export const BASSAI_DAI: Kata = {
  id: "bassai-dai",
  name: "Bassai Dai",
  meaning: "Penetrate a Fortress",
  videoId: "tXPZFarJMh0",
  level: Level.INTERMEDIATE,
  description:
    "Bassai Dai expresses the power and determination of an assault on a fortress. Its origins remain uncertain, although the book associates its development with Kokan Oyadomari. In Shotokan, Bassai Dai and Bassai Sho are distinct forms. Bassai Dai combines dynamic blocks, attacks at several levels and broad double punches. Alongside Kanku Dai, it is presented as a major kata to study after the fundamentals and to master before black-belt examination.",
  motions: [
    {
      position: Position.HEISOKU,
      techniques: [
        {
          name: "yoi",
          type: Type.KAMAE,
        },
      ],
      note: "Bring the right foot beside the left and wrap the left hand around the right fist in front of the body.",
    },
    {
      orientation: Orientation.N,
      techniques: [
        {
          name: "uchi-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Push off the left leg and spring forward, drawing the joined hands to the left flank.",
      index: "1a",
    },
    {
      position: Position.KOSA,
      orientation: Orientation.N,
      techniques: [
        {
          target: Target.CHUDAN,
          name: "uchi ude-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
        {
          name: "soete",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      note: "Land on the right foot and bring the left foot behind it, reinforcing the right forearm with the left hand.",
      index: "1",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "uchi-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Rotate 180 degrees left around the front foot, extending the left leg backward into a left front stance.",
      hasBackPicture: true,
      index: "2",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "gyaku uchi-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Stay in the same stance and reverse the hip position for the right block.",
      hasBackPicture: true,
      index: "3",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "gyaku soto-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Rotate 180 degrees right around the front foot, repositioning the right foot behind you into a right front stance.",
      index: "4",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "uchi-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Stay in the same stance and rotate the hips for the right block.",
      index: "5",
      hasSidePicture: true,
    },
    {
      position: Position.HEISOKU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "sukui-uke",
          target: Target.GEDAN,
          type: Type.BLOCK,
          side: Side.MIGI,
        },
      ],
      note: "Rotate 90 degrees right around the rear foot, drawing the right foot beside the left and bending both knees.",
      index: "6a",
      hasSidePicture: true,
    },
    {
      position: Position.HEISOKU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "soto-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Straighten the torso with the knees slightly bent, raising the right fist beside the head and drawing the left fist to the hip.",
      index: "6b",
      hasSidePicture: true,
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "soto-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Step forward with the right foot, extending the left arm and drawing the right elbow backward.",
      index: "6c",
      hasSidePicture: true,
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "soto-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Complete the forward step into a right front stance.",
      index: "6",
      hasSidePicture: true,
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "gyaku uchi-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Stay in the same stance and reverse the hip position for the left block.",
      index: "7",
    },
    {
      position: Position.HACHIJI,
      orientation: Orientation.N,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      note: "Draw the left foot inward toward the right and return to a natural stance, placing the left fist over the right at the right hip.",
      index: "8",
    },
    {
      position: Position.HACHIJI,
      orientation: Orientation.N,
      techniques: [
        {
          name: "tate shuto-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Stay in the same stance and extend the left hand forward.",
      index: "9",
    },
    {
      position: Position.HACHIJI,
      orientation: Orientation.N,
      techniques: [
        {
          name: "zuki",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      note: "Stay in the same stance and punch with the right fist.",
      index: "10",
    },
    {
      position: Position.HACHIJI,
      orientation: Orientation.N,
      techniques: [
        {
          name: "uchi-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Draw the right fist back toward the left flank.",
      index: "11a",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "gyaku uchi-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Keep both feet in place, turn the right foot inward and bend the left knee while extending the right leg.",
      index: "11",
    },
    {
      position: Position.HACHIJI,
      orientation: Orientation.N,
      techniques: [
        {
          name: "zuki",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      note: "Straighten the left leg to return to a natural stance while punching with the left fist.",
      index: "12",
    },
    {
      position: Position.HACHIJI,
      orientation: Orientation.N,
      techniques: [
        {
          name: "uchi-uke-arm",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      note: "Draw the left fist back toward the right flank.",
      index: "13a",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "gyaku uchi-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Keep both feet in place and rotate the hips right for the left block.",
      index: "13",
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "shuto-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Draw the right foot inward, then step forward into a right-leading back stance.",
      index: "14",
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "shuto-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Step forward with the left foot into a left-leading back stance.",
      index: "15",
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "shuto-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Step forward with the right foot into a right-leading back stance.",
      index: "16a",
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "shuto-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Step backward with the right foot into a left-leading back stance.",
      index: "16",
    },
    {
      position: Position.MOTO,
      orientation: Orientation.N,
      techniques: [
        {
          name: "kaeshi-dori",
          side: Side.MIGI,
        },
      ],
      note: "Move the right foot sideways into a short left front stance, turn the right hand over and draw both elbows close to the body.",
      index: "17",
    },
    {
      position: Position.TSURU_ASHI,
      orientation: Orientation.N,
      techniques: [
        {
          name: "ke-sage-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Raise the right knee sharply between the arms and chest.",
      index: "18a",
    },
    {
      position: Position.TSURU_ASHI,
      orientation: Orientation.N,
      techniques: [
        {
          name: "ke-sage",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.HATEMI,
        },
      ],
      note: "Drive the right foot down and pull both fists above the right hip.",
      kiai: true,
      index: "18",
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "shuto-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Retract the right leg, place it down in the direction of the kick and turn 180 degrees into a left-leading back stance.",
      hasBackPicture: true,
      index: "19",
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "shuto-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Step forward with the right foot into a right-leading back stance.",
      index: "20",
      hasBackPicture: true,
    },
    {
      position: Position.HEISOKU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "morote age-uke-arm",
          type: Type.KAMAE,
        },
      ],
      note: "Draw the right foot back beside the left, then straighten the legs and raise both fists close together as the elbows move outward.",
      index: "21b",
    },
    {
      position: Position.HEISOKU,
      orientation: Orientation.S,
      techniques: [
        {
          target: Target.JODAN,
          name: "morote age-uke",
          type: Type.BLOCK,
        },
      ],
      note: "Continue lifting both fists until they are just above the forehead.",
      index: "21",
      hasBackPicture: true,
    },
    {
      position: Position.TSURU_ASHI,
      orientation: Orientation.S,
      techniques: [
        {
          name: "tetsui hasami-uchi-arm",
          type: Type.KAMAE,
        },
      ],
      note: "Open the forearms outward while sharply raising the right knee.",
      index: "22a",
      hasBackPicture: true,
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "tetsui hasami-uchi",
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      note: "Place the right foot forward and lower both fists along circular paths into the double hammer-fist strike.",
      index: "22",
      hasBackPicture: true,
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "oi-zuki",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      note: "Push off the left foot and slide forward about half a step without switching the leading leg.",
      index: "23",
      hasBackPicture: true,
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
      techniques: [
        {
          name: "nukite",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.HATEMI,
        },
        {
          name: "nagashi-uke",
          side: Side.HIDARI,
          type: Type.BLOCK,
          target: Target.JODAN,
        },
      ],
      note: "Rotate 180 degrees left into a left front stance, sweeping the left hand upward and striking down with the right hand.",
      index: "24",
    },
    {
      position: Position.HEISOKU,
      orientation: Orientation.E,
      techniques: [
        {
          side: Side.HIDARI,
          name: "manji-gamae",
          type: Type.KAMAE,
        },
      ],
      note: "Rotate 90 degrees right around the rear foot and draw the left foot beside the right, raising the right arm behind you and lowering the left.",
      isSlow: true,
      index: "25",
    },
    {
      position: Position.KIBA,
      orientation: Orientation.W,
      techniques: [
        {
          name: "gedan-barai-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Rotate 180 degrees right on the left supporting foot while raising the right knee toward the left flank.",
      index: "26a",
    },
    {
      position: Position.KIBA,
      orientation: Orientation.W,
      techniques: [
        {
          target: Target.GEDAN,
          name: "sokumen gedan-barai",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
      ],
      note: "Place the right foot down into a horse stance while lowering the right arm.",
      index: "26",
    },
    {
      position: Position.KIBA,
      orientation: Orientation.W,
      techniques: [
        {
          name: "haishu-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Stay in the same stance and extend the left hand to the left, drawing the right fist to the hip.",
      isSlow: true,
      index: "27",
    },
    {
      position: Position.KIBA,
      orientation: Orientation.S,
      techniques: [
        {
          target: Target.CHUDAN,
          name: "mikazuki-geri",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      note: "Swing the right leg forward in a crescent kick, striking the left palm with the sole.",
      hasBackPicture: true,
      index: "28a",
      // REVIEW: provisional fixed-frame orientation; see README.md.
    },
    {
      position: Position.KIBA,
      orientation: Orientation.E,
      techniques: [
        {
          target: Target.CHUDAN,
          name: "empi-uchi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      note: "Place the right foot down in the direction of the kick, settle into a horse stance and strike the left palm with the right elbow.",
      index: "28",
      hasSidePicture: true,
    },
    {
      position: Position.KIBA,
      orientation: Orientation.E,
      techniques: [
        {
          target: Target.GEDAN,
          name: "gedan-barai",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
        {
          name: "soete",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      note: "Stay in the same stance and lower the right arm, placing the left fist just above the right elbow.",
      index: "29",
      hasSidePicture: true,
    },
    {
      position: Position.KIBA,
      orientation: Orientation.E,
      techniques: [
        {
          target: Target.GEDAN,
          name: "gedan-barai",
          side: Side.HIDARI,
          type: Type.BLOCK,
        },
        {
          name: "soete",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Stay in the same stance and lower the left arm, placing the right fist just above the left elbow.",
      index: "30",
      hasSidePicture: true,
    },
    {
      position: Position.KIBA,
      orientation: Orientation.E,
      techniques: [
        {
          target: Target.GEDAN,
          name: "gedan-barai",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
        {
          name: "soete",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      note: "Stay in the same stance and lower the right arm again, placing the left fist just above the right elbow.",
      index: "31",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      note: "Rotate 90 degrees right around the left foot, sliding the right foot slightly backward into a short right front stance and drawing both fists above the left hip.",
      index: "32",
      hasSidePicture: true,
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "yama-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      note: "Stay in the same stance and deliver the double punch with the left fist high and the right fist at middle level.",
      index: "33",
      hasSidePicture: true,
    },
    {
      position: Position.HEISOKU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      note: "Draw the right foot beside the left and bring both fists above the right hip.",
      isSlow: true,
      index: "34",
    },
    {
      position: Position.TSURU_ASHI,
      orientation: Orientation.S,
      techniques: [
        {
          name: "harai-fumikomi",
          side: Side.HIDARI,
          type: Type.HATEMI,
        },
      ],
      note: "Sweep the left foot forward in preparation for the stamping step.",
      index: "35a",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "yama-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
        },
      ],
      note: "Place the left foot forward into a short front stance and deliver the double punch with the right fist high.",
      index: "35",
    },
    {
      position: Position.HEISOKU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
      ],
      note: "Draw the left foot beside the right and bring both fists above the left hip.",
      isSlow: true,
      index: "36",
    },
    {
      position: Position.TSURU_ASHI,
      orientation: Orientation.S,
      techniques: [
        {
          name: "harai-fumikomi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      note: "Sweep the right foot forward in preparation for the stamping step.",
      index: "37a",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
      techniques: [
        {
          name: "yama-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
        },
      ],
      note: "Place the right foot forward into a short front stance and deliver the double punch with the left fist high.",
      index: "37",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "sukui-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Rotate 90 degrees left around the front foot, moving the left foot behind you and raising the right arm high.",
      index: "38a",
    },
    {
      orientation: Orientation.E,
      techniques: [
        {
          name: "sukui-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Sweep the right arm down around the right side while shifting weight onto the left leg and drawing the left fist to the hip.",
      index: "38b",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "sukui-uke",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Finish the right scooping block with a smaller downward circular action of the forearm.",
      index: "38",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "sukui-uke-arm",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      note: "Keep the legs and right arm in place while raising the left arm behind you.",
      index: "39a",
    },
    {
      orientation: Orientation.E,
      techniques: [
        {
          name: "sukui-uke-arm",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      note: "Sweep the left arm down around the left side while shifting weight onto the right leg and drawing the right fist to the hip.",
      index: "39b",
    },
    {
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
      techniques: [
        {
          name: "sukui-uke",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Finish the left scooping block with a smaller downward circular action of the forearm.",
      index: "39",
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.NE,
      techniques: [
        {
          name: "shuto-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Draw the left foot beside the right, then step forward with the right foot at 45 degrees to the right.",
      index: "40",
      // REVIEW: provisional fixed-frame orientation; see README.md.
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.SE,
      techniques: [
        {
          name: "shuto-uke-kamae",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Rotate 90 degrees right around the rear foot, moving the right foot and keeping the upper-body guard while looking left.",
      index: "41",
      // REVIEW: provisional fixed-frame orientation; see README.md.
    },
    {
      position: Position.KOKUTSU,
      orientation: Orientation.NW,
      techniques: [
        {
          name: "shuto-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Draw the right foot beside the left, then step forward with the left foot into a left-leading back stance.",
      kiai: true,
      index: "42",
      // REVIEW: provisional fixed-frame orientation; see README.md.
    },
    {
      position: Position.HACHIJI,
      techniques: [
        {
          name: "yame",
          type: Type.KAMAE,
        },
      ],
      note: "Bring the left foot beside the right with the hands joined, then open the right foot into a natural stance.",
    },
  ],
};
