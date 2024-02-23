/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'd1moobs2b4epxu.cloudfront.net' },
      { hostname: 'd2e2m62549awvx.cloudfront.net' },
    ],
  },
};

module.exports = nextConfig;
