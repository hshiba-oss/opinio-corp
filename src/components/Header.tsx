'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: '会社情報', href: '/about/' },
  { name: '事業内容', href: '/service/' },
  { name: 'ブログ', href: '/blog/' },
  { name: '採用情報', href: '/recruit/' },
  { name: 'お知らせ', href: '/news/' },
  { name: 'お問い合わせ', href: '/contact/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#2d2a5b" strokeWidth="3" />
            <circle cx="20" cy="20" r="8" fill="#2d2a5b" />
          </svg>
          <span className="text-xl md:text-2xl font-bold text-primary-800 tracking-tight">
            OPINIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-primary-800 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="section-container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-medium text-gray-700 hover:text-primary-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
