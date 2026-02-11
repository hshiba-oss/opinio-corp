'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Upload, X } from 'lucide-react'
import Link from 'next/link'

export default function EditLogo({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState({
    name: '',
    imageUrl: '',
    category: 'consulting',
    order: 0,
    published: false,
  })

  useEffect(() => {
    fetch(`/api/admin/logos/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          name: data.name,
          imageUrl: data.imageUrl,
          category: data.category,
          order: data.order,
          published: data.published,
        })
        setLoading(false)
      })
  }, [params.id])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 2 * 1024 * 1024) {
      alert('画像サイズは2MB以下にしてください')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setForm({ ...form, imageUrl: reader.result as string })
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setForm({ ...form, imageUrl: '' })
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.imageUrl) {
      alert('ロゴ画像を選択してください')
      return
    }
    setSaving(true)
    const res = await fetch(`/api/admin/logos/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) router.push('/admin/logos')
    else setSaving(false)
  }

  if (loading) return <div className="text-gray-500">読み込み中...</div>

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/logos" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" />ロゴ一覧に戻る
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">ロゴを編集</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">企業名</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">事業カテゴリ</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm"
          >
            <option value="consulting">キャリアコンサルティング</option>
            <option value="saas">SaaS</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ロゴ画像</label>
          {form.imageUrl ? (
            <div className="relative inline-block">
              <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                <img
                  src={form.imageUrl}
                  alt="プレビュー"
                  className="max-h-24 object-contain"
                />
              </div>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
              <p className="text-xs text-gray-400 mt-2">画像を変更するには × で削除してから再アップロード</p>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-accent-400 hover:bg-gray-50 transition-all"
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">クリックして画像を選択</p>
              <p className="text-xs text-gray-400 mt-1">PNG / JPG / SVG（2MB以下）</p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml,image/webp"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">表示順</label>
          <input
            type="number"
            value={form.order}
            onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
            className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none text-sm"
          />
          <p className="text-xs text-gray-400 mt-1">数値が小さいほど先に表示されます</p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
            className="rounded"
          />
          <label htmlFor="published" className="text-sm text-gray-700">公開する</label>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving || !form.imageUrl}
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium disabled:opacity-50"
          >
            <Save className="w-4 h-4" />{saving ? '保存中...' : '更新'}
          </button>
        </div>
      </form>
    </div>
  )
}
