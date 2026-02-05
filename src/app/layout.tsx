import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const GTM_ID = 'GTM-WWCP2T44'
const HUBSPOT_PORTAL_ID = '244556311'

export const metadata: Metadata = {
  title: {
    default: '株式会社Opinio | AI時代のキャリアインフラ',
    template: '%s | 株式会社Opinio',
  },
  description: 'すべての選択肢に、納得のいくストーリーを。Opinioは、キャリアコンサルティングとHR Techで、人と組織のより良い出会いを実現します。',
  keywords: ['Opinio', 'キャリア', '転職', 'HR Tech', '採用管理', 'ATS'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '株式会社Opinio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        <Script
          id="hs-script-loader"
          src={`//js-na2.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
          strategy="afterInteractive"
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
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
