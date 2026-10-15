import {
  type Kata,
  Level,
  Orientation,
  Position,
  Side,
  Target,
  Type,
} from "@/type";

export const TEKKI_SHODAN: Kata = {
  id: "tekki-shodan",
  name: "Tekki Shodan",
  meaning: "Tekki N° 1",
  videoId: "VAkA5zAosC4",
  level: Level.INTERMEDIATE,
  description:
    "Funakoshi renamed this kata Tekki; it was previously known as Naihanchi. The book presents Tekki Shodan as a foundational kata of Shuri-te, comparable in importance to the Heian series in Itosu's teaching and Sanchin in Higaonna's Naha-te. Traditions surrounding Choki Motobu associate its practice with a deep understanding of karate, while its apparent simplicity makes mastery demanding. All three Tekki katas follow a straight lateral embusen, moving left and right. Their characteristic stance varies between styles; Shotokan uses the horse stance, whose form has evolved over time. The book stresses regular practice as a way to develop and demonstrate sound karate fundamentals, and recalls the traditional claim that the kata should be repeated at least ten thousand times before being demonstrated.",
  motions: [
    {
      position: Position.HEISOKU,
      techniques: [
        {
          name: "yoi",
          type: Type.KAMAE,
        },
      ],
      note: "Stand with the feet together and the left hand resting on the right, arms angled down and elbows slightly bent.",
      isSlow: true,
    },
    {
      position: Position.KOSA,
      techniques: [
        {
          name: "yoi-arm",
          type: Type.KAMAE,
        },
      ],
      index: "1",
      orientation: Orientation.N,
      note: "Look right, lower the hips and cross the left foot in front of the right, placing it beyond the right foot.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "kosa-uke-arm",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
        {
          name: "fumikomi-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      index: "2a",
      orientation: Orientation.N,
      note: "Shift the weight onto the left leg, raise the right leg in front and cross the forearms at chest height, left arm on top.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "haishu-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
        {
          name: "fumikomi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      index: "2",
      orientation: Orientation.N,
      note: "Stamp the right foot down to the right into a horse stance and extend the right back-of-hand block.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "sokumen empi-uchi",
          side: Side.HIDARI,
          type: Type.HATEMI,
          target: Target.CHUDAN,
        },
      ],
      index: "3",
      orientation: Orientation.N,
      note: "Keep the feet and hips in place; twist the upper body right and strike the right palm with the left elbow.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      index: "4",
      orientation: Orientation.N,
      note: "Stay in the same stance, look left and lower both fists above the right hip, left fist resting on the right.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "sokumen gedan-barai",
          side: Side.HIDARI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      index: "5",
      orientation: Orientation.N,
      note: "Stay in the same stance and block downward to the left with the left arm.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "kagi-zuki",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      index: "6",
      orientation: Orientation.N,
      note: "Stay in the same stance and punch to the left with the right fist.",
    },
    {
      position: Position.KOSA,
      techniques: [
        {
          name: "kagi-zuki step",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.KAMAE,
        },
      ],
      index: "7",
      orientation: Orientation.N,
      note: "Keep the hips low and the arms unchanged; cross the right foot in front of the left, placing it beyond the left foot.",
      isSlow: true,
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "uchi-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
        {
          name: "fumikomi-arm",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      index: "8a",
      orientation: Orientation.N,
      note: "Look forward and lift the left leg up and left while raising the right fist above the left shoulder.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "uchi-uke",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
        {
          name: "fumikomi",
          side: Side.HIDARI,
          type: Type.HATEMI,
        },
      ],
      index: "8",
      orientation: Orientation.N,
      note: "Stamp the left foot down to the left into a horse stance and perform the right inward-to-outward block.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "nagashi-uke",
          side: Side.HIDARI,
          target: Target.JODAN,
          type: Type.BLOCK,
        },
        {
          name: "uke-zuki",
          side: Side.MIGI,
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      index: "9b",
      orientation: Orientation.N,
      note: "Stay in the same stance; raise the left elbow behind the shoulder for a high sweeping block and extend the right arm downward in front.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "uraken-uchi",
          side: Side.HIDARI,
          target: Target.JODAN,
          type: Type.HATEMI,
        },
      ],
      index: "9",
      orientation: Orientation.N,
      note: "Stay in the same stance; bring the right fist to the solar plexus and strike with the left back fist, supported by the right hand under the elbow.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "uraken-uchi-arm",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.KAMAE,
        },
      ],
      index: "10a",
      orientation: Orientation.N,
      note: "Keep the stance and arms unchanged; look left.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "nami-gaeshi",
          side: Side.HIDARI,
          type: Type.HATEMI,
          target: Target.GEDAN,
        },
        {
          name: "uraken-uchi-arm",
          side: Side.HIDARI,
          target: Target.JODAN,
          type: Type.KAMAE,
        },
      ],
      index: "10b",
      orientation: Orientation.N,
      note: "Keep the upper body and hips still; flick the left foot inward toward the lower abdomen.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "sokumen-uke",
          side: Side.HIDARI,
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      index: "10",
      orientation: Orientation.N,
      note: "Set the left foot down into a horse stance; twist only the upper body and block laterally to the left with the left arm.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "sokumen-uke-arm",
          side: Side.HIDARI,
          type: Type.KAMAE,
          target: Target.CHUDAN,
        },
      ],
      index: "11a",
      orientation: Orientation.N,
      note: "Keep the stance and arms unchanged; look right.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "nami-gaeshi",
          side: Side.MIGI,
          type: Type.HATEMI,
          target: Target.GEDAN,
        },
        {
          name: "sokumen-uke-arm",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      index: "11b",
      orientation: Orientation.N,
      note: "Keep the upper body and arms unchanged; flick the right foot inward.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "gyaku sokumen-uke",
          side: Side.HIDARI,
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      index: "11",
      orientation: Orientation.N,
      note: "Set the right foot down into a horse stance; twist only the upper body and block to the right with the left arm, right fist supporting the left elbow.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
          side: Side.MIGI,
        },
      ],
      index: "12",
      orientation: Orientation.N,
      note: "Stay in the same stance, look left and lower both fists above the right hip.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "morote-zuki",
          type: Type.HATEMI,
          side: Side.HIDARI,
          target: Target.CHUDAN,
        },
      ],
      index: "13",
      orientation: Orientation.N,
      note: "Stay in the same stance and extend both fists to the left.",
      kiai: true,
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "haishu-uke-arm",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
      ],
      index: "14a",
      orientation: Orientation.N,
      note: "Stay in the same stance; open the left hand and bring it in front of the chest under the right arm.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "haishu-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
      ],
      index: "14",
      orientation: Orientation.N,
      note: "Stay in the same stance; slowly extend the left back-of-hand block to the left and pull the right fist above the right hip.",
      isSlow: true,
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "sokumen empi-uchi",
          side: Side.MIGI,
          type: Type.HATEMI,
          target: Target.CHUDAN,
        },
      ],
      index: "15",
      orientation: Orientation.N,
      note: "Keep the feet and hips in place; twist the upper body left and strike the left palm with the right elbow.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
      ],
      index: "16",
      orientation: Orientation.N,
      note: "Stay in the same stance, look right and lower both fists above the left hip.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "sokumen gedan-barai",
          side: Side.MIGI,
          target: Target.GEDAN,
          type: Type.BLOCK,
        },
      ],
      index: "17",
      orientation: Orientation.N,
      note: "Stay in the same stance and block downward to the right with the right arm.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "kagi-zuki",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.HATEMI,
        },
      ],
      index: "18",
      orientation: Orientation.N,
      note: "Stay in the same stance and punch to the right with the left fist.",
    },
    {
      position: Position.KOSA,
      techniques: [
        {
          name: "kagi-zuki step",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.KAMAE,
        },
      ],
      index: "19",
      orientation: Orientation.N,
      note: "Keep the hips low and the arms unchanged; cross the left foot in front of the right, placing it beyond the right foot.",
      isSlow: true,
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "uchi-uke-arm",
          side: Side.HIDARI,
          type: Type.KAMAE,
        },
        {
          name: "fumikomi-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      index: "20a",
      orientation: Orientation.N,
      note: "Lift the right leg forward and left, raise the left fist above the right shoulder and look forward.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "uchi-uke",
          side: Side.HIDARI,
          target: Target.CHUDAN,
          type: Type.BLOCK,
        },
        {
          name: "fumikomi",
          side: Side.MIGI,
          type: Type.HATEMI,
        },
      ],
      index: "20",
      orientation: Orientation.N,
      note: "Stamp the right foot down to the right into a horse stance and perform the left inward-to-outward block.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "nagashi-uke arm",
          type: Type.KAMAE,
        },
      ],
      index: "21a",
      orientation: Orientation.N,
      note: "Stay in the same stance; raise the right fist outward, pull the left elbow back and cross the forearms at chest height, right arm on the outside.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "nagashi-uke",
          side: Side.MIGI,
          target: Target.JODAN,
          type: Type.BLOCK,
        },
        {
          name: "uke-zuki",
          side: Side.HIDARI,
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      index: "21b",
      orientation: Orientation.N,
      note: "Stay in the same stance; bring the right arm beside the body for a high sweeping block while extending the left arm downward in front.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "uraken-uchi",
          side: Side.MIGI,
          target: Target.JODAN,
          type: Type.HATEMI,
        },
      ],
      index: "21",
      orientation: Orientation.N,
      note: "Stay in the same stance; bring the left fist in front and strike with the right back fist, supported by the left hand under the elbow.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "uraken-uchi-arm",
          side: Side.MIGI,
          target: Target.CHUDAN,
          type: Type.KAMAE,
        },
      ],
      index: "22a",
      orientation: Orientation.N,
      note: "Keep the stance and arms unchanged; look right.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "nami-gaeshi",
          side: Side.MIGI,
          type: Type.HATEMI,
          target: Target.GEDAN,
        },
        {
          name: "uraken-uchi-arm",
          side: Side.MIGI,
          target: Target.JODAN,
          type: Type.KAMAE,
        },
      ],
      index: "22b",
      orientation: Orientation.N,
      note: "Keep the upper body and arms unchanged; flick the right foot inward.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "sokumen-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      index: "22",
      orientation: Orientation.N,
      note: "Set the right foot down into a horse stance; twist only the upper body and block laterally to the right with the right arm.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "sokumen-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      index: "23a",
      orientation: Orientation.N,
      note: "Keep the stance and arms unchanged; look left.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "nami-gaeshi",
          side: Side.HIDARI,
          type: Type.HATEMI,
          target: Target.GEDAN,
        },
        {
          name: "sokumen-uke-arm",
          side: Side.MIGI,
          type: Type.KAMAE,
        },
      ],
      index: "23b",
      orientation: Orientation.N,
      note: "Keep the upper body and arms unchanged; flick the left foot inward.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "gyaku sokumen-uke",
          side: Side.MIGI,
          type: Type.BLOCK,
          target: Target.CHUDAN,
        },
      ],
      index: "23",
      orientation: Orientation.N,
      note: "Set the left foot down into a horse stance; twist only the upper body and block to the left with the right arm, left fist supporting the right elbow.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "koshi-gamae",
          type: Type.KAMAE,
          side: Side.HIDARI,
        },
      ],
      index: "24",
      orientation: Orientation.N,
      note: "Stay in the same stance, look right and bring both fists above the left hip.",
    },
    {
      position: Position.KIBA,
      techniques: [
        {
          name: "morote-zuki",
          type: Type.HATEMI,
          side: Side.MIGI,
          target: Target.CHUDAN,
        },
      ],
      index: "25",
      orientation: Orientation.N,
      note: "Stay in the same stance and extend both fists to the right.",
      kiai: true,
    },
    {
      position: Position.HEISOKU,
      techniques: [
        {
          name: "yame",
          type: Type.KAMAE,
        },
      ],
      note: "Bring the right foot inward toward the left, open and lower the hands, look forward, then bring the feet together and rest the left hand on the right.",
    },
  ],
};
