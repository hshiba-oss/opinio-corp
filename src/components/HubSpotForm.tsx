'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

// HubSpot設定
const HUBSPOT_PORTAL_ID = '244556311'
const HUBSPOT_FORM_ID = 'd9167c75-37be-4434-9f06-e99abd5d1e03'
const HUBSPOT_REGION = 'na2'

export default function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // クリーンアップ: 既存のフォームを削除
    if (containerRef.current) {
      containerRef.current.innerHTML = ''
      const formDiv = document.createElement('div')
      formDiv.className = 'hs-form-frame'
      formDiv.setAttribute('data-region', HUBSPOT_REGION)
      formDiv.setAttribute('data-form-id', HUBSPOT_FORM_ID)
      formDiv.setAttribute('data-portal-id', HUBSPOT_PORTAL_ID)
      containerRef.current.appendChild(formDiv)
    }
  }, [])

  return (
    <div className="hubspot-form-wrapper">
      <Script
        src={`https://js-${HUBSPOT_REGION}.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`}
        strategy="lazyOnload"
      />
      <div ref={containerRef} id="hubspot-form-container" />
    </div>
  )
}
