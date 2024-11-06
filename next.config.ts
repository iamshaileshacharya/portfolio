import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule, webpack } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    unoptimized: false,
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