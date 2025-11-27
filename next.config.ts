/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: isProd
      ? [
          {
            protocol: 'https',
            hostname: 'api.goldenpath.ae',
            pathname: '/storage/**',
          },
          {
            protocol: 'https',
            hostname: 'api.goldenpath.ae',
            pathname: '/curator/**',
          },
        ]
      : [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000',
            pathname: '/storage/**',
          },
        ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
