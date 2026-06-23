"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = {
  /** The primary image src to try */
  src: ImageProps["src"];
  /** Fallback src if the primary image fails */
  fallbackSrc: ImageProps["src"];
} & Omit<ImageProps, "src">;

export default function ImageWithFallback({ src, fallbackSrc, ...props }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const isFallback = currentSrc === fallbackSrc;

  return (
    <Image
      {...props}
      src={currentSrc}
      onError={() => {
        if (!isFallback) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}

