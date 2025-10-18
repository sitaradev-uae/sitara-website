import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Classic allow-list (works in all versions)
    domains: ["images.unsplash.com", "upload.wikimedia.org"],

    // Pattern allow-list (also fine, but keep both to be safe)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
