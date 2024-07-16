import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          app1: 'app1@http://localhost:4000/_next/static/chunks/remoteEntry.js',
          app2: 'app2@http://localhost:5000/_next/static/chunks/remoteEntry.js',
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: ['react', 'react-dom'],
      }),
    );

    return config;
  },
};

export default nextConfig;