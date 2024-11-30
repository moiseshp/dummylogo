/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@phosphor-icons/react'],
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
};

export default nextConfig;
