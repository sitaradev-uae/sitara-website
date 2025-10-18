"use client";

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-light">Start a Conversation</h2>
      <p className="mt-3 text-foreground/70">
        All trading relationships are subject to standard KYC/AML verification.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-8 grid md:grid-cols-2 gap-5"
        aria-label="Enquiry form"
      >
        <input
          className="bg-[#0E0E0E] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-bronze"
          placeholder="Full name"
          required
        />
        <input
          type="email"
          className="bg-[#0E0E0E] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-bronze"
          placeholder="Email"
          required
        />
        <input
          className="bg-[#0E0E0E] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-bronze md:col-span-2"
          placeholder="Company (optional)"
        />
        <textarea
          rows={5}
          className="bg-[#0E0E0E] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-bronze md:col-span-2"
          placeholder="Message"
        />
        <div className="md:col-span-2 flex items-center justify-between">
          <button className="border border-bronze rounded-xl px-5 py-3 hover:bg-bronze hover:text-black">
            Submit Enquiry
          </button>
          <div className="text-sm text-foreground/60">
            📍 Dubai, UAE • ✉️ contact@sitara.ae • ☎︎ +971-XX-XXX-XXXX
          </div>
        </div>
      </form>
    </div>
  );
}
