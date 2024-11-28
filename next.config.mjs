/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
};

export default nextConfig;
