import { Metadata } from 'next'
import Link from 'next/link'
import { publishedJobs } from '@/content/recruit/jobs'
import { MapPin, Clock, Building2, ArrowRight, Users, Lightbulb, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: '採用情報',
  description: '株式会社Opinioの採用情報です。一緒にAI時代のキャリアインフラを創りませんか。',
}

export default function RecruitPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-800 text-white py-20 md:py-28">
        <div className="section-container">
          <p className="text-accent-400 font-medium mb-4">RECRUIT</p>
          <h1 className="heading-1 mb-4">採用情報</h1>
          <p className="text-xl text-gray-300">
            一緒にAI時代のキャリアインフラを創りませんか
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-primary-800 mb-6">Opinioで働く</h2>
            <p className="text-gray-600 leading-relaxed">
              私たちは「AI時代のキャリアインフラになる」というミッションのもと、
              HR領域の課題解決に取り組んでいます。
              スタートアップならではのスピード感と、確かな専門性を持つチームで、
              大きなインパクトを生み出す仕事に挑戦できます。
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-800 mb-4">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary-800 mb-2">The Dream Team</h3>
              <p className="text-sm text-gray-600">
                少数精鋭のチームで、互いを高め合いながら成長できる環境
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary-800 mb-2">Truth First</h3>
              <p className="text-sm text-gray-600">
                オープンなコミュニケーションと、率直なフィードバック文化
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-800 mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary-800 mb-2">Think Big</h3>
              <p className="text-sm text-gray-600">
                大きな目標に向かって、裁量を持ってチャレンジできる環境
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-medium mb-2">OPEN POSITIONS</p>
            <h2 className="heading-2 text-primary-800">募集中の職種</h2>
          </div>

          {publishedJobs.length > 0 ? (
            <div className="space-y-4 max-w-3xl mx-auto">
              {publishedJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/recruit/${job.id}/`}
                  className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-primary-800 group-hover:text-accent-500 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-500 transition-colors flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 text-gray-400 mb-4">
                <Users className="w-8 h-8" />
              </div>
              <p className="text-gray-600 mb-6">
                現在、募集中の求人はありません。
              </p>
              <p className="text-sm text-gray-500">
                カジュアル面談は随時受け付けています。
                <br />
                ご興味のある方はお問い合わせください。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="heading-2 mb-4">カジュアル面談受付中</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              募集職種に関わらず、Opinioに興味をお持ちの方との面談を随時受け付けています。
              まずはお気軽にお問い合わせください。
            </p>
            <Link href="/contact/" className="btn-primary">
              お問い合わせ
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
