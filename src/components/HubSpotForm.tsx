'use client'

import { useState, FormEvent } from 'react'

export default function HubSpotForm() {
  const [formData, setFormData] = useState({
    company: '',
    lastname: '',
    email: '',
    contact_comment: '',
    website: '', // ハニーポット（非表示）
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const debugInfo = data?.debug ? ` [${data.debug.status}: ${data.debug.detail}]` : ''
        throw new Error((data?.error || '送信に失敗しました。') + debugInfo)
      }

      setStatus('success')
      setFormData({ company: '', lastname: '', email: '', contact_comment: '', website: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : '送信に失敗しました。時間をおいて再度お試しください。'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="py-12 text-center bg-green-50 rounded-xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-500/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-medium text-primary-800 mb-2">
          お問い合わせを受け付けました
        </p>
        <p className="text-sm text-gray-600">
          2営業日以内にご連絡いたします。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* ハニーポット（非表示） */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
        <label htmlFor="website">ウェブサイト</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      {/* 会社名 */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-primary-800 mb-1.5">
          会社名
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="例）株式会社Opinio"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-base
                     focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20
                     placeholder:text-gray-400 transition-colors"
        />
      </div>

      {/* お名前 */}
      <div>
        <label htmlFor="lastname" className="block text-sm font-medium text-primary-800 mb-1.5">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          placeholder="例）山田 太郎"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-base
                     focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20
                     placeholder:text-gray-400 transition-colors"
        />
      </div>

      {/* Eメール */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary-800 mb-1.5">
          Eメール <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="例）info@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-base
                     focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20
                     placeholder:text-gray-400 transition-colors"
        />
      </div>

      {/* お問い合わせ内容 */}
      <div>
        <label htmlFor="contact_comment" className="block text-sm font-medium text-primary-800 mb-1.5">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact_comment"
          name="contact_comment"
          value={formData.contact_comment}
          onChange={handleChange}
          required
          rows={5}
          placeholder="お問い合わせ内容をご記入ください"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-base resize-vertical
                     focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20
                     placeholder:text-gray-400 transition-colors"
        />
      </div>

      {/* エラーメッセージ */}
      {status === 'error' && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 px-6 bg-accent-500 text-white font-semibold rounded-lg
                   hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500/40
                   disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'sending' ? '送信中...' : '送信する'}
      </button>
    </form>
  )
}
