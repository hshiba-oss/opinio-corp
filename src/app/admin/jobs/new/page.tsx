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
    targetAudience: '',
    locationDetail: '',
    workHours: '',
    employmentDetail: '',
    salary: '',
    welfare: '',
    holidays: '',
    published: false,
  })
  const [requirements, setRequirements] = useState<string[]>([''])
  const [preferred, setPreferred] = useState<string[]>([''])

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

  const TextArea = ({ label, field, rows = 4, placeholder = '' }: { label: string; field: string; rows?: number; placeholder?: string }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea rows={rows} value={String((form as Record<string, unknown>)[field] ?? '')} onChange={(e) => setForm({ ...form, [field]: e.target.value })} placeholder={placeholder} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
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
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-6 max-w-3xl">
        {/* 基本情報 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">基本情報</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">スラッグ（URL）</label>
              <input type="text" required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" placeholder="career-advisor" />
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
              <label className="block text-sm font-medium text-gray-700 mb-1">勤務地（簡易）</label>
              <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm" />
            </div>
          </div>
        </div>

        {/* 仕事内容 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">仕事内容</h2>
          <TextArea label="業務内容" field="description" rows={8} />
        </div>

        {/* 対象となる方 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">対象となる方</h2>
          <TextArea label="応募資格・条件" field="targetAudience" rows={4} placeholder="学歴不問&#10;■必須条件：&#10;・営業経験（個人・法人問わず）&#10;■歓迎条件：&#10;・人材紹介業（RA/CA）の経験" />
          <div className="mt-4 space-y-4">
            <ArrayField label="必須要件（リスト表示）" items={requirements} setItems={setRequirements} />
            <ArrayField label="歓迎要件（リスト表示）" items={preferred} setItems={setPreferred} />
          </div>
        </div>

        {/* 勤務地詳細 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">勤務地</h2>
          <TextArea label="勤務地詳細" field="locationDetail" rows={4} placeholder="本社&#10;住所：東京都港区赤坂2-21-4&#10;転勤：無&#10;在宅勤務：相談可（週3日リモート）" />
        </div>

        {/* 勤務時間 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">勤務時間</h2>
          <TextArea label="勤務時間" field="workHours" rows={3} placeholder="フレックスタイム制&#10;コアタイム：11:00～18:00&#10;標準的な勤務時間帯：10:00～19:00" />
        </div>

        {/* 雇用形態詳細 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">雇用形態詳細</h2>
          <TextArea label="雇用形態の補足" field="employmentDetail" rows={2} placeholder="期間の定め：無&#10;試用期間：3ヶ月" />
        </div>

        {/* 給与 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">給与</h2>
          <TextArea label="給与" field="salary" rows={4} placeholder="予定年収：360万円～600万円&#10;月給：300,000円～500,000円&#10;昇給：有" />
        </div>

        {/* 待遇・福利厚生 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">待遇・福利厚生</h2>
          <TextArea label="待遇・福利厚生" field="welfare" rows={4} placeholder="通勤手当、健康保険、厚生年金保険、雇用保険、労災保険&#10;■健康診断&#10;■パーソナルジム&#10;■食事支援制度" />
        </div>

        {/* 休日・休暇 */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">休日・休暇</h2>
          <TextArea label="休日・休暇" field="holidays" rows={3} placeholder="完全週休2日制（土日祝日）&#10;年間休日日数123日&#10;夏季休暇、年末年始休暇、慶弔休暇、産休育休制度" />
        </div>

        {/* 公開設定 */}
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
