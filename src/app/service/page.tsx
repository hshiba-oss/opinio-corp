import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Users, MessageSquare, Globe } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: '事業内容',
  description: 'Opinioのキャリアコンサルティング事業とHR Tech SaaS事業についてご紹介します。',
  openGraph: {
    title: '事業内容 | 株式会社Opinio',
    description: 'Opinioのキャリアコンサルティング事業とHR Tech SaaS事業についてご紹介します。',
    url: 'https://www.opinio.co.jp/service/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '事業内容 | 株式会社Opinio',
    description: 'キャリアコンサルティング事業とHR Tech SaaS事業の2つの柱で事業を展開しています。',
    images: ['https://www.opinio.co.jp/images/ogp.png'],
  },
}

const saasProducts = [
  {
    name: 'ATS（採用管理）',
    description: '採用の意思決定とその履歴を管理。採用プロセス全体を可視化し、データドリブンな採用を実現します。',
    icon: FileText,
    status: '提供中',
  },
  {
    name: 'Candidate（キャリア管理）',
    description: '応募者・個人のキャリア視点を支援。自分らしいキャリアを描くためのツールを提供します。',
    icon: Users,
    status: '開発中',
  },
  {
    name: 'Interview（面接支援）',
    description: '面接・評価の実行を支援。構造化面接と評価基準の統一で、公平な採用を実現します。',
    icon: MessageSquare,
    status: '開発中',
  },
  {
    name: 'Career Site（採用サイト）',
    description: '情報公開・母集団形成を担当。魅力的な採用サイトで優秀な人材との出会いを創出します。',
    icon: Globe,
    status: '開発中',
  },
]

export default async function ServicePage() {
  let consultingLogos: { id: string; imageUrl: string; name: string }[] = []
  let saasLogos: { id: string; imageUrl: string; name: string }[] = []

  try {
    consultingLogos = await prisma.logo.findMany({
      where: { published: true, category: 'consulting' },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    })
    saasLogos = await prisma.logo.findMany({
      where: { published: true, category: 'saas' },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    })
  } catch {
    // DB unavailable in local dev — logos section hidden
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: '事業内容', url: 'https://www.opinio.co.jp/service/' },
      ]} />

      <PageHeader subtitle="SERVICE" title="事業内容" />

      {/* Intro */}
      <section className="section-v3">
        <div className="container-v3">
          <ScrollReveal>
            <div className="section-mark">
              <span className="section-mark-num">01</span>
              <div className="section-mark-line" />
            </div>
            <p className="section-eyebrow">OVERVIEW</p>
            <h2 className="section-title-v3">コンサルティングで得た知見を<br />プロダクトに還元する</h2>
            <p className="section-subtitle-v3" style={{ marginTop: 12 }}>
              Opinioは、キャリアコンサルティング事業とHR Tech SaaS事業の2つの柱で事業を展開しています。
              現場で得たリアルな知見をテクノロジーに落とし込み、人と組織の課題を本質的に解決するサービスを提供します。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Consulting */}
      <section id="consulting" style={{ padding: '80px 0', background: 'var(--accent-soft)', scrollMarginTop: 80 }}>
        <div className="container-v3">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="section-mark">
                  <span className="section-mark-num">02</span>
                  <div className="section-mark-line" />
                </div>
                <p className="section-eyebrow">CONSULTING</p>
                <h2 className="section-title-v3">キャリアコンサルティング事業</h2>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 28 }}>
                  転職支援とキャリアコンサルティングを通じて、求職者と企業の双方にとって
                  「正直で信頼できる選択」を支える仕組みを構築しています。
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                  {[
                    { n: '1', title: '転職支援', desc: 'SaaS業界を中心に、キャリアアップを目指す方の転職をサポート' },
                    { n: '2', title: 'キャリアコンサルティング', desc: '国家資格を持つコンサルタントによる、中長期的なキャリア設計支援' },
                    { n: '3', title: '企業向け採用支援', desc: '採用戦略の策定から実行まで、一気通貫でサポート' },
                  ].map((item) => (
                    <div key={item.n} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 12,
                          fontWeight: 600,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        {item.n}
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{item.title}</p>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact/" className="btn-v3 btn-v3-primary">
                  採用相談をする →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div style={{ position: 'relative', aspectRatio: '1', borderRadius: 12, overflow: 'hidden' }}>
                <Image
                  src="/images/consulting-image.png"
                  alt="キャリアコンサルティング事業"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {consultingLogos.length > 0 && (
            <ScrollReveal delay={200}>
              <div style={{ marginTop: 64, paddingTop: 48, borderTop: '1px solid var(--border)' }}>
                <p
                  style={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: 32,
                  }}
                >
                  導入企業実績
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {consultingLogos.map((logo) => (
                    <div
                      key={logo.id}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        padding: 16,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '3/2',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo.imageUrl} alt={logo.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* SaaS */}
      <section id="saas" className="section-v3" style={{ scrollMarginTop: 80 }}>
        <div className="container-v3">
          <ScrollReveal>
            <div className="section-mark">
              <span className="section-mark-num">03</span>
              <div className="section-mark-line" />
            </div>
            <p className="section-eyebrow">HR TECH SAAS</p>
            <h2 className="section-title-v3">HR Tech SaaS事業</h2>
            <p className="section-subtitle-v3" style={{ marginTop: 12 }}>
              採用管理（ATS）を中核に、業務領域ごとに責任を分けたアプリ群で構成されるHR Techサービスを開発・提供しています。
              各アプリは疎結合で、将来的な追加・分離を前提とした設計です。
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: 48 }}>
            {saasProducts.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 80}>
                <div className="service-card-v3" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: 'var(--accent-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <product.icon style={{ width: 20, height: 20, color: 'var(--accent)' }} />
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        padding: '4px 10px',
                        borderRadius: 20,
                        background: product.status === '提供中' ? 'var(--accent-light)' : 'var(--border)',
                        color: product.status === '提供中' ? 'var(--accent)' : 'var(--text-muted)',
                      }}
                    >
                      {product.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{product.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.75 }}>{product.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {saasLogos.length > 0 && (
            <ScrollReveal delay={200}>
              <div style={{ marginTop: 64, paddingTop: 48, borderTop: '1px solid var(--border)' }}>
                <p
                  style={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: 32,
                  }}
                >
                  導入企業実績
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {saasLogos.map((logo) => (
                    <div
                      key={logo.id}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        padding: 16,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '3/2',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo.imageUrl} alt={logo.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Cases Teaser */}
      <section style={{ padding: '80px 0', background: 'var(--accent-soft)' }}>
        <div className="container-v3">
          <ScrollReveal>
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
              <p className="section-eyebrow">CASES</p>
              <h2 className="section-title-v3">導入事例</h2>
              <p className="section-subtitle-v3" style={{ marginTop: 12, marginBottom: 40 }}>
                採用支援・HR Techを通じて、企業の採用課題を解決してきた事例を順次公開しています。
              </p>
              <div className="grid md:grid-cols-3 gap-6" style={{ textAlign: 'left', marginBottom: 40 }}>
                {[
                  { num: '36+', label: '支援企業数', desc: 'SaaS・IT業界を中心に多数の企業を支援' },
                  { num: '0%', label: '早期離職率', desc: '入社後のミスマッチを防ぐ丁寧な支援' },
                  { num: '200+', label: '支援実績', desc: 'キャリア転換・採用成功の実績' },
                ].map((stat) => (
                  <div key={stat.num} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 28 }}>
                    <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 32, fontWeight: 600, color: 'var(--accent)', letterSpacing: '-0.02em', marginBottom: 4 }}>
                      {stat.num}
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>{stat.label}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7 }}>{stat.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/cases/" className="btn-v3 btn-v3-primary">
                導入事例を見る →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
        <div className="container-v3" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                color: 'var(--accent-light)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              GET IN TOUCH
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 500,
                color: 'white',
                lineHeight: 1.35,
                marginBottom: 16,
              }}
            >
              お気軽にお問い合わせください
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.7 }}>
              サービスに関するご質問、導入のご相談など、まずはお気軽にご連絡ください。
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
