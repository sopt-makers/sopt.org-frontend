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
      'blogfiles.pstatic.net',
      'images.velog.io',
      'media.disquiet.io',
      'blogfiles.pstatic.net',
      'dthumb-phinf.pstatic.net',
      'postfiles.pstatic.net',
      'images.velog.io',
      'media.disquiet.io',
      'scontent-ssn1-1.xx.fbcdn.net',
      'storep-phinf.pstatic.net',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/review',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/sopticle',
        destination: '/blog',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
