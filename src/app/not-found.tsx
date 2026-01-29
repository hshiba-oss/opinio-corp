import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center justify-center">
      <div className="section-container text-center">
        <p className="text-6xl md:text-8xl font-bold text-primary-200 mb-4">404</p>
        <h1 className="heading-2 text-primary-800 mb-4">ページが見つかりません</h1>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link href="/" className="btn-primary">
          <Home className="mr-2 w-4 h-4" />
          トップページへ
        </Link>
      </div>
    </section>
  )
}
