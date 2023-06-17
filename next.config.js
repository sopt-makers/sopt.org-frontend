/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'sopt-makers.s3.ap-northeast-2.amazonaws.com',
      's3.ap-northeast-2.amazonaws.com',
      'makers-web-img.s3.ap-northeast-2.amazonaws.com',
      'user-images.githubusercontent.com',
      'avatars.githubusercontent.com',
      'i.ibb.co',
      'velog.velcdn.com',
      'leadership.ng',
      'github.githubassets.com',
      'img1.daumcdn.net',
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

module.exports = nextConfig;
