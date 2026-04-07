/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
