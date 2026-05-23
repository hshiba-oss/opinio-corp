import { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: '採用情報 | OPINIO',
  description: '株式会社OPINIOの採用情報です。一緒にAI時代のキャリアインフラを創りませんか。',
  openGraph: {
    title: '採用情報 | OPINIO',
    description: 'AI時代のキャリアインフラを一緒に創りませんか。スタートアップならではのスピード感と確かな専門性を持つチームで挑戦できます。',
    url: 'https://www.opinio.co.jp/recruit/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
}

export const revalidate = 60

const cultureValues = [
  { en: 'The Dream Team', ja: '最高のチームを作る', desc: '少数精鋭のチームで、互いを高め合いながら成長できる環境' },
  { en: 'Truth First',    ja: '真実を最優先に',     desc: 'オープンなコミュニケーションと、率直なフィードバック文化' },
  { en: 'Think Big',      ja: '大きく考える',       desc: '大きな目標に向かって、裁量を持ってチャレンジできる環境' },
]

const perks = [
  { label: '完全リモート可', desc: '東京・赤坂オフィスとフルリモートのハイブリッド' },
  { label: '裁量労働制',     desc: 'アウトプットで評価。時間ではなく成果にフォーカス' },
  { label: '副業OK',        desc: '業務に支障のない範囲で副業・兼業を認めています' },
  { label: '少数精鋭',       desc: 'フラットな組織。代表と直接議論できる距離感' },
]

export default async function RecruitPage() {
  type JobRow = { id: string; slug: string; title: string; department: string; type: string; location: string }
  let publishedJobs: JobRow[] = []
  try {
    publishedJobs = await prisma.job.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    }) as JobRow[]
  } catch {
    // DB unavailable in local dev
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: '採用情報', url: 'https://www.opinio.co.jp/recruit/' },
      ]} />

      {/* ── PAGE HEADER ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #000', padding: '80px 0 72px' }}>
        <div className="container-v3">
          <p style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11, color: '#999',
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20,
          }}>RECRUIT</p>
          <h1 style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontWeight: 700, fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.05, letterSpacing: '-0.03em', color: '#000', marginBottom: 20,
          }}>採用情報</h1>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.8, maxWidth: 480 }}>
            一緒にAI時代のキャリアインフラを創りませんか
          </p>
        </div>
      </section>

      {/* ── 01 CULTURE ── */}
      <section style={{ padding: '100px 0', background: '#fff', borderBottom: '1px solid #E0E0E0' }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20,
            }}>01 — CULTURE</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700, fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#000', marginBottom: 20,
            }}>OPINIOで働く</h2>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.9, maxWidth: 600, marginBottom: 56 }}>
              私たちは「AI時代のキャリアインフラになる」というミッションのもと、HR領域の課題解決に取り組んでいます。
              スタートアップならではのスピード感と、確かな専門性を持つチームで、大きなインパクトを生み出す仕事に挑戦できます。
            </p>
          </ScrollReveal>

          {/* Values */}
          <ScrollReveal delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 0, border: '1px solid #000', marginBottom: 48 }}>
              {cultureValues.map((v, i) => (
                <div key={v.en} style={{
                  padding: '40px 36px',
                  borderRight: i < cultureValues.length - 1 ? '1px solid #000' : 'none',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 10, color: '#999',
                    letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14,
                  }}>{v.en}</p>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#000', marginBottom: 12 }}>{v.ja}</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Perks */}
          <ScrollReveal delay={80}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {perks.map((p) => (
                <div key={p.label} style={{
                  background: '#F5F5F5',
                  padding: '28px 28px',
                  borderLeft: '3px solid #000',
                }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#000', marginBottom: 8 }}>{p.label}</p>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 02 OPEN POSITIONS ── */}
      <section style={{ padding: '100px 0', background: '#F5F5F5', borderBottom: '1px solid #E0E0E0' }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#999',
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20,
            }}>02 — OPEN POSITIONS</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700, fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#000', marginBottom: 48,
            }}>募集中の職種</h2>
          </ScrollReveal>

          <div style={{ maxWidth: 800 }}>
            {publishedJobs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #000' }}>
                {publishedJobs.map((job, i) => (
                  <ScrollReveal key={job.id} delay={i * 60}>
                    <Link href={`/recruit/${job.slug}/`} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: 16, padding: '28px 36px',
                      background: '#fff',
                      borderBottom: i < publishedJobs.length - 1 ? '1px solid #D0D0D0' : 'none',
                      textDecoration: 'none',
                    }}>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#000', marginBottom: 8 }}>{job.title}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 13, color: '#999' }}>
                          <span>{job.department}</span>
                          <span>{job.type}</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 18, color: '#000', flexShrink: 0 }}>→</span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <ScrollReveal delay={80}>
                <div style={{
                  background: '#fff', border: '1px solid #D0D0D0',
                  padding: '64px 40px', textAlign: 'center',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 11, color: '#bbb', letterSpacing: '0.15em', marginBottom: 20,
                  }}>NO OPENINGS</p>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#000', marginBottom: 12 }}>
                    現在、公開中の募集はありません
                  </p>
                  <p style={{ fontSize: 14, color: '#777', lineHeight: 1.8 }}>
                    カジュアル面談は随時受け付けています。<br />ご興味のある方はお気軽にご連絡ください。
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#000', padding: '100px 0', textAlign: 'center' }}>
        <div className="container-v3">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11, color: '#555', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 24,
            }}>CASUAL MEETING</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)',
              lineHeight: 1.15, letterSpacing: '-0.025em',
              color: '#fff', marginBottom: 20,
            }}>カジュアル面談、受付中</h2>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.85, marginBottom: 48, maxWidth: 480, margin: '0 auto 48px' }}>
              募集職種に関わらず、OPINIOに興味をお持ちの方との面談を随時受け付けています。まずはお気軽にご連絡ください。
            </p>
            <Link href="/contact/" className="btn-v3 btn-v3-large btn-v3-on-black">
              お問い合わせ →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
