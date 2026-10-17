"use client";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// Loaded lazily by ZoomableImage, the first time the image is enlarged.
export default function ZoomableImageLightbox({
  open,
  close,
  src,
  alt,
  width,
  height,
}: Readonly<{
  open: boolean;
  close: () => void;
  src: string;
  alt: string;
  width: number;
  height: number;
}>) {
  return (
    <Lightbox
      open={open}
      close={close}
      slides={[{ src, alt, width, height }]}
      plugins={[Zoom, Fullscreen]}
      zoom={{ scrollToZoom: true }}
      carousel={{ finite: true }}
      render={{
        buttonPrev: () => null,
        buttonNext: () => null,
      }}
    />
  );
}
