import { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Calendar } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '株式会社Opinioからのお知らせ、プレスリリースをご覧いただけます。',
  openGraph: {
    title: 'お知らせ | 株式会社Opinio',
    description: '株式会社Opinioからの最新情報、プレスリリースをご覧いただけます。',
    url: 'https://www.opinio.co.jp/news/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お知らせ | 株式会社Opinio',
    description: '株式会社Opinioからの最新情報をご覧いただけます。',
    images: ['https://www.opinio.co.jp/images/ogp.png'],
  },
}

export const revalidate = 60

function formatDate(date: Date) {
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')
}

const categoryStyle = (category: string): { bg: string; color: string } => {
  if (category === 'プレスリリース') return { bg: 'var(--accent-soft)', color: 'var(--accent)' }
  if (category === '採用') return { bg: 'rgba(5,150,105,0.1)', color: '#059669' }
  return { bg: 'var(--border)', color: 'var(--text-muted)' }
}

export default async function NewsPage() {
  type PostRow = { id: string; slug: string; title: string; date: Date; category: string }
  let posts: PostRow[] = []
  try {
    posts = await prisma.newsPost.findMany({
      where: { published: true },
      orderBy: { date: 'desc' },
    }) as PostRow[]
  } catch {
    // DB unavailable in local dev
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: 'お知らせ', url: 'https://www.opinio.co.jp/news/' },
      ]} />

      <PageHeader subtitle="NEWS" title="お知らせ" />

      <section className="section-v3">
        <div className="container-v3">
          <div style={{ maxWidth: 800 }}>
            {posts.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {posts.map((post, i) => (
                  <ScrollReveal key={post.id} delay={i * 40}>
                    <Link
                      href={`/news/${post.slug}/`}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: 16,
                        padding: '24px 0',
                        borderBottom: '1px solid var(--border)',
                        textDecoration: 'none',
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono), monospace' }}>
                            <Calendar style={{ width: 12, height: 12 }} />
                            {formatDate(post.date)}
                          </span>
                          <span style={{
                            fontSize: 11,
                            fontWeight: 500,
                            padding: '3px 10px',
                            borderRadius: 20,
                            background: categoryStyle(post.category).bg,
                            color: categoryStyle(post.category).color,
                            fontFamily: 'var(--font-mono), monospace',
                            letterSpacing: '0.03em',
                          }}>
                            {post.category}
                          </span>
                        </div>
                        <h2 style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.6, transition: 'color 0.2s' }}>
                          {post.title}
                        </h2>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 16, color: 'var(--accent)', flexShrink: 0, marginTop: 4 }}>→</span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <ScrollReveal>
                <div style={{ textAlign: 'center', padding: '80px 0' }}>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)' }}>現在、お知らせはありません。</p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
