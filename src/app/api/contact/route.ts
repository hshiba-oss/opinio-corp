import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_PORTAL_ID = '244556311'
const HUBSPOT_FORM_ID = 'd9167c75-37be-4434-9f06-e99abd5d1e03'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { company, lastname, email, contact_comment, website } = body

    // ハニーポット: websiteに値があればボット判定
    if (website) {
      // ボットにはバレないように成功を返す
      return NextResponse.json({ success: true })
    }

    // バリデーション
    if (!lastname || !email || !contact_comment) {
      return NextResponse.json(
        { error: '必須項目を入力してください。' },
        { status: 400 }
      )
    }

    // HubSpot Forms API v3
    const hubspotRes = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { objectTypeId: '0-1', name: 'company', value: company || '' },
            { objectTypeId: '0-1', name: 'lastname', value: lastname },
            { objectTypeId: '0-1', name: 'email', value: email },
            { objectTypeId: '0-1', name: 'contact_comment', value: contact_comment },
          ],
          context: {
            pageUri: 'https://opinio.co.jp/contact',
            pageName: 'お問い合わせ | 株式会社Opinio',
          },
        }),
      }
    )

    if (!hubspotRes.ok) {
      const errorData = await hubspotRes.json().catch(() => null)
      console.error('HubSpot API error:', hubspotRes.status, errorData)
      return NextResponse.json(
        { error: '送信に失敗しました。時間をおいて再度お試しください。' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。' },
      { status: 500 }
    )
  }
}
