import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
        {hostname: "www.freepnglogos.com"}
        ]
    }
};

export default nextConfig;
