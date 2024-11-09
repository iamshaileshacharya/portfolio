import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule, webpack } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    unoptimized: false, // Default, enables optimization
    formats: ['image/avif', 'image/webp'], // Explicitly specify formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache for 1 year
          },
        ],
      },
    ];
  },
  compress: true, // Enable Gzip compression
  webpack: (config: Configuration, options: WebpackConfigContext): Configuration => {
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        })
      );
    }

    return config;
  },
};

export default nextConfig;

type WebpackConfigContext = {
  webpack: typeof webpack;
  defaultLoaders: Record<string, RuleSetRule>;
};