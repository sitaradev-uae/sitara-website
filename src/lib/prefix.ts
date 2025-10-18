// src/lib/prefix.ts
export const prefix =
  typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_BASE_PATH ?? ""
    : "";

export const withBasePath = (p: string) =>
  `${prefix}${p.startsWith("/") ? p : `/${p}`}`;
