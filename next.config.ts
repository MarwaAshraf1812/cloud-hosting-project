import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'freepik.com',
      }
    ]
  }
};

export default nextConfig;
