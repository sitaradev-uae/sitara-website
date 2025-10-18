"use client";

type Props = {
  active: "about" | "services" | "why-dubai" | "contact";
  onNav: (id: Props["active"]) => void;
};

export default function Header({ active, onNav }: Props) {
  const nav = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "why-dubai", label: "Why Dubai" },
    { id: "contact", label: "Contact" },
  ] as const;

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-black/40 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <span className="text-bronze text-lg tracking-[0.3em] select-none">SITARA</span>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className={`transition hover:text-bronze ${active === n.id ? "text-bronze" : "text-foreground/80"}`}
              aria-current={active === n.id ? "page" : undefined}
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => onNav("contact")}
            className="border border-bronze rounded-xl px-5 py-2 hover:bg-bronze hover:text-black"
          >
            Begin Relationship
          </button>
        </nav>
      </div>
    </header>
  );
}
