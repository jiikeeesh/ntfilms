import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  // Allows Live-Reload on your local network devices
  allowedDevOrigins: ["192.168.1.83:3000", "192.168.1.83", "localhost:3000"],
};

export default nextConfig;
