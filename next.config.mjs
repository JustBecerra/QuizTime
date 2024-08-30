/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BE_PRODUCTION: process.env.BE_PRODUCTION,
    BE_LOCALHOST: process.env.BE_LOCALHOST,
  },
};

export default nextConfig;
