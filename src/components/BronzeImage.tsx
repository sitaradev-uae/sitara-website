"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type BronzeImageProps = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  /** 0 → none, 1 → very strong (default 0.22) */
  overlayStrength?: number;
  /** Add a soft vignette for contrast (default true) */
  vignette?: boolean;
  /** quick presets: "light" | "dark" (affects strength + vignette) */
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

// Sitara bronze
const BRONZE = "198,162,91";

export default function BronzeImage({
  src,
  alt,
  width,
  height,
  overlayStrength,
  vignette = true,
  variant = "light",
  className,
  priority,
  sizes,
}: BronzeImageProps) {
  // sensible defaults by preset
  const strength =
    overlayStrength ??
    (variant === "dark" ? 0.34 : 0.22); // bump for darker photos

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-soft">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`w-full h-auto object-cover ${className ?? ""}`}
        // Note: next/image respects basePath automatically and we're using
        // images.unoptimized=true in next.config.ts for GitHub Pages.
      />

      {/* Bronze color wash (soft-light gives a tasteful metal glow) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `rgba(${BRONZE}, ${strength})`,
          mixBlendMode: "soft-light",
        }}
      />

      {/* Directional bronze gradient (adds depth and warmth) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(${BRONZE}, ${
            strength * 0.9
          }) 0%, rgba(${BRONZE}, 0) 60%)`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Optional vignette for contrast/readability */}
      {vignette && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 40%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.28) 100%)",
          }}
        />
      )}
    </div>
  );
}
