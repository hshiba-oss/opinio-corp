import type { Metadata } from 'next'
import Script from 'next/script'
import { Fraunces, JetBrains_Mono, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const GTM_ID = 'GTM-WWCP2T44'
const HUBSPOT_PORTAL_ID = '244556311'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.opinio.co.jp/#organization',
      name: 'Opinio',
      url: 'https://www.opinio.co.jp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.opinio.co.jp/images/ogp.png',
      },
      description:
        'キャリアの意思決定を、インフラに。AI時代の第3者視点と技術で、納得のキャリア選択をすべての人へ。IT/SaaS業界特化のキャリアコンサルティングとOPINIOプラットフォーム。',
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.opinio.co.jp/#website',
      url: 'https://www.opinio.co.jp',
      name: 'OPINIO.',
      description: 'キャリアの意思決定を、インフラに。',
      publisher: { '@id': 'https://www.opinio.co.jp/#organization' },
    },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'OPINIO. | キャリアの意思決定を、インフラに。',
    template: '%s | 株式会社Opinio',
  },
  description:
    'AI時代の第3者視点と技術で、納得のキャリア選択をすべての人へ。IT/SaaS業界120社超の採用支援実績。国家資格キャリアコンサルタントによる個人支援とOPINIOの2つのサービス。',
  keywords: ['Opinio', 'キャリア相談', 'IT転職', 'SaaS転職', '採用支援', 'キャリアコンサルティング'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.opinio.co.jp',
    siteName: '株式会社Opinio',
    title: 'OPINIO. | キャリアの意思決定を、インフラに。',
    description:
      'AI時代の第3者視点と技術で、納得のキャリア選択をすべての人へ。IT/SaaS業界特化のキャリアコンサルティングとOPINIOプラットフォーム。',
    images: [
      {
        url: 'https://www.opinio.co.jp/images/ogp.png',
        width: 1200,
        height: 630,
        alt: 'OPINIO. | キャリアの意思決定を、インフラに。',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OPINIO. | キャリアの意思決定を、インフラに。',
    description: 'AI時代の第3者視点と技術で、納得のキャリア選択をすべての人へ。',
    images: ['https://www.opinio.co.jp/images/ogp.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  alternates: { canonical: 'https://www.opinio.co.jp' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${notoSansJP.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <Script
          id="hs-script-loader"
          src={`//js-na2.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
