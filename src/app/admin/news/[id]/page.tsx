'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function EditNewsPost({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    slug: '',
    title: '',
    date: '',
    category: 'お知らせ',
    excerpt: '',
    content: '',
    published: false,
  })

  useEffect(() => {
    fetch(`/api/admin/news/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          slug: data.slug,
          title: data.title,
          date: new Date(data.date).toISOString().split('T')[0],
          category: data.category,
          excerpt: data.excerpt,
          content: data.content,
          published: data.published,
        })
        setLoading(false)
      })
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const res = await fetch(`/api/admin/news/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) router.push('/admin/news')
    else setSaving(false)
  }

  if (loading) return <div className="text-gray-500">読み込み中...</div>

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/news" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" />お知らせ一覧に戻る
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">お知らせを編集</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">スラッグ（URL）</label>
            <input type="text" required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">カテゴリ</label>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm">
            <option value="お知らせ">お知らせ</option>
            <option value="プレスリリース">プレスリリース</option>
            <option value="採用">採用</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">概要</label>
          <textarea rows={2} required value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">本文</label>
          <textarea rows={10} required value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm font-mono" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="published" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="rounded" />
          <label htmlFor="published" className="text-sm text-gray-700">公開する</label>
        </div>
        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="inline-flex items-center gap-2 px-6 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium disabled:opacity-50">
            <Save className="w-4 h-4" />{saving ? '保存中...' : '更新'}
          </button>
        </div>
      </form>
    </div>
  )
}
