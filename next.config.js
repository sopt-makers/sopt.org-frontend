/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['sopt-makers.s3.ap-northeast-2.amazonaws.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      options: {
        svgo: false,
      },
    });

    return config;
  },
};

module.exports = nextConfig;
