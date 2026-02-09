import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ArrowLeft, ArrowRight, MapPin, Clock, Building2, CheckCircle2, Star } from 'lucide-react'

interface Props {
  params: { id: string }
}

export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = await prisma.job.findFirst({
    where: { slug: params.id, published: true },
  })
  if (!job) return {}

  return {
    title: `${job.title} | 採用情報`,
    description: job.description.substring(0, 160),
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-200 pb-8">
      <h2 className="heading-3 text-primary-800 mb-4">{title}</h2>
      {children}
    </div>
  )
}

export default async function RecruitDetailPage({ params }: Props) {
  const job = await prisma.job.findFirst({
    where: { slug: params.id, published: true },
  })

  if (!job) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="section-container">
          <Link
            href="/recruit/"
            className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            採用情報に戻る
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Building2 className="w-4 h-4" />{job.department}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-8">

            {/* 仕事内容 */}
            <Section title="仕事内容">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{job.description}</p>
            </Section>

            {/* 対象となる方 */}
            {(job.targetAudience || job.requirements.length > 0 || job.preferred.length > 0) && (
              <Section title="対象となる方">
                {job.targetAudience && (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-4">{job.targetAudience}</p>
                )}
                {job.requirements.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-2">必須要件</h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />{req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {job.preferred.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-2">歓迎要件</h3>
                    <ul className="space-y-2">
                      {job.preferred.map((pref, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <Star className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />{pref}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Section>
            )}

            {/* 勤務地 */}
            {job.locationDetail && (
              <Section title="勤務地">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{job.locationDetail}</p>
              </Section>
            )}

            {/* 勤務時間 */}
            {job.workHours && (
              <Section title="勤務時間">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{job.workHours}</p>
              </Section>
            )}

            {/* 雇用形態 */}
            {job.employmentDetail && (
              <Section title="雇用形態">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{job.employmentDetail}</p>
              </Section>
            )}

            {/* 給与 */}
            {job.salary && (
              <Section title="給与">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{job.salary}</p>
              </Section>
            )}

            {/* 待遇・福利厚生 */}
            {(job.welfare || job.benefits.length > 0) && (
              <Section title="待遇・福利厚生">
                {job.welfare && (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-4">{job.welfare}</p>
                )}
                {job.benefits.length > 0 && (
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />{benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </Section>
            )}

            {/* 休日・休暇 */}
            {job.holidays && (
              <Section title="休日・休暇">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{job.holidays}</p>
              </Section>
            )}

            {/* CTA */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="heading-3 text-primary-800 mb-4">この職種に応募する</h3>
              <p className="text-gray-600 mb-6">ご興味をお持ちの方は、お気軽にお問い合わせください。</p>
              <Link href="/contact/" className="btn-primary">
                お問い合わせ<ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <Link href="/recruit/" className="inline-flex items-center text-primary-800 hover:text-accent-500 font-medium transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" />採用情報に戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
