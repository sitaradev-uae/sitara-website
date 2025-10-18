"use client";
import BronzeImage from "./BronzeImage";

export default function WhyDubai() {
  return (
    <section
      id="why-dubai"
      className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-10 items-center"
    >
      <BronzeImage
        src="/images/gold-trading.jpeg"
        alt="Gold trading and Dubai skyline"
        width={1600}
        height={1000}
        variant="light"          // a touch lighter here
        overlayStrength={0.26}
      />

      <div>
        <h2 className="text-3xl md:text-4xl font-light text-bronze">
          At the Heart of Global Gold Trade
        </h2>
        <p className="mt-5 text-foreground/80">
          Dubai’s strategic location, regulatory framework, and Free Zone infrastructure
          connect producers, refineries, and markets with efficiency and trust. Sitara
          operates within this network to deliver reliable routes from origin to market.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-foreground/70">
          <span className="px-3 py-1 rounded-full border border-white/10">
            KYC/AML Controls
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10">
            Free Zone Logistics
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10">
            Global Banking Links
          </span>
        </div>
      </div>
    </section>
  );
}
