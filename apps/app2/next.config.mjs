import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        exposes: {
          './Tab3': './src/features/tab3/index.tsx',
          './Tab4': './src/features/tab4/index.tsx',
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: ['react', 'react-dom'],
      }),
    );

    return config;
  },
};

export default nextConfig;