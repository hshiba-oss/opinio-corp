import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社Opinioのプライバシーポリシーについてご確認いただけます。',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-800 text-white py-20 md:py-28">
        <div className="section-container">
          <h1 className="heading-1">プライバシーポリシー</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <p className="lead text-gray-600">
              株式会社Opinio（以下「当社」といいます）は、個人情報の保護に関する法令等を遵守するとともに、
              以下のプライバシーポリシーに従い、適切な取扱い及び保護に努めます。
            </p>

            <h2 className="heading-3 text-primary-800 mt-10 mb-4">1. 個人情報の定義</h2>
            <p className="text-gray-700 leading-relaxed">
              本プライバシーポリシーにおいて、個人情報とは、個人情報保護法に規定される「個人情報」を指し、
              生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、
              メールアドレスその他の記述等により特定の個人を識別できる情報を指します。
            </p>

            <h2 className="heading-3 text-primary-800 mt-10 mb-4">2. 個人情報の収集方法</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、お客様がサービスをご利用される際に、氏名、メールアドレス、電話番号等の個人情報を
              お伺いすることがあります。
            </p>

            <h2 className="heading-3 text-primary-800 mt-10 mb-4">3. 個人情報の利用目的</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、収集した個人情報を以下の目的で利用いたします。
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>当社サービスの提供・運営のため</li>
              <li>お客様からのお問い合わせに対応するため</li>
              <li>当社サービスに関するご案内をお送りするため</li>
              <li>利用規約に違反した方や、不正・不当な目的でサービスを利用しようとする方の特定をし、ご利用をお断りするため</li>
              <li>上記の利用目的に付随する目的</li>
            </ul>

            <h2 className="heading-3 text-primary-800 mt-10 mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、法令に基づく場合を除き、お客様の同意を得ることなく、第三者に個人情報を提供することはありません。
            </p>

            <h2 className="heading-3 text-primary-800 mt-10 mb-4">5. 個人情報の開示・訂正・削除</h2>
            <p className="text-gray-700 leading-relaxed">
              お客様から個人情報の開示・訂正・削除を求められた場合には、ご本人であることを確認した上で、
              遅滞なく対応いたします。
            </p>

            <h2 className="heading-3 text-primary-800 mt-10 mb-4">6. プライバシーポリシーの変更</h2>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、
              お客様に通知することなく、変更することができるものとします。
              当社が別途定める場合を除いて、変更後のプライバシーポリシーは、
              本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>

            <h2 className="heading-3 text-primary-800 mt-10 mb-4">7. お問い合わせ窓口</h2>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーに関するお問い合わせは、下記までお願いいたします。
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4">
              <p className="text-gray-700">
                <strong>株式会社Opinio</strong>
                <br />
                〒107-0052 東京都港区赤坂2丁目21番4号
                <br />
                メール：info@opinio.co.jp
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-10">
              制定日：2023年9月1日
              <br />
              最終改定日：2025年1月1日
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
