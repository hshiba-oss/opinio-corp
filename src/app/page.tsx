import Link from 'next/link'
import { ArrowRight, Users, Lightbulb, Target, Briefcase, Code } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="section-container section-padding relative">
          <div className="max-w-3xl">
            <p className="text-accent-400 font-medium mb-4 tracking-wide">
              AI時代のキャリアインフラ
            </p>
            <h1 className="heading-1 mb-6 leading-tight">
              すべての選択肢に、
              <br />
              <span className="text-accent-400">納得のいくストーリー</span>を。
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Opinioは、キャリアコンサルティングとHR Techの両輪で、
              <br className="hidden md:block" />
              人と組織のより良い出会いを実現します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/service/" className="btn-primary">
                事業内容を見る
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/contact/" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Value */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-medium mb-2">CULTURE</p>
            <h2 className="heading-2 text-primary-800">Opinioのカルチャー</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-accent-500 mb-2">VISION</p>
              <h3 className="heading-3 text-primary-800 mb-3">
                すべての選択肢に、
                <br />
                納得のいくストーリーを。
              </h3>
              <p className="text-gray-600 leading-relaxed">
                キャリアの選択に「正解」はありません。しかし、納得できる選択はあります。
                私たちは、一人ひとりが自分らしいキャリアを描けるよう支援します。
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-accent-500 mb-2">MISSION</p>
              <h3 className="heading-3 text-primary-800 mb-3">
                AI時代の
                <br />
                キャリアインフラになる。
              </h3>
              <p className="text-gray-600 leading-relaxed">
                テクノロジーが仕事の在り方を変えていく時代。
                私たちは、人と組織をつなぐインフラとして、透明で信頼できる仕組みを提供します。
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <p className="text-sm font-medium text-accent-400 mb-2">VALUE</p>
            <h3 className="heading-3 mb-8">私たちの価値観</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-2">The Dream Team</h4>
                <p className="text-sm text-gray-300">最高のチームを作る</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Truth First</h4>
                <p className="text-sm text-gray-300">真実を最優先に</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Think Big</h4>
                <p className="text-sm text-gray-300">大きく考える</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-medium mb-2">SERVICE</p>
            <h2 className="heading-2 text-primary-800">事業内容</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Career Consulting */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-800 mb-6 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="heading-3 text-primary-800 mb-3">
                キャリアコンサルティング事業
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                転職支援とキャリアコンサルティングを通じて、求職者と企業の双方にとって
                正直で信頼できる選択を支える仕組みを構築しています。
              </p>
              <Link
                href="/service/#consulting"
                className="inline-flex items-center text-primary-800 font-medium hover:text-accent-500 transition-colors"
              >
                詳しく見る
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* HR Tech SaaS */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-100 text-accent-600 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="heading-3 text-primary-800 mb-3">
                HR Tech SaaS事業
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                採用管理（ATS）を中核に、業務領域ごとに責任を分けたアプリ群で構成される
                HR Techサービスを開発・提供しています。
              </p>
              <Link
                href="/service/#saas"
                className="inline-flex items-center text-primary-800 font-medium hover:text-accent-500 transition-colors"
              >
                詳しく見る
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-400 font-medium mb-2">ABOUT US</p>
              <h2 className="heading-2 mb-6">
                テクノロジーで
                <br />
                「透明性」を届ける。
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                私たちは、HR領域における「情報の信頼性」に向き合い、
                求職者・企業の双方にとって正直で信頼できる選択を支える仕組みを構築しています。
                第三者の声とテクノロジーを融合したプロダクトで、人と組織のよりよい出会いを実現していきます。
              </p>
              <Link
                href="/about/"
                className="inline-flex items-center text-accent-400 font-medium hover:text-accent-300 transition-colors"
              >
                会社情報を見る
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-700/50 flex items-center justify-center">
                  <Users className="w-24 h-24 md:w-32 md:h-32 text-primary-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="heading-2 mb-4">お気軽にお問い合わせください</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              キャリアコンサルティングのご相談、HR Tech SaaSに関するお問い合わせなど、
              まずはお気軽にご連絡ください。
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
