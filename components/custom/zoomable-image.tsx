"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// The lightbox and its plugins are only needed once the image is enlarged:
// keep them out of the page's initial JS.
const ZoomableImageLightbox = dynamic(
  () => import("./zoomable-image-lightbox"),
  {
    ssr: false,
  },
);

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
};

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  sizes,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  // Mount the lightbox on the first open only (that triggers the download),
  // then keep it mounted so closing still animates.
  const [hasOpened, setHasOpened] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setHasOpened(true);
          setOpen(true);
        }}
        aria-label={`Enlarge: ${alt}`}
        className="block cursor-zoom-in h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className="h-full w-auto m-auto"
        />
      </button>

      {hasOpened && (
        <ZoomableImageLightbox
          open={open}
          close={() => setOpen(false)}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </>
  );
}
