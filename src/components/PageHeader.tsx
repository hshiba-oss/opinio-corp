type PageHeaderProps = {
  subtitle?: string
  title: string
  description?: string
}

export default function PageHeader({ subtitle, title, description }: PageHeaderProps) {
  return (
    <section
      style={{
        background: 'var(--bg)',
        paddingTop: 80,
        paddingBottom: 64,
        position: 'relative',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="hero-dot-grid" aria-hidden="true" />
      <div className="container-v3" style={{ position: 'relative' }}>
        {subtitle && <p className="section-eyebrow">{subtitle}</p>}
        <h1
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}
        >
          {title}
        </h1>
        {description && (
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 12, lineHeight: 1.7 }}>
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
