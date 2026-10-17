// Intrinsic size of each floor map in public/maps/<kata id>.png, so the
// thumbnail and the zoom viewer keep the real aspect ratio (no distortion, no
// layout shift). Update it when a map is added or replaced:
//   sips -g pixelWidth -g pixelHeight public/maps/*.png
const MAP_SIZES: Record<string, { width: number; height: number }> = {
  "bassai-dai": { width: 3084, height: 4020 },
  empi: { width: 3075, height: 4608 },
  "heian-godan": { width: 2310, height: 3942 },
  "heian-nidan": { width: 2265, height: 3600 },
  "heian-sandan": { width: 1665, height: 3867 },
  "heian-shodan": { width: 2310, height: 3570 },
  "heian-yondan": { width: 1845, height: 3726 },
  jion: { width: 2088, height: 6144 },
  "tekki-shodan": { width: 2505, height: 2484 },
};

export type KataMap = { src: string; width: number; height: number };

export const getKataMap = (kataId: string): KataMap | undefined => {
  const size = MAP_SIZES[kataId];
  return size && { src: `/maps/${kataId}.png`, ...size };
};
