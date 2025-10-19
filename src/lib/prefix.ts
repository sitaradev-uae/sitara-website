// Robust base-path helper for GitHub Project Pages.
// Uses the build-time env (from next.config.ts) and falls back to runtime detection.
const REPO = "sitara-website";

const detected =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith(`/${REPO}/`)
    ? `/${REPO}`
    : "";

export const BASE_PATH =
  (process.env.NEXT_PUBLIC_BASE_PATH as string | undefined) ?? detected;

export const withBasePath = (p: string) =>
  `${BASE_PATH}${p.startsWith("/") ? p : `/${p}`}`;
