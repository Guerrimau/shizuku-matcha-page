/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig