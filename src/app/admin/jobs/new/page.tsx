'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Plus, X } from 'lucide-react'
import Link from 'next/link'

export default function NewJob() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    slug: '',
    title: '',
    department: '',
    type: '正社員',
    location: '東京都港区（リモート可）',
    description: '',
    published: false,
  })
  const [requirements, setRequirements] = useState<string[]>([''])
  const [preferred, setPreferred] = useState<string[]>([''])
  const [benefits, setBenefits] = useState<string[]>([''])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const res = await fetch('/api/admin/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        requirements: requirements.filter(Boolean),
        preferred: preferred.filter(Boolean),
        benefits: benefits.filter(Boolean),
      }),
    })
    if (res.ok) router.push('/admin/jobs')
    else setSaving(false)
  }

  const ArrayField = ({ label, items, setItems }: { label: string; items: string[]; setItems: (v: string[]) => void }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input type="text" value={item} onChange={(e) => { const n = [...items]; n[i] = e.target.value; setItems(n) }} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
          {items.length > 1 && <button type="button" onClick={() => setItems(items.filter((_, j) => j !== i))} className="p-2 text-gray-400 hover:text-red-500"><X className="w-4 h-4" /></button>}
        </div>
      ))}
      <button type="button" onClick={() => setItems([...items, ''])} className="inline-flex items-center gap-1 text-sm text-accent-600 hover:text-accent-700">
        <Plus className="w-3 h-3" />追加
      </button>
    </div>
  )

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/jobs" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" />採用情報一覧に戻る
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">新規求人</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">スラッグ（URL）</label>
            <input type="text" required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" placeholder="career-advisor-2026" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">職種名</label>
            <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">部署</label>
            <input type="text" required value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">雇用形態</label>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm">
              <option value="正社員">正社員</option>
              <option value="契約社員">契約社員</option>
              <option value="業務委託">業務委託</option>
              <option value="インターン">インターン</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">勤務地</label>
            <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">業務内容</label>
          <textarea rows={4} required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
        </div>
        <ArrayField label="必須要件" items={requirements} setItems={setRequirements} />
        <ArrayField label="歓迎要件" items={preferred} setItems={setPreferred} />
        <ArrayField label="福利厚生" items={benefits} setItems={setBenefits} />
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
