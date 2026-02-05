import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 👇 ADDED: This silences the Turbopack/Webpack conflict error
  turbopack: {},

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Optimize chunk loading for development
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization?.splitChunks,
          cacheGroups: {
            ...config.optimization?.splitChunks?.cacheGroups,
            default: {
              ...config.optimization?.splitChunks?.cacheGroups?.default,
              chunks: 'async',
              minChunks: 1,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;