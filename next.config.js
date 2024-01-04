/** @type {import('next').NextConfig} */
const withSvgr = require("@newhighsco/next-plugin-svgr");
const nextConfig = withSvgr({
  swcMinify: true,
  reactStrictMode: false,
});

module.exports = nextConfig;
