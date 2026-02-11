import { Metadata } from 'next'
import { Briefcase, Code, Users, FileText, MessageSquare, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: '事業内容',
  description: 'Opinioのキャリアコンサルティング事業とHR Tech SaaS事業についてご紹介します。',
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
  const consultingLogos = await prisma.logo.findMany({
    where: { published: true, category: 'consulting' },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
  })

  const saasLogos = await prisma.logo.findMany({
    where: { published: true, category: 'saas' },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
  })

  return (
    <>
      <PageHeader subtitle="SERVICE" title="事業内容" />

      {/* Intro */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-primary-800 mb-6">
              コンサルティングで得た知見を
              <br />
              プロダクトに還元する
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Opinioは、キャリアコンサルティング事業とHR Tech SaaS事業の2つの柱で事業を展開しています。
              現場で得たリアルな知見をテクノロジーに落とし込み、
              人と組織の課題を本質的に解決するサービスを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section id="consulting" className="section-padding bg-gray-50 scroll-mt-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-800 text-white mb-6">
                <Briefcase className="w-8 h-8" />
              </div>
              <p className="text-accent-500 font-medium mb-2">CONSULTING</p>
              <h2 className="heading-2 text-primary-800 mb-6">
                キャリアコンサルティング事業
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                転職支援とキャリアコンサルティングを通じて、
                求職者と企業の双方にとって「正直で信頼できる選択」を支える仕組みを構築しています。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-800">転職支援</h4>
                    <p className="text-sm text-gray-600">SaaS業界を中心に、キャリアアップを目指す方の転職をサポート</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-800">キャリアコンサルティング</h4>
                    <p className="text-sm text-gray-600">国家資格を持つコンサルタントによる、中長期的なキャリア設計支援</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-800">企業向け採用支援</h4>
                    <p className="text-sm text-gray-600">採用戦略の策定から実行まで、一気通貫でサポート</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact/" className="btn-secondary">
                相談する
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl aspect-square flex items-center justify-center">
                <Briefcase className="w-32 h-32 text-primary-300" />
              </div>
            </div>
          </div>

          {/* Consulting Logos */}
          {consultingLogos.length > 0 && (
            <div className="mt-16">
              <h3 className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
                導入企業実績
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {consultingLogos.map((logo) => (
                  <div
                    key={logo.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.imageUrl}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SaaS */}
      <section id="saas" className="section-padding scroll-mt-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-500 text-white mb-6">
              <Code className="w-8 h-8" />
            </div>
            <p className="text-accent-500 font-medium mb-2">HR TECH SAAS</p>
            <h2 className="heading-2 text-primary-800 mb-6">
              HR Tech SaaS事業
            </h2>
            <p className="text-gray-600 leading-relaxed">
              採用管理（ATS）を中核に、業務領域ごとに責任を分けたアプリ群で構成される
              HR Techサービスを開発・提供しています。
              各アプリは疎結合で、将来的な追加・分離を前提とした設計です。
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {saasProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-800">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    product.status === '提供中'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>

          {/* SaaS Logos */}
          {saasLogos.length > 0 && (
            <div className="mt-16">
              <h3 className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
                導入企業実績
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {saasLogos.map((logo) => (
                  <div
                    key={logo.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.imageUrl}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="heading-2 mb-4">お気軽にお問い合わせください</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              サービスに関するご質問、導入のご相談など、まずはお気軽にご連絡ください。
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
