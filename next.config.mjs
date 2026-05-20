/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Swiper still ships some pre-bundled ESM; transpile to keep tree-shaking working
  transpilePackages: ['swiper', 'ssr-window', 'dom7'],

  // Smaller production builds, faster deploys
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,

  // Tree-shake icon + slider libs aggressively (huge bundle win for lucide-react)
  experimental: {
    optimizePackageImports: ['lucide-react', 'swiper', 'swiper/react', 'swiper/modules'],
  },

  // Strip console.* from prod bundles (keeps errors/warnings)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  // next/image runtime config (used wherever <Image> is rendered)
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

export default nextConfig
