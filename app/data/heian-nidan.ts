import { Kata, Position, Side, Target, Type, Orientation } from "@/type";

export const HEIAN_NIDAN: Kata = {
  id: 'heian-nidan',
  name: "Heian Nidan (Heian N° 2)",
  description: "Heian Nidan adds several fundamentals not found in Heian Shodan: inside-to-outside forearm blocks, close-range punches, snapping side kicks paired with a backfist strike, and snapping front kicks. Its greater use of knife-hand blocks in back stance gives it a particularly characteristic kata structure.",
  techniques: [
    // Yoi
    {
      position: Position.HACHIJI,
      technique: {
        name: "yoi",
        type: Type.KAMAE,
      },
    },
    // 1
    {
      index: "1",
      position: Position.KOKUTSU,
      technique: {
        name: "uchi haiwan-uke",
        target: Target.JODAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.W,
      },
      note: "rotate 90 degrees left and step left; raise the right arm in support",
    },
    // 2-A
    {
      index: "2-A",
      position: Position.KOKUTSU,
      technique: {
        name: "ude-uke",
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.W,
      },
      note: "stay where you are; bring the left fist toward the right shoulder and strike high with the right hammer-fist while turning the hips left",
    },
    // 2
    {
      index: "2",
      position: Position.KOKUTSU,
      technique: {
        name: "zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.HIDARI,
        orientation: Orientation.W,
      },
      note: "stay where you are",
    },
    // 3
    {
      index: "3",
      position: Position.KOKUTSU,
      technique: {
        name: "uchi haiwan-uke",
        target: Target.JODAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.E,
      },
      note: "rotate 180 degrees right in place and transfer weight onto the left leg; raise the left arm in support",
    },
    // 4-A
    {
      index: "4-A",
      position: Position.KOKUTSU,
      technique: {
        name: "ude-uke",
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.E,
      },
      note: "stay where you are; bring the right fist toward the left shoulder and strike high with the left hammer-fist",
    },
    // 4
    {
      index: "4",
      position: Position.KOKUTSU,
      technique: {
        name: "zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.E,
      },
      note: "stay where you are",
    },
    // 5-A
    {
      index: "5-A",
      position: Position.KOKUTSU,
      technique: {
        name: "koshi-gamae",
        type: Type.KAMAE,
        orientation: Orientation.S,
      },
      note: "turn 90 degrees right on the right foot and bring the left foot halfway toward it; chamber both fists on the left side",
    },
    // 5-B
    {
      index: "5-B",
      position: Position.TSURU_ASHI,
      technique: {
        name: "yoko ke-age",
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.S,
      },
      hasBackPicture: true,
      note: "perform a right snapping side kick and a simultaneous right backfist strike",
    },
    // 5
    {
      index: "5",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.N,
      },
      note: "retract the kicking leg, rotate 180 degrees left on the supporting left foot and place the right foot backward",
    },
    // 6
    {
      index: "6",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.N,
      },
      note: "step forward",
    },
    // 7
    {
      index: "7",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.N,
      },
      note: "step forward",
    },
    // 8
    {
      index: "8",
      position: Position.ZENKUTSU,
      technique: {
        name: "shihon-nukite",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.N,
      },
      kiai: true,
      note: "step forward",
    },
    // 9
    {
      index: "9",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.E,
      },
      note: "rotate 90 degrees right around front foot",
    },
    // 10
    {
      index: "10",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.SE,
      },
      note: "rotate 45 degrees right around front foot and step forward",
    },
    // 11
    {
      index: "11",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.W,
      },
      note: "rotate 135 degrees right around rear foot",
    },
    // 12
    {
      index: "12",
      position: Position.KOKUTSU,
      technique: {
        name: "shuto-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.SW,
      },
      hasBackPicture: true,
      note: "rotate 45 degrees left around front foot and step forward",
    },
    // 13
    {
      index: "13",
      position: Position.ZENKUTSU,
      technique: {
        name: "gyaku uchi-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.S,
      },
      hasBackPicture: true,
      note: "rotate 45 degrees left around rear foot and move the left foot left",
    },
    // 14-A
    {
      index: "14-A",
      position: Position.ZENKUTSU,
      technique: {
        name: "mae-geri",
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.S,
      },
      hasBackPicture: true,
      note: "perform a right snapping front kick without moving the arms",
    },
    // 14
    {
      index: "14",
      position: Position.ZENKUTSU,
      technique: {
        name: "gyaku-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.HIDARI,
        orientation: Orientation.S,
      },
      hasBackPicture: true,
      note: "retract the kicking leg, then place the right foot forward",
    },
    // 15
    {
      index: "15",
      position: Position.ZENKUTSU,
      technique: {
        name: "gyaku uchi-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.S,
      },
      hasBackPicture: true,
      note: "stay where you are and draw the front foot back slightly while rotating the hips",
    },
    // 16-A
    {
      index: "16-A",
      position: Position.ZENKUTSU,
      technique: {
        name: "mae-geri",
        type: Type.HATEMI,
        side: Side.HIDARI,
        orientation: Orientation.S,
      },
      hasBackPicture: true,
      note: "perform a left snapping front kick without moving the arms",
    },
    // 16
    {
      index: "16",
      position: Position.ZENKUTSU,
      technique: {
        name: "gyaku-zuki",
        target: Target.CHUDAN,
        type: Type.HATEMI,
        side: Side.MIGI,
        orientation: Orientation.S,
      },
      hasBackPicture: true,
      note: "place the left foot forward after the kick",
    },
    // 17
    {
      index: "17",
      position: Position.ZENKUTSU,
      technique: {
        name: "morote-uke",
        target: Target.CHUDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.S,
      },
      hasBackPicture: true,
      note: "step forward",
    },
    // 18
    {
      index: "18",
      position: Position.ZENKUTSU,
      technique: {
        name: "gedan-barai",
        target: Target.GEDAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.W,
      },
      note: "rotate 90 degrees right around front foot",
    },
    // 19-A
    {
      index: "19-A",
      position: Position.ZENKUTSU,
      technique: {
        name: "age-uke-arm",
        type: Type.KAMAE,
        side: Side.MIGI,
        target: Target.JODAN,
        orientation: Orientation.NW,
      },
      note: "rotate 45 degrees right around front foot and step forward; raise the open left hand to prepare the right rising block",
    },
    // 19
    {
      index: "19",
      position: Position.ZENKUTSU,
      technique: {
        name: "age-uke",
        target: Target.JODAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.NW,
      },
      note: "stay where you are and complete the right rising block",
    },
    // 20
    {
      index: "20",
      position: Position.ZENKUTSU,
      technique: {
        name: "gedan-barai",
        target: Target.GEDAN,
        type: Type.BLOCK,
        side: Side.MIGI,
        orientation: Orientation.E,
      },
      note: "rotate 135 degrees right around rear foot",
    },
    // 21-A
    {
      index: "21-A",
      position: Position.ZENKUTSU,
      technique: {
        name: "age-uke-arm",
        type: Type.KAMAE,
        side: Side.HIDARI,
        target: Target.JODAN,
        orientation: Orientation.NE,
      },
      note: "rotate 45 degrees left around front foot and step forward; raise the open right hand to prepare the left rising block",
    },
    // 21
    {
      index: "21",
      position: Position.ZENKUTSU,
      technique: {
        name: "age-uke",
        target: Target.JODAN,
        type: Type.BLOCK,
        side: Side.HIDARI,
        orientation: Orientation.NE,
      },
      kiai: true,
      note: "stay where you are and complete the left rising block",
    },
    // Yame
    {
      position: Position.HACHIJI,
      technique: {
        name: "yame",
        type: Type.KAMAE,
      },
      note: "bring the left foot beside the right and return to the ready stance",
    },
  ],
};
