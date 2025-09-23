import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.thum.io", pathname: "/get/auth/**" },
    ],
  },
};

export default nextConfig;
