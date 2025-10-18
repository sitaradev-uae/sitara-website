"use client";
import BronzeImage from "./BronzeImage";
import { withBasePath } from "@/lib/prefix";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
    >
      <BronzeImage
        src={withBasePath("/images/dubai-skyline.jpeg")}
        alt="Dubai skyline at dusk"
        width={1600}
        height={1000}
        priority
        variant="dark"           // slightly stronger preset
        overlayStrength={0.38}   // fine-tune if you want
      />

      <div>
        <h2 className="text-3xl md:text-4xl font-light text-bronze">
          Integrity. Precision. Access.
        </h2>
        <p className="mt-5 text-foreground/80">
          Sitara connects verified producers and global buyers with transparent,
          compliant trade execution across the gold value chain. Based in Dubai,
          we operate within rigorous KYC/AML standards and trusted Free Zone ecosystems.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-foreground/70">
          <li>• Licensed UAE entity</li>
          <li>• Ethical sourcing &amp; verification</li>
          <li>• Refining &amp; assaying partners</li>
          <li>• Vaulting &amp; bonded logistics</li>
        </ul>
      </div>
    </section>
  );
}
