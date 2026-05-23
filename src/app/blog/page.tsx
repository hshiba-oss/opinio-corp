import { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Calendar } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'キャリアコラム',
  description: 'IT/SaaS業界のキャリア・採用に関するナレッジやコラムをお届けします。',
  openGraph: {
    title: 'キャリアコラム | 株式会社Opinio',
    description: 'IT/SaaS業界のキャリア・採用に関するナレッジやコラムをお届けします。',
    url: 'https://www.opinio.co.jp/blog/',
    images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'キャリアコラム | 株式会社Opinio',
    description: 'IT/SaaS業界のキャリア・採用に関するナレッジやコラムをお届けします。',
    images: ['https://www.opinio.co.jp/images/ogp.png'],
  },
}

export const revalidate = 60

function formatDate(date: Date) {
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')
}

const categoryStyle = (cat: string): { bg: string; color: string } => {
  if (cat === 'コラム') return { bg: 'var(--accent-soft)', color: 'var(--accent)' }
  if (cat === 'ナレッジ') return { bg: 'rgba(5,150,105,0.1)', color: '#059669' }
  if (cat === 'インタビュー') return { bg: 'rgba(124,58,237,0.1)', color: '#7C3AED' }
  return { bg: 'var(--border)', color: 'var(--text-muted)' }
}

export default async function BlogPage() {
  type PostRow = { id: string; slug: string; title: string; date: Date; category: string; excerpt: string; tags: string[] }
  let posts: PostRow[] = []
  try {
    posts = await prisma.blogPost.findMany({
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
        { name: 'キャリアコラム', url: 'https://www.opinio.co.jp/blog/' },
      ]} />

      <PageHeader subtitle="COLUMN" title="キャリアコラム" description="IT/SaaS業界のキャリア・採用に関するナレッジをお届けします" />

      <section className="section-v3">
        <div className="container-v3">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6" style={{ maxWidth: 900 }}>
              {posts.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 60}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      padding: 28,
                      textDecoration: 'none',
                      height: '100%',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono), monospace', letterSpacing: '0.04em' }}>
                        <Calendar style={{ width: 11, height: 11 }} />
                        {formatDate(post.date)}
                      </span>
                      <span style={{
                        fontSize: 10,
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
                    <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontWeight: 500, fontSize: 17, lineHeight: 1.5, color: 'var(--text-primary)', marginBottom: 10, letterSpacing: '-0.01em', flex: 1 }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.75, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: post.tags.length > 0 ? 14 : 0 }}>
                        {post.excerpt}
                      </p>
                    )}
                    {post.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                        {post.tags.map((tag) => (
                          <span key={tag} style={{ fontSize: 11, color: 'var(--text-muted)', background: 'var(--accent-soft)', padding: '2px 8px', borderRadius: 4, fontFamily: 'var(--font-mono), monospace' }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)' }}>現在、記事はありません。</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  )
}
