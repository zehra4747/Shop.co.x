import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
module.exports = {
  webpack: (config: { cache: boolean; }) => {
    config.cache = false; // Disable Webpack caching
    return config;
  },
};
