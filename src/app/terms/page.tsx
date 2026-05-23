import { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: '利用規約',
  description: '株式会社Opinioの利用規約についてご確認いただけます。',
  openGraph: {
    title: '利用規約 | 株式会社Opinio',
    description: '株式会社Opinioの利用規約についてご確認いただけます。',
    url: 'https://www.opinio.co.jp/terms/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  robots: { index: false },
}

const sections = [
  {
    num: '01',
    title: '適用',
    content: '本利用規約（以下「本規約」といいます）は、株式会社Opinio（以下「当社」といいます）が提供するすべてのサービス（以下「本サービス」といいます）の利用条件を定めるものです。本サービスをご利用いただく前に、本規約をよくお読みください。本サービスのご利用をもって、本規約に同意したものとみなします。',
  },
  {
    num: '02',
    title: 'サービスの利用',
    content: '本サービスは、IT/SaaS業界に特化したキャリア支援および採用支援を目的としています。お客様は、本規約の定めに従い、適法かつ適切な目的のためにのみ本サービスをご利用いただけます。',
  },
  {
    num: '03',
    title: '禁止事項',
    content: '本サービスのご利用にあたり、以下の行為を禁止します。',
    list: [
      '法令または公序良俗に違反する行為',
      '当社または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為',
      '虚偽の情報を入力または登録する行為',
      '本サービスの運営を妨害する行為',
      '不正アクセスその他の不正行為',
      '本サービスの信頼性を損なう行為',
      'その他、当社が不適切と判断する行為',
    ],
  },
  {
    num: '04',
    title: '知的財産権',
    content: '本サービスに掲載されているテキスト、画像、ロゴ、デザインその他のコンテンツに関する一切の知的財産権は、当社または当社に使用を許諾した権利者に帰属します。お客様は、当社の事前の書面による承諾なく、これらのコンテンツを複製、転載、改変、配布その他の方法で利用することはできません。',
  },
  {
    num: '05',
    title: '個人情報の取扱い',
    content: '当社は、本サービスの利用にあたってお客様からお預かりする個人情報を、別途定めるプライバシーポリシーに従い、適切に取り扱います。',
  },
  {
    num: '06',
    title: '免責事項',
    content: '当社は、本サービスに関して以下の事項について一切の責任を負いません。',
    list: [
      '本サービスの提供の中断・停止・終了、または変更によりお客様に生じた損害',
      'お客様が本サービスを利用することにより生じた損害（当社の故意または重大な過失による場合を除く）',
      '本サービスを通じて得られた情報の正確性、完全性、有用性等に関する事項',
      '第三者のウェブサイトへのリンクに関する事項',
    ],
  },
  {
    num: '07',
    title: 'サービスの変更・終了',
    content: '当社は、お客様への事前通知なしに、本サービスの内容を変更し、または本サービスの提供を終了することができます。これによりお客様に生じた損害について、当社は一切の責任を負いません。',
  },
  {
    num: '08',
    title: '利用規約の変更',
    content: '当社は、必要と判断した場合には、お客様への事前通知なしに本規約を変更することができます。変更後の本規約は、本ウェブサイトに掲載した時点より効力を生じるものとします。本サービスのご利用を継続された場合、変更後の本規約に同意したものとみなします。',
  },
  {
    num: '09',
    title: '準拠法・管轄裁判所',
    content: '本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。',
  },
]

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: '利用規約', url: 'https://www.opinio.co.jp/terms/' },
      ]} />

      <PageHeader subtitle="LEGAL" title="利用規約" />

      <section className="section-v3">
        <div className="container-v3">
          <div style={{ maxWidth: 760 }}>

            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
              本利用規約は、株式会社Opinio（以下「当社」といいます）が提供するサービスのご利用条件を定めるものです。
              本サービスをご利用いただく際には、本規約をよくお読みのうえ、同意いただいた上でご利用ください。
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
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono), monospace', lineHeight: 1.7 }}>
                制定日：2023.09.01<br />
                最終改定日：2025.01.01
              </p>
              <Link href="/privacy/" className="btn-v3 btn-v3-secondary">
                プライバシーポリシー →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
