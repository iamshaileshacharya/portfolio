/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    unoptimized: false, // Set to true if you want to disable Next.js image optimization
  },
}

module.exports = nextConfig