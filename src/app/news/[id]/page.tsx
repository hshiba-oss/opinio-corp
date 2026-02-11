import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Calendar, ArrowLeft } from 'lucide-react'

interface Props {
  params: { id: string }
}

export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.newsPost.findFirst({
    where: { slug: params.id, published: true },
  })
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(date: Date) {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '.')
}

export default async function NewsDetailPage({ params }: Props) {
  const post = await prisma.newsPost.findFirst({
    where: { slug: params.id, published: true },
  })

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden bg-primary-800 py-16 md:py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/opiniocorpherobackground.png')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(45,42,91,0.5) 0%, rgba(45,42,91,0.2) 40%, transparent 60%)' }} />
        <div className="section-container relative">
          <Link
            href="/news/"
            className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            お知らせ一覧に戻る
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1 text-sm text-gray-300">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded ${
              post.category === 'プレスリリース'
                ? 'bg-accent-500 text-white'
                : post.category === '採用'
                ? 'bg-green-500 text-white'
                : 'bg-white/20 text-white'
            }`}>
              {post.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-gray max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-gray-700 whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/news/"
                className="inline-flex items-center text-primary-800 hover:text-accent-500 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                お知らせ一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
