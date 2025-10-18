// No interactivity here, so no "use client" necessary —
// but it's fine to add it if you prefer consistency.

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-foreground/60">
          © {new Date().getFullYear()} Sitara FZCO — All rights reserved.
        </div>
        <div className="text-foreground/60">
          Operates in compliance with UAE precious metals regulations.
        </div>
      </div>
    </footer>
  );
}
