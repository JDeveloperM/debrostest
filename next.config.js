/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  output: 'export',  // Enables static HTML export
  reactStrictMode: true,
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
}

module.exports = nextConfig
