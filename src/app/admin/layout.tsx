'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'
import { FileText, Newspaper, Briefcase, LayoutDashboard, LogOut, Image } from 'lucide-react'

const adminNav = [
  { name: 'ダッシュボード', href: '/admin', icon: LayoutDashboard },
  { name: 'ブログ', href: '/admin/blog', icon: FileText },
  { name: 'お知らせ', href: '/admin/news', icon: Newspaper },
  { name: '採用情報', href: '/admin/jobs', icon: Briefcase },
  { name: '導入企業ロゴ', href: '/admin/logos', icon: Image },
]

function AdminSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  if (!session) return null

  return (
    <aside className="w-64 bg-primary-800 text-white min-h-screen fixed left-0 top-0">
      <div className="p-6">
        <Link href="/admin" className="text-xl font-bold">
          OPINIO Admin
        </Link>
      </div>
      <nav className="mt-4">
        {adminNav.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                isActive
                  ? 'bg-white/10 text-accent-400 border-r-2 border-accent-400'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <div className="text-sm text-gray-400 mb-2 px-2">{session.user?.name}</div>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center gap-2 px-2 py-2 text-sm text-gray-400 hover:text-white transition-colors w-full"
        >
          <LogOut className="w-4 h-4" />
          ログアウト
        </button>
      </div>
    </aside>
  )
}

function AdminContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, status } = useSession()

  // ログインページはセッションチェック不要、サイドバーなし（trailingSlash対応）
  const isLoginPage = pathname === '/admin/login' || pathname === '/admin/login/'

  useEffect(() => {
    if (!isLoginPage && status === 'unauthenticated') {
      router.replace('/admin/login')
    }
  }, [status, isLoginPage, router])

  if (isLoginPage) {
    return <>{children}</>
  }

  // ローディング中
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    )
  }

  // 未認証の場合（useEffectでリダイレクト中）
  if (!session) {
    return null
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 ml-64 min-h-screen bg-gray-50">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminContent>{children}</AdminContent>
    </SessionProvider>
  )
}
