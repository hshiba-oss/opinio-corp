import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
