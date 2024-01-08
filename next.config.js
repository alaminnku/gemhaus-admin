/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'plus.unsplash.com' },
      { hostname: 'd1moobs2b4epxu.cloudfront.net' },
    ],
  },
};

module.exports = nextConfig;
