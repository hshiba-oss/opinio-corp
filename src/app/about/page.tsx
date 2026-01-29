import { Metadata } from 'next'
import { Target, Lightbulb, Users, Award, Building2, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '会社情報',
  description: '株式会社Opinioの会社概要、ミッション・ビジョン・バリューをご紹介します。',
}

const companyInfo = [
  { label: '会社名', value: '株式会社Opinio' },
  { label: '代表者', value: '代表取締役 柴 久人' },
  { label: '設立', value: '2023年9月' },
  { label: '資本金', value: '500万円' },
  { label: '事業内容', value: 'エージェント事業\nHR Tech（HRテック）サービスの開発・販売' },
  { label: '有料職業紹介事業免許', value: '13-ユ-316441' },
  { label: '保有資格', value: 'キャリアコンサルタント（国家資格）\n一般社団法人プロティアン・キャリア協会 プロティアン基礎検定' },
  { label: '本社所在地', value: '〒107-0052\n東京都港区赤坂2丁目21番4号' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-800 text-white py-20 md:py-28">
        <div className="section-container">
          <p className="text-accent-400 font-medium mb-4">ABOUT US</p>
          <h1 className="heading-1">会社情報</h1>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-medium mb-2">CULTURE</p>
            <h2 className="heading-2 text-primary-800">Opinioのカルチャー</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-10 border border-primary-100">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-800 text-white mb-6">
                <Target className="w-7 h-7" />
              </div>
              <p className="text-sm font-bold text-primary-800 tracking-wider mb-3">VISION</p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4 leading-tight">
                すべての選択肢に、
                <br />
                納得のいくストーリーを。
              </h3>
              <p className="text-gray-600 leading-relaxed">
                キャリアの選択に「正解」はありません。しかし、納得できる選択はあります。
                私たちは、一人ひとりが自分らしいキャリアを描けるよう、
                透明で信頼できる情報と仕組みを提供します。
                すべての人が、自分の選択に自信を持てる社会を目指しています。
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 md:p-10 border border-accent-100">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-500 text-white mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <p className="text-sm font-bold text-accent-600 tracking-wider mb-3">MISSION</p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4 leading-tight">
                AI時代の
                <br />
                キャリアインフラになる。
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AIが仕事の在り方を根本から変えていく時代。
                私たちは、人と組織をつなぐ「インフラ」として、
                信頼性の高い情報基盤とテクノロジーを提供します。
                変化の時代だからこそ、揺るがない基盤が必要です。
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <p className="text-sm font-bold text-accent-400 tracking-wider mb-2">VALUE</p>
              <h3 className="text-2xl md:text-3xl font-bold">私たちの価値観</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">The Dream Team</h4>
                <p className="text-accent-400 font-medium mb-3">最高のチームを作る</p>
                <p className="text-sm text-gray-300">
                  個人の力を超えた成果は、チームでしか生まれない。
                  互いを高め合い、最高のチームを目指します。
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Truth First</h4>
                <p className="text-accent-400 font-medium mb-3">真実を最優先に</p>
                <p className="text-sm text-gray-300">
                  都合の良い情報ではなく、真実を伝える。
                  それが長期的な信頼につながると信じています。
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Think Big</h4>
                <p className="text-accent-400 font-medium mb-3">大きく考える</p>
                <p className="text-sm text-gray-300">
                  小さな改善に留まらず、大きなインパクトを目指す。
                  常に本質的な課題解決を追求します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-medium mb-2">COMPANY</p>
            <h2 className="heading-2 text-primary-800">会社概要</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden max-w-3xl mx-auto">
            <dl className="divide-y divide-gray-100">
              {companyInfo.map((item) => (
                <div key={item.label} className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500 flex items-start gap-2">
                    {item.label === '本社所在地' && <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    {item.label === '会社名' && <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    <span>{item.label}</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-line">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
