/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      // 旧WordPress: /column → /blog
      { source: '/column', destination: '/blog/', permanent: true },
      { source: '/column/:slug', destination: '/blog/', permanent: true },
      { source: '/column/:slug/', destination: '/blog/', permanent: true },
      // 旧WordPress: /voice
      { source: '/voice/:path*', destination: '/', permanent: true },
      // 旧ページ
      { source: '/terms', destination: '/privacy/', permanent: true },
      { source: '/terms/', destination: '/privacy/', permanent: true },
      { source: '/privacy-policy', destination: '/privacy/', permanent: true },
      { source: '/privacy-policy/', destination: '/privacy/', permanent: true },
      { source: '/contact-recruit', destination: '/contact/', permanent: true },
      { source: '/contact-recruit/', destination: '/contact/', permanent: true },
      { source: '/career-consult', destination: '/service/', permanent: true },
      { source: '/career-consult/', destination: '/service/', permanent: true },
      // 旧WordPress RSSフィード
      { source: '/:slug/feed', destination: '/blog/', permanent: true },
      { source: '/:slug/feed/', destination: '/blog/', permanent: true },
    ]
  },
}

module.exports = nextConfig
