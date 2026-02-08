import { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '株式会社Opinioからのお知らせ、プレスリリースをご覧いただけます。',
}

export const revalidate = 60

function formatDate(date: Date) {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '.')
}

export default async function NewsPage() {
  const posts = await prisma.newsPost.findMany({
    where: { published: true },
    orderBy: { date: 'desc' },
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-800 text-white py-20 md:py-28">
        <div className="section-container">
          <p className="text-accent-400 font-medium mb-4">NEWS</p>
          <h1 className="heading-1">お知らせ</h1>
        </div>
      </section>

      {/* News List */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {posts.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}/`}
                    className="block py-6 group hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                            post.category === 'プレスリリース'
                              ? 'bg-accent-100 text-accent-700'
                              : post.category === '採用'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-lg font-medium text-primary-800 group-hover:text-accent-500 transition-colors">
                          {post.title}
                        </h2>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-500 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">お知らせはありません。</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
