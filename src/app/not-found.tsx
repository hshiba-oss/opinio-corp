import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        position: 'relative',
      }}
    >
      <div className="hero-dot-grid" aria-hidden="true" />

      <div style={{ textAlign: 'center', position: 'relative' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 80,
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: 8,
            opacity: 0.15,
          }}
        >
          404
        </p>

        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11,
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 16,
            marginTop: -24,
          }}
        >
          PAGE NOT FOUND
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 500,
            color: 'var(--text-primary)',
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}
        >
          ページが見つかりません
        </h1>

        <p
          style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 420,
            margin: '0 auto 40px',
          }}
        >
          お探しのページは移動または削除された可能性があります。
          <br />
          URLをご確認いただくか、トップページからご覧ください。
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-v3 btn-v3-primary btn-v3-large">
            トップページへ →
          </Link>
          <Link href="/contact/" className="btn-v3 btn-v3-secondary">
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  )
}
