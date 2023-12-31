/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.shopify.com', 'images.unsplash.com', 'res.cloudinary.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
