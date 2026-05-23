import { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社Opinioのプライバシーポリシーについてご確認いただけます。',
  openGraph: {
    title: 'プライバシーポリシー | 株式会社Opinio',
    description: '株式会社Opinioのプライバシーポリシーについてご確認いただけます。',
    url: 'https://www.opinio.co.jp/privacy/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  robots: { index: false },
}

const sections = [
  {
    num: '01',
    title: '個人情報の定義',
    content: '本プライバシーポリシーにおいて、個人情報とは、個人情報保護法に規定される「個人情報」を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できる情報を指します。',
  },
  {
    num: '02',
    title: '個人情報の収集方法',
    content: '当社は、お客様がサービスをご利用される際に、氏名、メールアドレス、電話番号等の個人情報をお伺いすることがあります。',
  },
  {
    num: '03',
    title: '個人情報の利用目的',
    content: '当社は、収集した個人情報を以下の目的で利用いたします。',
    list: [
      '当社サービスの提供・運営のため',
      'お客様からのお問い合わせに対応するため',
      '当社サービスに関するご案内をお送りするため',
      '利用規約に違反した方や、不正・不当な目的でサービスを利用しようとする方の特定をし、ご利用をお断りするため',
      '上記の利用目的に付随する目的',
    ],
  },
  {
    num: '04',
    title: '個人情報の第三者提供',
    content: '当社は、法令に基づく場合を除き、お客様の同意を得ることなく、第三者に個人情報を提供することはありません。',
  },
  {
    num: '05',
    title: '個人情報の開示・訂正・削除',
    content: 'お客様から個人情報の開示・訂正・削除を求められた場合には、ご本人であることを確認した上で、遅滞なく対応いたします。',
  },
  {
    num: '06',
    title: 'プライバシーポリシーの変更',
    content: '本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、お客様に通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。',
  },
  {
    num: '07',
    title: 'お問い合わせ窓口',
    content: '本ポリシーに関するお問い合わせは、下記までお願いいたします。',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: 'プライバシーポリシー', url: 'https://www.opinio.co.jp/privacy/' },
      ]} />

      <PageHeader subtitle="LEGAL" title="プライバシーポリシー" />

      <section className="section-v3">
        <div className="container-v3">
          <div style={{ maxWidth: 760 }}>

            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
              株式会社Opinio（以下「当社」といいます）は、個人情報の保護に関する法令等を遵守するとともに、
              以下のプライバシーポリシーに従い、適切な取扱い及び保護に努めます。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {sections.map((section) => (
                <div key={section.num} style={{ paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
                    <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', flexShrink: 0 }}>
                      {section.num}
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontWeight: 500, fontSize: 18, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                      {section.title}
                    </h2>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: section.list ? 16 : 0, paddingLeft: 28 }}>
                    {section.content}
                  </p>
                  {section.list && (
                    <ul style={{ listStyle: 'none', padding: '0 0 0 28px', margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {section.list.map((item, i) => (
                        <li key={i} style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, paddingLeft: 16, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.num === '07' && (
                    <div style={{ marginTop: 16, padding: '20px 24px', background: 'var(--accent-soft)', border: '1px solid var(--accent-light)', borderRadius: 8, paddingLeft: 28, marginLeft: 28 }}>
                      <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.8 }}>
                        <strong style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>株式会社Opinio</strong>
                        〒107-0052 東京都港区赤坂2丁目21番4号<br />
                        メール：<a href="mailto:info@opinio.co.jp" style={{ color: 'var(--accent)', textDecoration: 'none' }}>info@opinio.co.jp</a>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono), monospace', lineHeight: 1.7 }}>
                制定日：2023.09.01<br />
                最終改定日：2025.01.01
              </p>
              <Link href="/contact/" className="btn-v3 btn-v3-secondary">
                お問い合わせ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
