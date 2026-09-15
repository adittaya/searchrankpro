import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site deploys to Firebase Hosting as plain files.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
