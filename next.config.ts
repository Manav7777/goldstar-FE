import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [new URL('http://localhost:3000/images/**')],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
