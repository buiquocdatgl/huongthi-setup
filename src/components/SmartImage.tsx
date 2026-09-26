"use client";

import { useState } from "react";
import Image from "next/image";

interface SmartImageProps {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function SmartImage({
  src,
  alt,
  fallbackText,
  className = "",
  aspectRatio = "aspect-video",
  priority = false,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative w-full ${aspectRatio} bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-amber-900/20 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-inner group ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#800020_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        <div className="relative z-10 space-y-2">
          <div className="w-10 h-10 mx-auto rounded-full bg-amber-900/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-xs">
            F&B
          </div>
          <span className="block font-mono text-xs md:text-sm tracking-wider uppercase text-amber-300/90 font-medium">
            {fallbackText}
          </span>
          <span className="block text-[11px] text-neutral-500">
            Dễ dàng thay thế tại path: <code className="text-neutral-400 bg-neutral-800/80 px-1.5 py-0.5 rounded">{src}</code>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 ${className}`}>
      {/* Native img tag with fallback onError to support plain unoptimized public files smoothly */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
