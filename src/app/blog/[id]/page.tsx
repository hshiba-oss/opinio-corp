import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Calendar, ArrowLeft, User } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

interface Props {
  params: { id: string }
}

export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let post: { title: string; excerpt: string | null } | null = null
  try {
    post = await prisma.blogPost.findFirst({ where: { slug: params.id, published: true } })
  } catch { /* ignore */ }
  if (!post) return {}

  const desc = post.excerpt ?? post.title
  return {
    title: post.title,
    description: desc,
    openGraph: {
      title: `${post.title} | 株式会社Opinio`,
      description: desc,
      url: `https://www.opinio.co.jp/blog/${params.id}/`,
      images: [{ url: 'https://www.opinio.co.jp/images/ogp.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | 株式会社Opinio`,
      description: desc,
      images: ['https://www.opinio.co.jp/images/ogp.png'],
    },
  }
}

function formatDate(date: Date) {
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')
}

const categoryStyle = (cat: string): { bg: string; color: string } => {
  if (cat === 'コラム') return { bg: 'var(--accent-soft)', color: 'var(--accent)' }
  if (cat === 'ナレッジ') return { bg: 'rgba(5,150,105,0.1)', color: '#059669' }
  if (cat === 'インタビュー') return { bg: 'rgba(124,58,237,0.1)', color: '#7C3AED' }
  return { bg: 'var(--border)', color: 'var(--text-muted)' }
}

export default async function BlogDetailPage({ params }: Props) {
  let post: Awaited<ReturnType<typeof prisma.blogPost.findFirst>> = null
  try {
    post = await prisma.blogPost.findFirst({ where: { slug: params.id, published: true } })
  } catch {
    notFound()
  }
  if (!post) notFound()

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: 'https://www.opinio.co.jp' },
        { name: 'キャリアコラム', url: 'https://www.opinio.co.jp/blog/' },
        { name: post.title, url: `https://www.opinio.co.jp/blog/${params.id}/` },
      ]} />

      {/* Page Header */}
      <section style={{ background: 'var(--bg)', paddingTop: 80, paddingBottom: 64, position: 'relative', borderBottom: '1px solid var(--border)' }}>
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="container-v3" style={{ position: 'relative' }}>
          <Link
            href="/blog/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', marginBottom: 24, transition: 'color 0.2s' }}
          >
            <ArrowLeft style={{ width: 14, height: 14 }} />
            コラム一覧に戻る
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
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
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 500, lineHeight: 1.35, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            {post.title}
          </h1>
          {post.author && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>
              <User style={{ width: 14, height: 14 }} />
              {post.author}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-v3">
        <div className="container-v3">
          <div style={{ maxWidth: 760 }}>
            <ScrollReveal>
              <div style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} style={{ fontFamily: 'var(--font-display), Georgia, serif', fontWeight: 500, fontSize: 22, color: 'var(--text-primary)', marginTop: 40, marginBottom: 16, letterSpacing: '-0.01em' }}>
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} style={{ fontFamily: 'var(--font-display), Georgia, serif', fontWeight: 500, fontSize: 18, color: 'var(--text-primary)', marginTop: 28, marginBottom: 12 }}>
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  return (
                    <p key={index} style={{ marginBottom: 20, whiteSpace: 'pre-wrap' }}>{paragraph}</p>
                  )
                })}
              </div>
            </ScrollReveal>

            {post.tags.length > 0 && (
              <ScrollReveal>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 12, color: 'var(--text-muted)', background: 'var(--accent-soft)', padding: '4px 12px', borderRadius: 6, fontFamily: 'var(--font-mono), monospace' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            )}

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
              <Link
                href="/blog/"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                <ArrowLeft style={{ width: 14, height: 14 }} />
                コラム一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
