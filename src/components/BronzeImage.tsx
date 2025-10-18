"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type BronzeImageProps = {
  /** Local path from /public or a StaticImageData import */
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

function BronzeImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  sizes,
}: BronzeImageProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-soft">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`w-full h-auto object-cover opacity-90 ${className ?? ""}`}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(198,162,91,0.18) 0%, rgba(198,162,91,0) 60%)",
        }}
      />
    </div>
  );
}

export default BronzeImage;
export { BronzeImage }; // <-- named export too
