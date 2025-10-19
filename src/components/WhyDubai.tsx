// src/components/WhyDubai.tsx   (or wherever this block lives)
import Image from "next/image";
import GoldTrading from "@/public/images/gold-trading.jpg";

export default function WhyDubai() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-screen-xl items-center gap-8 md:grid-cols-2 px-4 sm:px-6 md:px-8">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl">


<Image
  src={GoldTrading}
  alt="Gold trading and Dubai skyline"
  className="object-cover w-full h-full"
  fill   // ensure parent wrapper has className="relative aspect-[16/10]"
  priority
/>


          {/* Optional soft vignette (won't hide the image) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-medium text-amber-400">
            At the Heart of Global Gold Trade
          </h2>
          <p className="mt-4 text-neutral-300">
            Dubai’s strategic location, regulatory framework, and Free Zone
            infrastructure connect producers, refineries, and markets with
            efficiency and trust. Sitara operates within this network to deliver
            reliable routes from origin to market.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm">KYC/AML Controls</span>
            <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm">Free Zone Logistics</span>
            <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm">Global Banking Links</span>
          </div>
        </div>
      </div>
    </section>
  );
}
