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
  // Add webpack configuration to handle build issues
  webpack: (config) => {
    // Disable webpack cache to avoid serialization issues
    config.cache = false;

    // Ignore problematic modules during build
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
  // Disable SWC minification to avoid SWC errors
  swcMinify: false,
  // Use Terser for minification instead
  experimental: {
    forceSwcTransforms: false,
  },
}

module.exports = nextConfig
