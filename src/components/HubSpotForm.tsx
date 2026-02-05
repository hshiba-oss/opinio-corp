'use client'

import { useEffect, useState } from 'react'

// HubSpot設定
const HUBSPOT_PORTAL_ID = '244556311'
const HUBSPOT_FORM_ID = 'd9167c75-37be-4434-9f06-e99abd5d1e03'
const HUBSPOT_REGION = 'na2'

export default function HubSpotForm() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `//js-${HUBSPOT_REGION}.hsforms.net/forms/embed/v2.js`
    script.async = true
    script.onload = () => {
      // @ts-expect-error HubSpot global
      if (window.hbspt) {
        // @ts-expect-error HubSpot global
        window.hbspt.forms.create({
          region: HUBSPOT_REGION,
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          target: '#hubspot-form-container',
          onFormReady: () => {
            setIsLoaded(true)
          },
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      const existingScript = document.querySelector(
        `script[src="//js-${HUBSPOT_REGION}.hsforms.net/forms/embed/v2.js"]`
      )
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="hubspot-form-wrapper">
      <div id="hubspot-form-container">
        {!isLoaded && (
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-24 bg-gray-200 rounded" />
          </div>
        )}
      </div>
    </div>
  )
}
