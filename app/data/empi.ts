import {
  type Kata,
  Level,
  Orientation,
  Position,
  Side,
  Target,
  Type,
} from "@/type";

export const EMPI: Kata = {
  id: "empi",
  name: "Empi",
  meaning: "Flight of the Swallow",
  description:
    "Empi is associated with the older name Wanshu and with the karate traditions of Tomari. The book describes several lines of transmission and notes that the kata has changed repeatedly over its long history. Funakoshi renamed it Empi, referring to the flight of a swallow. Its light, rapid techniques, sudden changes of direction and marked changes in height express that image. The historical accounts presented in the book connect Wanshu with early Okinawan fighting traditions, while acknowledging the complexity of its development.",
  videoId: "SW5907Eeo7c",
  level: Level.INTERMEDIATE,
  isUnderReview: true,
  isPublished: true,
  numberOfMoves: 37,
  motions: [
    {
      techniques: [
        {
          name: "yoi empi",
          type: Type.KAMAE,
        },
      ],
      note: "Bring the left foot against the right and cover the right fist with the left palm above the left hip.",
      position: Position.HEISOKU,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Rotate 90 degrees left around right foot and lower the left knee to the floor, bracing the right fist with the left hand.",
      index: "1",
      position: Position.TACHI_HIZA,
      orientation: Orientation.W,
      hasSidePicture: true,
    },
    {
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
        },
      ],
      note: "Rise and bring the right foot into line with the left, turning 90 degrees right around front foot and stacking the fists above the left hip.",
      index: "2",
      position: Position.HACHIJI,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Push from the left foot, rotate 90 degrees right around left foot and step out to the right.",
      index: "3",
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
    },
    {
      techniques: [
        {
          name: "kagi-zuki",
          side: Side.HIDARI,
          type: Type.HATEMI,
        },
      ],
      note: "Draw the left foot backward and rotate 90 degrees left around rear foot into a horse stance.",
      index: "4",
      position: Position.KIBA,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "gedan-barai-arm",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.KAMAE,
        },
      ],
      note: "Bring the left foot toward the right, then start stepping forward while preparing the left low block.",
      index: "5a",
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Complete the step forward with the left foot.",
      index: "5",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "age-zuki",
          side: Side.MIGI,
          target: Target.JODAN,
          type: Type.HATEMI,
        },
      ],
      note: "Stay in the same stance and turn the hips while punching upward with the right fist.",
      index: "6",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "kami-zukami-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Keep the right arm in place, open the hand and rotate it clockwise to prepare the grasp.",
      index: "7a",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
      isSlow: true,
    },
    {
      techniques: [
        {
          name: "kami-zukami",
          side: Side.MIGI,
        },
      ],
      note: "Stay in the same stance and close the right hand to complete the grasp.",
      index: "7",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "fumikomi-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Push the right hip forward and raise the right knee.",
      index: "8a",
      position: Position.TSURU_ASHI,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "otoshi-zuki",
          side: Side.HIDARI,
          type: Type.HATEMI,
        },
        {
          name: "nagashi-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
        {
          name: "fumikomi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      note: "Stamp down with the right foot, immediately advance the left foot into a crossed stance and lower the hips.",
      index: "8",
      position: Position.KOSA,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "ushiro gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Push from the right foot, draw the left foot backward into a long narrow stance and turn 180 degrees right around front foot, leaning forward while looking toward the rear block.",
      index: "9",
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Straighten the torso, turn the head in the opposite direction and shift the left foot outward into a regular front stance.",
      index: "10",
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
    },
    {
      techniques: [
        {
          name: "age-zuki",
          side: Side.MIGI,
          target: Target.JODAN,
          type: Type.HATEMI,
        },
      ],
      note: "Stay in the same stance and punch upward with the right fist.",
      index: "11",
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
    },
    {
      techniques: [
        {
          name: "kami-zukami",
          side: Side.MIGI,
        },
      ],
      note: "Keep the right arm in place and rotate the hand to complete the grasp.",
      index: "12",
      position: Position.ZENKUTSU,
      orientation: Orientation.S,
    },
    {
      techniques: [
        {
          name: "fumikomi-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Push the right hip forward and raise the right knee.",
      index: "13a",
      position: Position.TSURU_ASHI,
      orientation: Orientation.S,
    },
    {
      techniques: [
        {
          name: "otoshi-zuki",
          side: Side.HIDARI,
          type: Type.HATEMI,
        },
        {
          name: "nagashi-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
        {
          name: "fumikomi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      note: "Stamp down with the right foot, immediately advance the left foot into a crossed stance and lower the hips.",
      index: "13",
      position: Position.KOSA,
      orientation: Orientation.S,
    },
    {
      techniques: [
        {
          name: "ushiro gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Push from the right foot, draw the left foot backward into a long narrow stance and turn 180 degrees right around front foot, leaning forward while looking toward the rear block.",
      index: "14",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Straighten the torso and shift the left foot outward into a regular front stance.",
      index: "15",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "haishu-uke-arm",
          side: Side.HIDARI,
          target: Target.JODAN,
          type: Type.KAMAE,
        },
      ],
      note: "Bring the left foot toward the right, open the left hand and lift the left arm and leg together in a semicircle across the body.",
      index: "16b",
      position: Position.TSURU_ASHI,
      orientation: Orientation.N,
      isSlow: true,
    },
    {
      techniques: [
        {
          name: "haishu-uke-arm extension",
          side: Side.HIDARI,
          target: Target.JODAN,
          type: Type.KAMAE,
        },
      ],
      note: "Continue sweeping the left arm and raised left leg forward and outward to the left, following the hand with the eyes.",
      index: "16c",
      position: Position.TSURU_ASHI,
      orientation: Orientation.N,
      isSlow: true,
    },
    {
      techniques: [
        {
          name: "haishu-uke",
          side: Side.HIDARI,
          target: Target.JODAN,
          type: Type.BLOCK,
        },
      ],
      note: "Place the left foot down into a horse stance and finish raising the left forearm.",
      index: "16",
      position: Position.KIBA,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "empi-uchi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      note: "Push through the left leg, lift the right knee and hook the right foot behind the left knee while striking the left palm with the right elbow.",
      index: "17",
      position: Position.TSURU_ASHI,
      orientation: Orientation.N,
      kiai: true,
    },
    {
      techniques: [
        {
          name: "tate shuto-uke-arm",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.KAMAE,
        },
      ],
      note: "Begin lowering the right foot to its previous place and pass the left hand under the right arm.",
      index: "18a",
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "tate shuto-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Place the right foot down into a horse stance and extend the left hand forward.",
      index: "18",
      position: Position.KIBA,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "zuki",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      note: "Stay in the same stance and punch forward with the right fist.",
      index: "19a",
      position: Position.KIBA,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "zuki",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      note: "Stay in the same stance and punch forward with the left fist.",
      index: "19",
      position: Position.KIBA,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Draw the left foot inward, rotate 90 degrees left around right foot and step out to the left.",
      index: "20",
      position: Position.ZENKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "age-zuki",
          side: Side.MIGI,
          target: Target.JODAN,
          type: Type.HATEMI,
        },
      ],
      note: "Stay in the same stance and punch upward with the right fist.",
      index: "21",
      position: Position.ZENKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "shuto-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Advance the right foot into a left back stance.",
      index: "22",
      position: Position.KOKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "shuto-uke-arm",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.KAMAE,
        },
      ],
      note: "Draw the right foot against the left and prepare the left knife-hand block.",
      index: "23a",
      position: Position.HEISOKU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "shuto-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Advance the left foot into a right back stance.",
      index: "23",
      position: Position.KOKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "gyaku-zuki",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      note: "Stay in the same back stance and punch forward with the right fist.",
      index: "24",
      position: Position.KOKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "shuto-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Advance the right foot into a left back stance.",
      index: "25",
      position: Position.KOKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Move the left foot behind the body and rotate 180 degrees left around front foot into the opposite front stance.",
      index: "26",
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
    },
    {
      techniques: [
        {
          name: "age-zuki",
          side: Side.MIGI,
          target: Target.JODAN,
          type: Type.HATEMI,
        },
      ],
      note: "Stay in the same stance and punch upward with the right fist.",
      index: "27",
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
    },
    {
      techniques: [
        {
          name: "kami-zukami",
          side: Side.MIGI,
        },
      ],
      note: "Keep the right arm in place and rotate the hand to complete the grasp.",
      index: "28",
      position: Position.ZENKUTSU,
      orientation: Orientation.E,
    },
    {
      techniques: [
        {
          name: "fumikomi-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      note: "Push the right hip forward and raise the right knee.",
      index: "29a",
      position: Position.TSURU_ASHI,
      orientation: Orientation.E,
    },
    {
      techniques: [
        {
          name: "otoshi-zuki",
          side: Side.HIDARI,
          type: Type.HATEMI,
        },
        {
          name: "nagashi-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
        {
          name: "fumikomi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      note: "Stamp down with the right foot, immediately advance the left foot into a crossed stance and lower the hips.",
      index: "29",
      position: Position.KOSA,
      orientation: Orientation.E,
    },
    {
      techniques: [
        {
          name: "ushiro gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Push from the right foot, draw the left foot backward into a long narrow stance and turn 180 degrees right around front foot, leaning forward while looking toward the rear block.",
      index: "30",
      position: Position.ZENKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Straighten the torso and shift the left foot outward into a regular front stance.",
      index: "31",
      position: Position.ZENKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "teisho-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
      ],
      note: "Stay in the same stance, raise the right palm heel and chamber the left fist above the left hip.",
      index: "32",
      position: Position.ZENKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "teisho morote-uke-arm",
          type: Type.KAMAE,
        },
      ],
      note: "Slide the right foot toward the left and rotate 90 degrees right around front foot while reversing the palm positions.",
      index: "33a",
      orientation: Orientation.N,
      isSlow: true,
    },
    {
      techniques: [
        {
          name: "teisho morote-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
      ],
      note: "Advance the right foot into a front stance while raising the right palm and lowering the left palm.",
      index: "33",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
      isSlow: true,
    },
    {
      techniques: [
        {
          name: "teisho morote-uke",
          side: Side.HIDARI,
          type: Type.BLOCK,
        },
      ],
      note: "Advance the left foot into a front stance while lowering the right palm and raising the left palm.",
      index: "34",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
      isSlow: true,
    },
    {
      techniques: [
        {
          name: "teisho morote-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
        },
      ],
      note: "Advance the right foot into a front stance while raising the right palm and lowering the left palm.",
      index: "35",
      position: Position.ZENKUTSU,
      orientation: Orientation.N,
    },
    {
      techniques: [
        {
          name: "gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Push from the left foot, rotate 90 degrees left around rear foot and send the right foot forward while sliding the left foot backward into a left back stance.",
      index: "36",
      position: Position.KOKUTSU,
      orientation: Orientation.W,
      hasSidePicture: true,
    },
    {
      techniques: [
        {
          name: "morote kogo-gamae",
          type: Type.KAMAE,
        },
      ],
      note: "Push from the left foot and slide both feet to the right into a horse stance, raising both open hands.",
      index: "37",
      position: Position.KIBA,
      orientation: Orientation.N,
      hasSidePicture: true,
    },
    {
      techniques: [
        {
          name: "joho kaiten-tobi-arm",
          type: Type.KAMAE,
        },
      ],
      note: "Rotate 90 degrees left around left foot, draw the right hand toward the left shoulder and raise the right knee to prepare the jump.",
      index: "38b",
      position: Position.TSURU_ASHI,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "joho kaiten-tobi",
          type: Type.HATEMI,
        },
      ],
      note: "Push off the left foot and jump with the knees tucked, making a full 360-degree left turn and returning to the same facing direction.",
      index: "38c",
      orientation: Orientation.W,
      kiai: true,
    },
    {
      techniques: [
        {
          name: "shuto-uke landing",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Land on both feet together in a left back stance while completing the right knife-hand block.",
      index: "38",
      position: Position.KOKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "shuto-uke step-back",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      note: "Step backward with the right foot into a right back stance.",
      index: "39",
      position: Position.KOKUTSU,
      orientation: Orientation.W,
    },
    {
      techniques: [
        {
          name: "yame",
          type: Type.KAMAE,
        },
      ],
      note: "Bring the left foot against the right and return the hands to the left hip, then step the left foot outward and lower both fists in front of the hips.",
      position: Position.HACHIJI,
    },
  ],
};
