"use client";
import type { StaticImageData } from "next/image";
import { withBasePath } from "@/lib/prefix";

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
  priority?: boolean; // kept for API parity (not used by <img>)
  sizes?: string;     // kept for API parity (not used by <img>)
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
}: BronzeImageProps) {
  // sensible defaults by preset
  const strength =
    overlayStrength ?? (variant === "dark" ? 0.34 : 0.22); // bump for darker photos

  // Support both string paths and imported StaticImageData
  const resolvedSrc =
    typeof src === "string" ? withBasePath(src) : withBasePath(src.src);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-soft">
      <img
        src={resolvedSrc}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-auto object-cover ${className ?? ""}`}
        loading="lazy"
        decoding="async"
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
