import { Metadata } from 'next'
import { Mail, Building2, Clock } from 'lucide-react'
import HubSpotForm from '@/components/HubSpotForm'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '株式会社Opinioへのお問い合わせはこちらから。サービスに関するご質問、採用に関するご相談など、お気軽にご連絡ください。',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-800 text-white py-20 md:py-28">
        <div className="section-container">
          <p className="text-accent-400 font-medium mb-4">CONTACT</p>
          <h1 className="heading-1 mb-4">お問い合わせ</h1>
          <p className="text-xl text-gray-300">
            お気軽にご連絡ください
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="heading-3 text-primary-800 mb-6">お問い合わせ先</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800 mb-1">会社所在地</h3>
                    <p className="text-sm text-gray-600">
                      〒107-0052
                      <br />
                      東京都港区赤坂2丁目21番4号
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800 mb-1">メールアドレス</h3>
                    <p className="text-sm text-gray-600">
                      <a
                        href="mailto:info@opinio.co.jp"
                        className="text-accent-500 hover:text-accent-600 transition-colors"
                      >
                        info@opinio.co.jp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800 mb-1">営業時間</h3>
                    <p className="text-sm text-gray-600">
                      平日 10:00 - 18:00
                      <br />
                      <span className="text-gray-500">（土日祝日休業）</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong className="text-primary-800">ご回答について</strong>
                  <br />
                  お問い合わせいただいた内容につきましては、
                  2営業日以内にご連絡いたします。
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <h2 className="heading-3 text-primary-800 mb-6">お問い合わせフォーム</h2>
                <HubSpotForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
