'use client'

import { useEffect, useRef } from 'react'

// HubSpot設定
const HUBSPOT_PORTAL_ID = '244556311'
const HUBSPOT_FORM_ID = 'd9167c75-37be-4434-9f06-e99abd5d1e03'
const HUBSPOT_REGION = 'na2'

export default function HubSpotForm() {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // HubSpot Forms APIのスクリプトを読み込む
    const script = document.createElement('script')
    script.src = `//js-${HUBSPOT_REGION}.hsforms.net/forms/embed/v2.js`
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: HUBSPOT_REGION,
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          target: '#hubspot-form-container',
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      // クリーンアップ
      const existingScript = document.querySelector(
        `script[src="//js-${HUBSPOT_REGION}.hsforms.net/forms/embed/v2.js"]`
      )
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  // HubSpotフォームが設定されていない場合のフォールバック（開発用）
  if (!HUBSPOT_PORTAL_ID || HUBSPOT_PORTAL_ID === 'YOUR_PORTAL_ID') {
    return (
      <form className="space-y-6">
        <div>
          <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-1">
            お問い合わせ種別 <span className="text-red-500">*</span>
          </label>
          <select
            id="inquiry_type"
            name="inquiry_type"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">選択してください</option>
            <option value="service">サービスについて</option>
            <option value="consulting">キャリア相談について</option>
            <option value="recruit">採用について</option>
            <option value="press">取材・メディア掲載について</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              会社名
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="株式会社〇〇"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="山田 太郎"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="example@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="03-1234-5678"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
            placeholder="お問い合わせ内容をご記入ください"
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="mt-1 w-4 h-4 text-primary-800 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            <a href="/privacy/" className="text-accent-500 hover:text-accent-600 underline">
              プライバシーポリシー
            </a>
            に同意の上、送信してください。
          </label>
        </div>

        <button type="submit" className="btn-primary w-full">
          送信する
        </button>

        <p className="text-xs text-gray-500 text-center">
          ※ HubSpotフォーム連携後、このフォームは自動的にHubSpotフォームに置き換わります。
        </p>
      </form>
    )
  }

  return (
    <div id="hubspot-form-container" ref={formRef}>
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded" />
        <div className="h-24 bg-gray-200 rounded" />
      </div>
    </div>
  )
}
