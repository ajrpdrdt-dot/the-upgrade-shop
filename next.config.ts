import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Consolidate www onto the canonical apex host.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.theupgradeshoptus.com" }],
        destination: "https://theupgradeshoptus.com/:path*",
        permanent: true,
      },
      // Old login URL was returning 404 and collecting junk sessions.
      { source: "/my-account-login", destination: "/", permanent: true },
      { source: "/my-account-login/:path*", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/shop/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/assets/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
    ];
  },
};

export default nextConfig;
