import { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ブログ',
  description: '株式会社Opinioのブログ。キャリア・HR Tech・採用に関するナレッジやコラムをお届けします。',
}

export const revalidate = 60

function formatDate(date: Date) {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '.')
}

const categoryColor: Record<string, string> = {
  'コラム': 'bg-primary-100 text-primary-800',
  'ナレッジ': 'bg-accent-100 text-accent-700',
  'インタビュー': 'bg-teal-100 text-teal-700',
  'お役立ち': 'bg-gray-100 text-gray-700',
}

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { date: 'desc' },
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-800 text-white py-20 md:py-28">
        <div className="section-container">
          <p className="text-accent-400 font-medium mb-4">BLOG</p>
          <h1 className="heading-1">ブログ</h1>
          <p className="text-gray-300 mt-4">
            キャリア・HR Tech・採用に関するナレッジやコラムをお届けします
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="section-padding">
        <div className="section-container">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}/`}
                  className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${categoryColor[post.category] || 'bg-gray-100 text-gray-700'}`}>
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-primary-800 group-hover:text-accent-500 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">記事はまだありません。</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
