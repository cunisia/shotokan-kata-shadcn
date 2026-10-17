"use client";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// Loaded lazily by ZoomableImage, the first time the image is enlarged.
// The slide has no width/height: the zoom plugin reads the picture's natural
// size once it has loaded (zooming is unavailable until then).
export default function ZoomableImageLightbox({
  open,
  close,
  src,
  alt,
}: Readonly<{
  open: boolean;
  close: () => void;
  src: string;
  alt: string;
}>) {
  return (
    <Lightbox
      open={open}
      close={close}
      slides={[{ src, alt }]}
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
