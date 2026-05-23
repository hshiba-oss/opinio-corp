'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  if (pathname.startsWith('/admin')) return null

  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'rgba(255,255,255,0.7)' }}>
      <div className="container-v3" style={{ paddingTop: 80, paddingBottom: 40 }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr 1fr 1fr',
            gap: 40,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
          className="grid-cols-1 md:grid-footer"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontWeight: 600,
                fontSize: 22,
                letterSpacing: '-0.02em',
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                marginBottom: 16,
              }}
            >
              OPINIO<span style={{ color: 'var(--accent)' }}>.</span>
            </Link>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              キャリアの意思決定を、インフラに。
              <br />
              AI時代の、第3者視点と技術で。
            </p>
          </div>

          {/* For Companies */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              For Companies
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { label: 'サービス特徴', href: '/service/' },
                { label: '導入事例', href: '/cases/' },
                { label: '採用相談', href: '/contact/?type=business' },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: 12 }}>
                  <Link
                    href={item.href}
                    style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              For Candidates
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { label: '支援内容', href: '/service/' },
                { label: 'キャリアコラム', href: '/blog/' },
                { label: 'キャリア相談', href: '/contact/?type=candidate' },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: 12 }}>
                  <Link
                    href={item.href}
                    style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Product */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { label: '会社概要', href: '/about/' },
                { label: '採用情報', href: '/recruit/' },
                { label: 'お知らせ', href: '/news/' },
                { label: 'お問い合わせ', href: '/contact/' },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: 12 }}>
                  <Link
                    href={item.href}
                    style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: 20, marginBottom: 12 }}>
                <a
                  href="https://opinio.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-light)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                >
                  OPINIO ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 32,
            flexWrap: 'wrap',
            gap: 16,
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          <span>© {new Date().getFullYear()} 株式会社Opinio. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>
              プライバシーポリシー
            </Link>
            <Link href="/terms/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
