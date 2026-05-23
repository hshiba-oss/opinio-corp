'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const mainNav = [
  { name: 'サービス', href: '/service/' },
  { name: 'OPINIO', href: 'https://opinio.jp', external: true },
  { name: '会社情報', href: '/about/' },
  { name: '採用情報', href: '/recruit/' },
  { name: 'お知らせ', href: '/news/' },
]

const mobileExtra = [
  { name: 'お問い合わせ', href: '/contact/' },
  { name: '採用情報', href: '/recruit/' },
]

function isActive(pathname: string, href: string) {
  if (href.startsWith('http')) return false
  const base = href.replace(/\/$/, '')
  return base ? pathname.startsWith(base) : pathname === '/'
}

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  if (pathname.startsWith('/admin')) return null

  return (
    <>
      {/* Main header — sticky */}
      <header style={{ position: 'sticky', top: 0, background: 'rgba(250,250,247,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)', zIndex: 100 }}>
        <div
          style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 32, height: 64 }}
          className="md:px-10"
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ fontFamily: 'var(--font-display), Georgia, serif', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', color: '#000', textDecoration: 'none', flexShrink: 0 }}
          >
            OPINIO<span style={{ color: '#000' }}>.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: 28, flex: 1 }}>
            {mainNav.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 2, transition: 'color 0.2s' }}
                >
                  {item.name}
                  <span style={{ fontSize: 10, color: 'var(--text-muted)', marginLeft: 2 }}>↗</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    color: '#000',
                    textDecoration: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    position: 'relative',
                    paddingBottom: 2,
                  }}
                >
                  {item.name}
                  {isActive(pathname, item.href) && (
                    <span style={{ position: 'absolute', bottom: -20, left: 0, right: 0, height: 2, background: '#000', borderRadius: 1 }} />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex" style={{ gap: 12, flexShrink: 0 }}>
            <Link href="/contact/?type=candidate" className="btn-v3 btn-v3-black">候補者相談</Link>
            <Link href="/contact/?type=business" className="btn-v3" style={{ background: 'transparent', color: '#000', border: '1px solid #000' }}>採用相談</Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden ml-auto"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
              transition: 'background 0.2s',
            }}
          >
            <span style={{ display: 'block', transition: 'transform 0.3s, opacity 0.2s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', opacity: open ? 0 : 1, position: 'absolute' }}>
              <Menu style={{ width: 22, height: 22 }} />
            </span>
            <span style={{ display: 'block', transition: 'transform 0.3s, opacity 0.2s', transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', opacity: open ? 1 : 0 }}>
              <X style={{ width: 22, height: 22 }} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        className="md:hidden"
        aria-hidden="true"
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10,15,13,0.45)',
          zIndex: 98,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Mobile menu panel */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          background: 'var(--bg)',
          zIndex: 99,
          maxHeight: 'calc(100dvh - 64px)',
          overflowY: 'auto',
          boxShadow: '0 8px 32px rgba(10,15,13,0.14)',
          transform: open ? 'translateY(0)' : 'translateY(-12px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
        }}
      >
        {/* Primary nav */}
        <nav style={{ borderBottom: '1px solid var(--border)' }}>
          {mainNav.map((item, i) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '17px 24px',
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  borderBottom: i < mainNav.length - 1 ? '1px solid var(--border)' : 'none',
                }}
                onClick={() => setOpen(false)}
              >
                <span>{item.name}</span>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>↗</span>
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '17px 24px',
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#000',
                  background: isActive(pathname, item.href) ? '#F5F5F5' : 'transparent',
                  textDecoration: 'none',
                  borderBottom: i < mainNav.length - 1 ? '1px solid var(--border)' : 'none',
                  borderLeft: isActive(pathname, item.href) ? '3px solid #000' : '3px solid transparent',
                  paddingLeft: isActive(pathname, item.href) ? 21 : 24,
                  transition: 'background 0.15s',
                }}
                onClick={() => setOpen(false)}
              >
                <span>{item.name}</span>
                <span style={{ fontSize: 13, color: '#999' }}>→</span>
              </Link>
            )
          )}
        </nav>

        {/* Secondary links */}
        <div style={{ background: '#F5F5F5', borderBottom: '1px solid var(--border)' }}>
          {mobileExtra.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                display: 'block',
                padding: '13px 24px',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
              }}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link
            href="/contact/?type=candidate"
            className="btn-v3 btn-v3-black btn-v3-large"
            style={{ justifyContent: 'center' }}
            onClick={() => setOpen(false)}
          >
            候補者相談
          </Link>
          <Link
            href="/contact/?type=business"
            className="btn-v3 btn-v3-large"
            style={{ justifyContent: 'center', background: 'transparent', color: '#000', border: '1px solid #000' }}
            onClick={() => setOpen(false)}
          >
            採用相談
          </Link>
        </div>
      </div>
    </>
  )
}
