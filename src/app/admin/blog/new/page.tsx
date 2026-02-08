'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function NewBlogPost() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    slug: '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    category: 'コラム',
    excerpt: '',
    content: '',
    author: 'Opinio編集部',
    tags: '',
    published: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const res = await fetch('/api/admin/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      }),
    })
    if (res.ok) router.push('/admin/blog')
    else setSaving(false)
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" />ブログ一覧に戻る
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">新規ブログ記事</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">スラッグ（URL）</label>
            <input type="text" required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" placeholder="my-blog-post" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">日付</label>
            <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">タイトル</label>
          <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">カテゴリ</label>
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm">
              <option value="コラム">コラム</option>
              <option value="ナレッジ">ナレッジ</option>
              <option value="インタビュー">インタビュー</option>
              <option value="お役立ち">お役立ち</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">著者</label>
            <input type="text" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">タグ（カンマ区切り）</label>
          <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" placeholder="AI, キャリア, 転職" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">概要</label>
          <textarea rows={2} required value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">本文</label>
          <textarea rows={12} required value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm font-mono" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="published" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="rounded" />
          <label htmlFor="published" className="text-sm text-gray-700">公開する</label>
        </div>
        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="inline-flex items-center gap-2 px-6 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium disabled:opacity-50">
            <Save className="w-4 h-4" />{saving ? '保存中...' : '保存'}
          </button>
        </div>
      </form>
    </div>
  )
}
