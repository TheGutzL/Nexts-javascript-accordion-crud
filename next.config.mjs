/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w.wallhaven.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
