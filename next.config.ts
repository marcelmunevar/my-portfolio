import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true, // or false if you want a temporary redirect
      },
    ]
  },
};

export default nextConfig;
