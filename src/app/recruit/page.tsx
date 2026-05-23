import { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { MapPin, Clock, Building2, Users } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: '採用情報',
  description: '株式会社Opinioの採用情報です。一緒にAI時代のキャリアインフラを創りませんか。',
  openGraph: {
    title: '採用情報 | 株式会社Opinio',
    description: 'AI時代のキャリアインフラを一緒に創りませんか。スタートアップならではのスピード感と確かな専門性を持つチームで挑戦できます。',
    url: 'https://www.opinio.co.jp/recruit/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '採用情報 | 株式会社Opinio',
    description: 'AI時代のキャリアインフラを一緒に創りませんか。',
    images: ['https://www.opinio.co.jp/images/ogp.png'],
  },
}

export const revalidate = 60

const cultureValues = [
  { en: 'The Dream Team', ja: '最高のチームを作る', desc: '少数精鋭のチームで、互いを高め合いながら成長できる環境' },
  { en: 'Truth First', ja: '真実を最優先に', desc: 'オープンなコミュニケーションと、率直なフィードバック文化' },
  { en: 'Think Big', ja: '大きく考える', desc: '大きな目標に向かって、裁量を持ってチャレンジできる環境' },
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

      <PageHeader subtitle="RECRUIT" title="採用情報" description="一緒にAI時代のキャリアインフラを創りませんか" />

      {/* Culture & Values */}
      <section className="section-v3">
        <div className="container-v3">
          <ScrollReveal>
            <div className="section-mark">
              <span className="section-mark-num">01</span>
              <div className="section-mark-line" />
            </div>
            <p className="section-eyebrow">CULTURE</p>
            <h2 className="section-title-v3">Opinioで働く</h2>
            <p className="section-subtitle-v3" style={{ marginTop: 12 }}>
              私たちは「AI時代のキャリアインフラになる」というミッションのもと、HR領域の課題解決に取り組んでいます。
              スタートアップならではのスピード感と、確かな専門性を持つチームで、大きなインパクトを生み出す仕事に挑戦できます。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div style={{ background: 'var(--bg-dark)', borderRadius: 12, padding: '48px 40px', marginTop: 48 }}>
              <div className="grid md:grid-cols-3 gap-8">
                {cultureValues.map((v) => (
                  <div key={v.en}>
                    <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--accent-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                      {v.en}
                    </p>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 10 }}>{v.ja}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ padding: '80px 0', background: 'var(--accent-soft)' }}>
        <div className="container-v3">
          <ScrollReveal>
            <div className="section-mark">
              <span className="section-mark-num">02</span>
              <div className="section-mark-line" />
            </div>
            <p className="section-eyebrow">OPEN POSITIONS</p>
            <h2 className="section-title-v3">募集中の職種</h2>
          </ScrollReveal>

          <div style={{ marginTop: 48, maxWidth: 800 }}>
            {publishedJobs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {publishedJobs.map((job, i) => (
                  <ScrollReveal key={job.id} delay={i * 60}>
                    <Link
                      href={`/recruit/${job.slug}/`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 16,
                        padding: '24px 32px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 10,
                        textDecoration: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
                          {job.title}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 13, color: 'var(--text-muted)' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Building2 style={{ width: 14, height: 14 }} />{job.department}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Clock style={{ width: 14, height: 14 }} />{job.type}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <MapPin style={{ width: 14, height: 14 }} />{job.location}
                          </span>
                        </div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 18, color: 'var(--accent)', flexShrink: 0 }}>→</span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <ScrollReveal delay={100}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '64px 40px',
                  textAlign: 'center',
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Users style={{ width: 24, height: 24, color: 'var(--accent)' }} />
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 8 }}>現在、募集中の求人はありません</p>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                    カジュアル面談は随時受け付けています。<br />ご興味のある方はお問い合わせください。
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
        <div className="container-v3" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--accent-light)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
              CASUAL MEETING
            </p>
            <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 500, color: 'white', lineHeight: 1.35, marginBottom: 16 }}>
              カジュアル面談受付中
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.7 }}>
              募集職種に関わらず、Opinioに興味をお持ちの方との面談を随時受け付けています。<br />
              まずはお気軽にご連絡ください。
            </p>
            <Link href="/contact/" className="btn-v3 btn-v3-large btn-v3-on-green-primary">
              お問い合わせ →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
