import { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: '会社情報',
  description: '株式会社Opinioの会社概要、ミッション・ビジョン・バリューをご紹介します。',
  openGraph: {
    title: '会社情報 | 株式会社Opinio',
    description: '株式会社Opinioの会社概要、ミッション・ビジョン・バリューをご紹介します。',
    url: 'https://www.opinio.co.jp/about/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '会社情報 | 株式会社Opinio',
    description: '株式会社Opinioの会社概要、ミッション・ビジョン・バリューをご紹介します。',
    images: ['https://www.opinio.co.jp/images/ogp.png'],
  },
}

const companyInfo = [
  { label: '会社名', value: '株式会社Opinio' },
  { label: '代表者', value: '代表取締役 柴 久人' },
  { label: '設立', value: '2023年9月' },
  { label: '資本金', value: '500万円' },
  { label: '事業内容', value: 'エージェント事業\nHR Tech（HRテック）サービスの開発・販売' },
  { label: '有料職業紹介事業免許', value: '13-ユ-316441' },
  { label: '保有資格', value: 'キャリアコンサルタント（国家資格）\n一般社団法人プロティアン・キャリア協会 プロティアン基礎検定' },
  { label: '本社所在地', value: '〒107-0052\n東京都港区赤坂2丁目21番4号' },
]

const values = [
  {
    en: 'The Dream Team',
    ja: '最高のチームを作る',
    desc: '個人の力を超えた成果は、チームでしか生まれない。互いを高め合い、最高のチームを目指します。',
  },
  {
    en: 'Truth First',
    ja: '真実を最優先に',
    desc: '都合の良い情報ではなく、真実を伝える。それが長期的な信頼につながると信じています。',
  },
  {
    en: 'Think Big',
    ja: '大きく考える',
    desc: '小さな改善に留まらず、大きなインパクトを目指す。常に本質的な課題解決を追求します。',
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: '会社情報', url: 'https://www.opinio.co.jp/about/' },
      ]} />

      <PageHeader subtitle="ABOUT US" title="会社情報" />

      {/* Vision & Mission */}
      <section className="section-v3">
        <div className="container-v3">
          <ScrollReveal>
            <div className="section-mark">
              <span className="section-mark-num">01</span>
              <div className="section-mark-line" />
            </div>
            <p className="section-eyebrow">CULTURE</p>
            <h2 className="section-title-v3">Opinioのカルチャー</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: 48, marginBottom: 40 }}>
            <ScrollReveal delay={100}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderTop: '3px solid var(--accent)',
                  borderRadius: 12,
                  padding: 40,
                  height: '100%',
                }}
              >
                <p className="section-eyebrow">VISION</p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 22,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                    marginBottom: 16,
                  }}
                >
                  すべての選択肢に、
                  <br />
                  納得のいくストーリーを。
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  キャリアの選択に「正解」はありません。しかし、納得できる選択はあります。
                  私たちは、一人ひとりが自分らしいキャリアを描けるよう、
                  透明で信頼できる情報と仕組みを提供します。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                style={{
                  background: 'var(--accent-soft)',
                  border: '1px solid var(--accent-light)',
                  borderTop: '3px solid var(--accent)',
                  borderRadius: 12,
                  padding: 40,
                  height: '100%',
                }}
              >
                <p className="section-eyebrow">MISSION</p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 22,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                    marginBottom: 16,
                  }}
                >
                  AI時代の
                  <br />
                  キャリアインフラになる。
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  AIが仕事の在り方を根本から変えていく時代。私たちは、人と組織をつなぐ「インフラ」として、
                  信頼性の高い情報基盤とテクノロジーを提供します。
                  変化の時代だからこそ、揺るがない基盤が必要です。
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Values */}
          <ScrollReveal delay={300}>
            <div style={{ background: 'var(--bg-dark)', borderRadius: 12, padding: '48px 40px' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  VALUE
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 26,
                    fontWeight: 500,
                    color: 'white',
                    lineHeight: 1.35,
                  }}
                >
                  私たちの価値観
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((v) => (
                  <div key={v.en}>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono), monospace',
                        fontSize: 11,
                        color: 'var(--accent-light)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      {v.en}
                    </p>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 10 }}>{v.ja}</h4>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CEO Message */}
      <section style={{ padding: '80px 0', background: 'var(--accent-soft)' }}>
        <div className="container-v3">
          <ScrollReveal>
            <div className="section-mark">
              <span className="section-mark-num">02</span>
              <div className="section-mark-line" />
            </div>
            <p className="section-eyebrow">MESSAGE</p>
            <h2 className="section-title-v3">代表メッセージ</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 items-center" style={{ marginTop: 48, maxWidth: 900 }}>
            <ScrollReveal delay={100}>
              <div style={{ position: 'relative', aspectRatio: '1', borderRadius: 12, overflow: 'hidden' }}>
                <Image
                  src="/images/ceo1.png"
                  alt="代表取締役 柴 久人"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 26,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                    marginBottom: 24,
                  }}
                >
                  すべての人が、
                  <br />
                  自分のキャリアに
                  <br />
                  納得できる社会へ。
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  <p>
                    キャリアの意思決定は、人生において最も重要な選択のひとつです。
                    しかし、情報の非対称性や不透明さにより、多くの人が納得のいかない選択を余儀なくされています。
                  </p>
                  <p>
                    私たちOpinioは、AI時代のキャリアインフラとして、透明で信頼できる情報基盤を構築し、
                    すべての人が自分らしいキャリアを歩める社会を実現します。
                  </p>
                </div>
                <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>代表取締役</p>
                  <p
                    style={{
                      fontFamily: 'var(--font-display), Georgia, serif',
                      fontSize: 20,
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    柴 久人
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-v3">
        <div className="container-v3">
          <ScrollReveal>
            <div className="section-mark">
              <span className="section-mark-num">03</span>
              <div className="section-mark-line" />
            </div>
            <p className="section-eyebrow">COMPANY</p>
            <h2 className="section-title-v3">会社概要</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <dl
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                overflow: 'hidden',
                maxWidth: 720,
                marginTop: 48,
              }}
            >
              {companyInfo.map((item, i) => (
                <div
                  key={item.label}
                  className="grid sm:grid-cols-3"
                  style={{ borderBottom: i < companyInfo.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <dt
                    style={{
                      padding: '16px 24px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      background: 'var(--accent-soft)',
                    }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    className="sm:col-span-2"
                    style={{
                      padding: '16px 24px',
                      fontSize: 14,
                      color: 'var(--text-primary)',
                      whiteSpace: 'pre-line',
                      lineHeight: 1.75,
                    }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
