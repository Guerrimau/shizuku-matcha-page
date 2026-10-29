/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.shizukumatchastudio.com' }],
        destination: 'https://shizukumatchastudio.com/:path*',
        statusCode: 301,
      },
    ]
  },
}

module.exports = nextConfig