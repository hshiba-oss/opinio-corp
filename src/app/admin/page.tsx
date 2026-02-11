'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FileText, Newspaper, Briefcase, Plus, Image } from 'lucide-react'

interface Counts {
  blog: number
  news: number
  jobs: number
  logos: number
}

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Counts>({ blog: 0, news: 0, jobs: 0, logos: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCounts() {
      try {
        const [blogRes, newsRes, jobsRes, logosRes] = await Promise.all([
          fetch('/api/admin/blog'),
          fetch('/api/admin/news'),
          fetch('/api/admin/jobs'),
          fetch('/api/admin/logos'),
        ])
        const [blog, news, jobs, logos] = await Promise.all([
          blogRes.json(),
          newsRes.json(),
          jobsRes.json(),
          logosRes.json(),
        ])
        setCounts({
          blog: Array.isArray(blog) ? blog.length : 0,
          news: Array.isArray(news) ? news.length : 0,
          jobs: Array.isArray(jobs) ? jobs.length : 0,
          logos: Array.isArray(logos) ? logos.length : 0,
        })
      } catch (e) {
        console.error('Failed to fetch counts', e)
      } finally {
        setLoading(false)
      }
    }
    fetchCounts()
  }, [])

  const cards = [
    { name: 'ブログ記事', count: counts.blog, icon: FileText, href: '/admin/blog', newHref: '/admin/blog/new', color: 'bg-primary-100 text-primary-800' },
    { name: 'お知らせ', count: counts.news, icon: Newspaper, href: '/admin/news', newHref: '/admin/news/new', color: 'bg-accent-100 text-accent-700' },
    { name: '採用情報', count: counts.jobs, icon: Briefcase, href: '/admin/jobs', newHref: '/admin/jobs/new', color: 'bg-teal-100 text-teal-700' },
    { name: '導入企業ロゴ', count: counts.logos, icon: Image, href: '/admin/logos', newHref: '/admin/logos/new', color: 'bg-purple-100 text-purple-700' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">ダッシュボード</h1>

      {loading ? (
        <div className="text-gray-500">読み込み中...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900">{card.count}</span>
                </div>
                <h3 className="font-medium text-gray-700 mb-4">{card.name}</h3>
                <div className="flex gap-2">
                  <Link
                    href={card.href}
                    className="text-sm text-primary-800 hover:text-accent-500 font-medium"
                  >
                    一覧を見る →
                  </Link>
                  <Link
                    href={card.newHref}
                    className="inline-flex items-center gap-1 text-sm text-accent-600 hover:text-accent-700 font-medium ml-auto"
                  >
                    <Plus className="w-4 h-4" />
                    新規作成
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
