"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-soft">
        <Image
          src="/images/dubai-skyline.jpg"
          alt="Dubai skyline at dusk"
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl font-light text-bronze">Integrity. Precision. Access.</h2>
        <p className="mt-5 text-foreground/80">
          Sitara connects verified producers and global buyers with transparent, compliant trade execution across the gold value chain.
          Based in Dubai, we operate within rigorous KYC/AML standards and trusted Free Zone ecosystems.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-foreground/70">
          <li>• Licensed UAE entity</li>
          <li>• Ethical sourcing & verification</li>
          <li>• Refining & assaying partners</li>
          <li>• Vaulting & bonded logistics</li>
        </ul>
      </div>
    </section>
  );
}
