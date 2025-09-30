/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/wordpress-fix',
  assetPrefix: '/wordpress-fix/',
  reactStrictMode: true,
  experimental: {
    // remove appDir: true
  },
};

export default nextConfig;
