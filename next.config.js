/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  output: 'export',  // Enables static HTML export
  reactStrictMode: true,
  compress: true,  // Enable compression
  poweredByHeader: false,  // Remove X-Powered-By header
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
      {
        protocol: 'https',
        hostname: 'api.coingecko.com',
      },
    ],
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // Optimize for static export
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
