import { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: '導入事例',
  description: 'Opinioを利用した企業・候補者の採用・転職成功事例をご紹介します。',
  openGraph: {
    title: '導入事例 | 株式会社Opinio',
    description: 'Opinioを利用した企業・候補者の採用・転職成功事例をご紹介します。',
    url: 'https://www.opinio.co.jp/cases/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '導入事例 | 株式会社Opinio',
    description: 'Opinioを利用した採用・転職成功事例をご紹介します。',
    images: ['https://www.opinio.co.jp/images/ogp.png'],
  },
}

const stats = [
  { value: '36+', label: '支援企業数', sub: 'IT/SaaS業界を中心に' },
  { value: '0%', label: '早期離職率', sub: '転職後1年以内' },
  { value: '200+', label: '支援実績', sub: '候補者支援累計' },
]

const caseTypes = [
  {
    title: '企業事例',
    desc: 'IT/SaaS企業での採用成功事例。採用課題の解決プロセスと成果をご紹介します。営業・CS・エンジニアなど様々な職種での実績を掲載予定です。',
  },
  {
    title: '候補者事例',
    desc: '転職を成功させた方々の体験談。意思決定のプロセスと転職後の変化を、本人の言葉でお伝えします。',
  },
]

export default function CasesPage() {
  return (
    <>
      <PageHeader subtitle="CASES" title="導入事例" description="Opinioを利用した企業・候補者の成功事例" />

      {/* Stats */}
      <section style={{ padding: '64px 0', background: 'var(--bg-dark)' }}>
        <div className="container-v3">
          <div className="grid md:grid-cols-3 gap-8" style={{ textAlign: 'center' }}>
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontStyle: 'italic', fontSize: 52, fontWeight: 400, color: 'var(--accent-light)', lineHeight: 1, marginBottom: 8 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 4 }}>{stat.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{stat.sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-v3">
        <div className="container-v3">
          <ScrollReveal>
            <div className="section-mark">
              <span className="section-mark-num">01</span>
              <div className="section-mark-line" />
            </div>
            <p className="section-eyebrow">COMING SOON</p>
            <h2 className="section-title-v3">事例を順次公開予定です</h2>
            <p className="section-subtitle-v3" style={{ marginTop: 12, maxWidth: 640 }}>
              Opinioを通じて採用・転職を成功させた企業・候補者の声を順次掲載していきます。
              掲載開始のご案内を希望される方は、お問い合わせフォームよりご連絡ください。
            </p>
          </ScrollReveal>

          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {caseTypes.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 32 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--accent-soft)', marginBottom: 16 }} />
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 20 }}>{item.desc}</p>
                  <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, padding: '4px 12px', borderRadius: 20, background: 'var(--border)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono), monospace' }}>
                    準備中
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--accent-soft)' }}>
        <div className="container-v3" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <p className="section-eyebrow">GET IN TOUCH</p>
            <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: 16, marginTop: 16 }}>
              まずはご相談ください
            </h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 32, lineHeight: 1.7 }}>
              採用課題のご相談、キャリア相談など、お気軽にお問い合わせください。
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/?type=business" className="btn-v3 btn-v3-primary">採用相談をする →</Link>
              <Link href="/contact/?type=candidate" className="btn-v3 btn-v3-secondary">キャリア相談をする →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
