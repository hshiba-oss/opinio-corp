import { Metadata } from 'next'
import { Mail, Building2, Clock } from 'lucide-react'
import HubSpotForm from '@/components/HubSpotForm'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '株式会社Opinioへのお問い合わせはこちらから。サービスに関するご質問、採用に関するご相談など、お気軽にご連絡ください。',
  openGraph: {
    title: 'お問い合わせ | 株式会社Opinio',
    description: 'サービスに関するご質問、採用に関するご相談など、お気軽にご連絡ください。2営業日以内にご回答いたします。',
    url: 'https://www.opinio.co.jp/contact/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お問い合わせ | 株式会社Opinio',
    description: 'サービスに関するご質問、採用に関するご相談など、お気軽にご連絡ください。',
    images: ['https://www.opinio.co.jp/images/ogp.png'],
  },
}

const contactItems = [
  {
    icon: Building2,
    label: '会社所在地',
    content: '〒107-0052\n東京都港区赤坂2丁目21番4号',
  },
  {
    icon: Mail,
    label: 'メールアドレス',
    content: 'info@opinio.co.jp',
    href: 'mailto:info@opinio.co.jp',
  },
  {
    icon: Clock,
    label: '営業時間',
    content: '平日 10:00 – 18:00\n（土日祝日休業）',
  },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: 'お問い合わせ', url: 'https://www.opinio.co.jp/contact/' },
      ]} />

      <PageHeader subtitle="CONTACT" title="お問い合わせ" description="お気軽にご連絡ください" />

      <section className="section-v3">
        <div className="container-v3">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: contact info */}
            <ScrollReveal>
              <div>
                <p className="section-eyebrow">CONTACT INFO</p>
                <h2
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 22,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.4,
                    marginBottom: 32,
                  }}
                >
                  お問い合わせ先
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {contactItems.map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 8,
                          background: 'var(--accent-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <item.icon style={{ width: 18, height: 18, color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none', lineHeight: 1.7 }}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 32,
                    padding: '16px 20px',
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--accent-light)',
                    borderRadius: 8,
                  }}
                >
                  <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', marginBottom: 4 }}>
                    ご回答について
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    お問い合わせいただいた内容につきましては、2営業日以内にご連絡いたします。
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal delay={150} className="lg:col-span-2">
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '40px',
                }}
              >
                <p className="section-eyebrow">FORM</p>
                <h2
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 22,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.4,
                    marginBottom: 28,
                  }}
                >
                  お問い合わせフォーム
                </h2>
                <HubSpotForm />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  )
}
