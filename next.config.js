/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    unoptimized: true,
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
  // Completely disable SWC to avoid build errors
  swcMinify: false,
  compiler: {
    removeConsole: false,
  },
  // Minimal webpack configuration for maximum compatibility
  webpack: (config, { dev, isServer }) => {
    // Disable all caching
    config.cache = false;

    // Disable problematic optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: false,
        splitChunks: false,
        runtimeChunk: false,
      };
    }

    // Provide fallbacks for Node.js modules
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
      querystring: false,
      util: false,
      buffer: false,
      events: false,
    };

    // Ignore problematic modules
    config.externals = config.externals || [];
    if (!isServer) {
      config.externals.push({
        'utf-8-validate': 'commonjs utf-8-validate',
        'bufferutil': 'commonjs bufferutil',
      });
    }

    return config;
  },
}

module.exports = nextConfig
