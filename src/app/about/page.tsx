import { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: '会社情報 | OPINIO',
  description: '株式会社OPINIOの会社概要・代表メッセージ・ミッション・バリューをご紹介します。',
  openGraph: {
    title: '会社情報 | OPINIO',
    description: '株式会社OPINIOの会社概要・代表メッセージ・ミッション・バリューをご紹介します。',
    url: 'https://www.opinio.co.jp/about/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
}

const companyInfo = [
  { label: '会社名',             value: '株式会社Opinio' },
  { label: '代表者',             value: '代表取締役　柴 久人' },
  { label: '設立',               value: '2023年9月' },
  { label: '資本金',             value: '500万円' },
  { label: '事業内容',           value: 'エージェント事業\nHR Tech（HRテック）サービスの開発・販売' },
  { label: '有料職業紹介事業免許', value: '13-ユ-316441' },
  { label: '保有資格',           value: 'キャリアコンサルタント（国家資格）\n一般社団法人プロティアン・キャリア協会 プロティアン基礎検定' },
  { label: '本社所在地',         value: '〒107-0052\n東京都港区赤坂2丁目21番4号' },
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

      {/* ── PAGE HEADER ── */}
      <section style={{
        background: '#fff',
        borderBottom: '1px solid #000',
        padding: '80px 0 72px',
      }}>
        <div className="container-v3">
          <p style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11, color: '#999',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            marginBottom: 20,
          }}>ABOUT US</p>
          <h1 style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            color: '#000',
          }}>会社情報</h1>
        </div>
      </section>

      {/* ── 01 VISION & MISSION ── */}
      <section style={{ padding: '100px 0', background: '#fff', borderBottom: '1px solid #E0E0E0' }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>01 — CULTURE</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.15, letterSpacing: '-0.025em',
              color: '#000', marginBottom: 56,
            }}>OPINIOのカルチャー</h2>
          </ScrollReveal>

          {/* Vision + Mission cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0, border: '1px solid #000', marginBottom: 48 }}>
            <ScrollReveal delay={60}>
              <div style={{ padding: '48px 44px', borderRight: '1px solid #000', height: '100%' }}>
                <p style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: 10, color: '#999',
                  letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24,
                }}>VISION</p>
                <h3 style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 26, fontWeight: 700,
                  color: '#000', lineHeight: 1.4, marginBottom: 20,
                }}>
                  すべての選択肢に、<br />納得のいくストーリーを。
                </h3>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.9 }}>
                  キャリアの選択に「正解」はありません。しかし、納得できる選択はあります。
                  私たちは、一人ひとりが自分らしいキャリアを描けるよう、
                  透明で信頼できる情報と仕組みを提供します。
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div style={{ padding: '48px 44px', background: '#000', height: '100%' }}>
                <p style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: 10, color: '#555',
                  letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24,
                }}>MISSION</p>
                <h3 style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 26, fontWeight: 700,
                  color: '#fff', lineHeight: 1.4, marginBottom: 20,
                }}>
                  AI時代の<br />キャリアインフラになる。
                </h3>
                <p style={{ fontSize: 14, color: '#888', lineHeight: 1.9 }}>
                  AIが仕事の在り方を根本から変えていく時代。私たちは、人と組織をつなぐ「インフラ」として、
                  信頼性の高い情報基盤とテクノロジーを提供します。
                  変化の時代だからこそ、揺るがない基盤が必要です。
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Values */}
          <ScrollReveal delay={80}>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              marginBottom: 32,
            }}>VALUE</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 0, border: '1px solid #000' }}>
              {values.map((v, i) => (
                <ScrollReveal key={v.en} delay={i * 60}>
                  <div style={{
                    padding: '40px 36px',
                    borderRight: i < values.length - 1 ? '1px solid #000' : 'none',
                    height: '100%',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 10, color: '#999',
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      marginBottom: 14,
                    }}>{v.en}</p>
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: '#000', marginBottom: 12 }}>{v.ja}</h4>
                    <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8 }}>{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 02 CEO MESSAGE ── */}
      <section style={{ padding: '100px 0', background: '#F5F5F5', borderBottom: '1px solid #E0E0E0' }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>02 — MESSAGE</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.15, letterSpacing: '-0.025em',
              color: '#000', marginBottom: 64,
            }}>代表メッセージ</h2>
          </ScrollReveal>

          <div style={{ maxWidth: 720 }}>
            <ScrollReveal delay={60}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 28, fontWeight: 700,
                  color: '#000', lineHeight: 1.45, marginBottom: 32,
                  letterSpacing: '-0.02em',
                }}>
                  すべての人が、<br />自分のキャリアに<br />納得できる社会へ。
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 14, color: '#555', lineHeight: 1.9 }}>
                  <p>
                    キャリアの意思決定は、人生において最も重要な選択のひとつです。
                    しかし、情報の非対称性や不透明さにより、多くの人が納得のいかない選択を余儀なくされています。
                  </p>
                  <p>
                    私たちOPINIOは、AI時代のキャリアインフラとして、透明で信頼できる情報基盤を構築し、
                    すべての人が自分らしいキャリアを歩める社会を実現します。
                  </p>
                  <p>
                    Salesforceで6年間、エンタープライズSaaSの現場を経験した中で痛感したのは、
                    「企業のリアルな情報が、外からはほとんど見えない」という現実です。
                    だからこそ、私たちは透明性と中立性を軸に、このプラットフォームを作り続けています。
                  </p>
                </div>
                <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid #D0D0D0' }}>
                  <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>代表取締役</p>
                  <p style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 22, fontWeight: 700,
                    color: '#000', letterSpacing: '-0.01em',
                  }}>柴 久人</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 03 COMPANY OVERVIEW ── */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>03 — COMPANY</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.15, letterSpacing: '-0.025em',
              color: '#000', marginBottom: 56,
            }}>会社概要</h2>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <dl style={{ maxWidth: 800, border: '1px solid #000' }}>
              {companyInfo.map((item, i) => (
                <div key={item.label} style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  borderBottom: i < companyInfo.length - 1 ? '1px solid #D0D0D0' : 'none',
                }}>
                  <dt style={{
                    padding: '18px 24px',
                    fontSize: 13, fontWeight: 500,
                    color: '#999',
                    background: '#F5F5F5',
                    borderRight: '1px solid #D0D0D0',
                    fontFamily: 'var(--font-mono), monospace',
                    letterSpacing: '0.02em',
                    display: 'flex', alignItems: 'center',
                  }}>
                    {item.label}
                  </dt>
                  <dd style={{
                    padding: '18px 28px',
                    fontSize: 14, color: '#000',
                    whiteSpace: 'pre-line', lineHeight: 1.8,
                    display: 'flex', alignItems: 'center',
                    margin: 0,
                  }}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={80}>
            <div style={{ marginTop: 72, paddingTop: 64, borderTop: '1px solid #E0E0E0', display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/contact/?type=candidate" className="btn-v3 btn-v3-black">
                候補者相談を申し込む
              </Link>
              <Link href="/contact/?type=business" style={{
                fontSize: 14, fontWeight: 500, color: '#000',
                textDecoration: 'none', borderBottom: '1px solid #000', paddingBottom: 2,
              }}>
                企業の採用相談はこちら →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
