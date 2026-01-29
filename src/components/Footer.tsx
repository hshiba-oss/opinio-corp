import Link from 'next/link'

const navigation = {
  main: [
    { name: '会社情報', href: '/about/' },
    { name: '事業内容', href: '/service/' },
    { name: '採用情報', href: '/recruit/' },
    { name: 'お知らせ', href: '/news/' },
    { name: 'お問い合わせ', href: '/contact/' },
  ],
  legal: [
    { name: 'プライバシーポリシー', href: '/privacy/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="3" />
                <circle cx="20" cy="20" r="8" fill="white" />
              </svg>
              <span className="text-xl font-bold tracking-tight">OPINIO</span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              AI時代のキャリアインフラになる。
              <br />
              すべての選択肢に、納得のいくストーリーを。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">メニュー</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">その他</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} 株式会社Opinio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
