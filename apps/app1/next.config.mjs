import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app1',
        exposes: {
          './Tab1': './src/features/tab1/index.tsx',
          './Tab2': './src/features/tab2/index.tsx',
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: ['react', 'react-dom'],
      }),
    );

    return config;
  },
};

export default nextConfig;