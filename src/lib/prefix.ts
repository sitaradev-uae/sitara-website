// Robust base-path helper for GitHub Project Pages
// Uses env when present, else detects at runtime.
const REPO = "sitara-website";

export const prefix =
  // Prefer the build-time env (from next.config.ts)
  (process.env.NEXT_PUBLIC_BASE_PATH as string | undefined) ??
  // Fallback: detect when hosted under /<repo>/ on GitHub Pages
  (typeof window !== "undefined" &&
  window.location.pathname.startsWith(`/${REPO}/`)
    ? `/${REPO}`
    : "");

export const withBasePath = (p: string) =>
  `${prefix}${p.startsWith("/") ? p : `/${p}`}`;
