/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    unoptimized: false, // Set to true if you want to disable Next.js image optimization
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply these headers to all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache for 1 year
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig