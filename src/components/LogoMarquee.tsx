'use client'

const companies = [
  'Sansan', 'HENNGE', 'Loglass', 'Speee', 'Stockmark', 'LAPRAS', 'TerraDrone', 'ROUTE06',
  'CADDi', 'SmartHR', 'freee', 'CrowdWorks', 'RevComm', 'Money Forward', 'Yappli', 'Layer X',
  'Notion JP', '10X', 'UPWARD', 'Voicy', 'Helpfeel', 'Findy', 'Tebiki', 'PR TIMES', 'Newji',
]

export default function LogoMarquee() {
  const doubled = [...companies, ...companies]

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Fade edges */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: 'linear-gradient(to right, var(--bg-card), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: 'linear-gradient(to left, var(--bg-card), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Scrolling row */}
      <div
        style={{
          display: 'flex',
          width: 'fit-content',
          animation: 'marquee 38s linear infinite',
        }}
      >
        {doubled.map((name, i) => (
          <div
            key={i}
            style={{
              padding: '18px 36px',
              fontSize: 13,
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 500,
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap',
              borderRight: '1px solid var(--border)',
              transition: 'color 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
