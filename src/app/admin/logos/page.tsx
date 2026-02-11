'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'

interface Logo {
  id: string
  name: string
  imageUrl: string
  category: string
  order: number
  published: boolean
}

const categoryLabel: Record<string, string> = {
  consulting: 'キャリアコンサルティング',
  saas: 'SaaS',
}

export default function AdminLogoList() {
  const [logos, setLogos] = useState<Logo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetch('/api/admin/logos')
      .then((res) => res.json())
      .then((data) => setLogos(data))
      .finally(() => setLoading(false))
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('このロゴを削除しますか？')) return
    await fetch(`/api/admin/logos/${id}`, { method: 'DELETE' })
    setLogos(logos.filter((l) => l.id !== id))
  }

  const filtered = filter === 'all' ? logos : logos.filter((l) => l.category === filter)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">導入企業ロゴ</h1>
        <Link href="/admin/logos/new" className="inline-flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
          <Plus className="w-4 h-4" />
          新規追加
        </Link>
      </div>

      {/* フィルター */}
      <div className="flex gap-2 mb-6">
        {[
          { value: 'all', label: 'すべて' },
          { value: 'consulting', label: 'キャリアコンサルティング' },
          { value: 'saas', label: 'SaaS' },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === opt.value
                ? 'bg-primary-800 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-gray-500">読み込み中...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500 mb-4">ロゴがありません</p>
          <Link href="/admin/logos/new" className="text-accent-600 font-medium hover:text-accent-700">最初のロゴを追加 →</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((logo) => (
            <div key={logo.id} className="bg-white rounded-xl border border-gray-200 p-4 relative group">
              {/* カテゴリバッジ */}
              <span className={`absolute top-3 left-3 text-xs font-medium px-2 py-0.5 rounded-full ${
                logo.category === 'consulting'
                  ? 'bg-primary-100 text-primary-800'
                  : 'bg-accent-100 text-accent-700'
              }`}>
                {categoryLabel[logo.category] || logo.category}
              </span>

              {/* 公開状態 */}
              <span className="absolute top-3 right-3">
                {logo.published ? (
                  <Eye className="w-4 h-4 text-green-500" />
                ) : (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                )}
              </span>

              {/* ロゴ画像 */}
              <div className="aspect-[3/2] flex items-center justify-center mt-6 mb-3 p-4">
                {logo.imageUrl ? (
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* 企業名 */}
              <p className="text-sm font-medium text-gray-900 text-center truncate">{logo.name}</p>
              <p className="text-xs text-gray-400 text-center mt-1">表示順: {logo.order}</p>

              {/* 操作 */}
              <div className="flex items-center justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/admin/logos/${logo.id}`} className="p-2 text-gray-400 hover:text-primary-800 transition-colors">
                  <Edit className="w-4 h-4" />
                </Link>
                <button onClick={() => handleDelete(logo.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
