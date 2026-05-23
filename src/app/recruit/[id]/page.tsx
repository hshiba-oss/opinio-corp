import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ArrowLeft, MapPin, Clock, Building2, CheckCircle2, Star } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

interface Props {
  params: { id: string }
}

export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let job: { title: string; description: string } | null = null
  try {
    job = await prisma.job.findFirst({ where: { slug: params.id, published: true } })
  } catch { /* ignore */ }
  if (!job) return {}

  return {
    title: `${job.title} | 採用情報`,
    description: job.description.substring(0, 160),
    openGraph: {
      title: `${job.title} | 株式会社Opinio採用情報`,
      description: job.description.substring(0, 160),
      url: `https://www.opinio.co.jp/recruit/${params.id}/`,
      images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} | 株式会社Opinio`,
      description: job.description.substring(0, 160),
      images: ['https://www.opinio.co.jp/images/ogp.png'],
    },
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 32, marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontWeight: 500, fontSize: 20, color: 'var(--text-primary)', marginBottom: 16 }}>{title}</h2>
      {children}
    </div>
  )
}

export default async function RecruitDetailPage({ params }: Props) {
  let job: Awaited<ReturnType<typeof prisma.job.findFirst>> = null
  try {
    job = await prisma.job.findFirst({ where: { slug: params.id, published: true } })
  } catch {
    notFound()
  }
  if (!job) notFound()

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: '採用情報', url: 'https://www.opinio.co.jp/recruit/' },
        { name: job.title, url: `https://www.opinio.co.jp/recruit/${params.id}/` },
      ]} />

      {/* Page Header */}
      <section style={{ background: 'var(--bg)', paddingTop: 80, paddingBottom: 64, position: 'relative', borderBottom: '1px solid var(--border)' }}>
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="container-v3" style={{ position: 'relative' }}>
          <Link
            href="/recruit/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', marginBottom: 24, transition: 'color 0.2s' }}
          >
            <ArrowLeft style={{ width: 14, height: 14 }} />
            採用情報に戻る
          </Link>
          <p className="section-eyebrow">RECRUIT</p>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: 20 }}>
            {job.title}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 13, color: 'var(--text-secondary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Building2 style={{ width: 14, height: 14, color: 'var(--accent)' }} />{job.department}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock style={{ width: 14, height: 14, color: 'var(--accent)' }} />{job.type}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <MapPin style={{ width: 14, height: 14, color: 'var(--accent)' }} />{job.location}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-v3">
        <div className="container-v3">
          <div style={{ maxWidth: 760 }}>

            <ScrollReveal>
              <Section title="仕事内容">
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>{job.description}</p>
              </Section>
            </ScrollReveal>

            {(job.targetAudience || job.requirements.length > 0 || job.preferred.length > 0) && (
              <ScrollReveal>
                <Section title="対象となる方">
                  {job.targetAudience && (
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-wrap', marginBottom: 16 }}>{job.targetAudience}</p>
                  )}
                  {job.requirements.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>必須要件</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {job.requirements.map((req, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: 'var(--text-secondary)' }}>
                            <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />{req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {job.preferred.length > 0 && (
                    <div>
                      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>歓迎要件</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {job.preferred.map((pref, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: 'var(--text-secondary)' }}>
                            <Star style={{ width: 16, height: 16, color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />{pref}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Section>
              </ScrollReveal>
            )}

            {job.locationDetail && (
              <ScrollReveal>
                <Section title="勤務地">
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>{job.locationDetail}</p>
                </Section>
              </ScrollReveal>
            )}

            {job.workHours && (
              <ScrollReveal>
                <Section title="勤務時間">
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>{job.workHours}</p>
                </Section>
              </ScrollReveal>
            )}

            {job.employmentDetail && (
              <ScrollReveal>
                <Section title="雇用形態">
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>{job.employmentDetail}</p>
                </Section>
              </ScrollReveal>
            )}

            {job.salary && (
              <ScrollReveal>
                <Section title="給与">
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>{job.salary}</p>
                </Section>
              </ScrollReveal>
            )}

            {(job.welfare || job.benefits.length > 0) && (
              <ScrollReveal>
                <Section title="待遇・福利厚生">
                  {job.welfare && (
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-wrap', marginBottom: 16 }}>{job.welfare}</p>
                  )}
                  {job.benefits.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {job.benefits.map((benefit, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: 'var(--text-secondary)' }}>
                          <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />{benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </Section>
              </ScrollReveal>
            )}

            {job.holidays && (
              <ScrollReveal>
                <Section title="休日・休暇">
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>{job.holidays}</p>
                </Section>
              </ScrollReveal>
            )}

            {/* CTA */}
            <ScrollReveal>
              <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-light)', borderRadius: 12, padding: 40, textAlign: 'center', marginTop: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontWeight: 500, fontSize: 22, color: 'var(--text-primary)', marginBottom: 12 }}>
                  この職種に応募する
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.7 }}>
                  ご興味をお持ちの方は、お気軽にお問い合わせください。
                </p>
                <Link href="/contact/" className="btn-v3 btn-v3-primary btn-v3-large">
                  お問い合わせ →
                </Link>
              </div>
            </ScrollReveal>

            <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
              <Link
                href="/recruit/"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                <ArrowLeft style={{ width: 14, height: 14 }} />
                採用情報に戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
