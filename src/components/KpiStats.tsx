'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 120, suffix: '社+', label: '支援企業数', sub: '創業以来' },
  { value: 200, suffix: '名+', label: '転職支援実績', sub: 'IT/SaaS業界' },
  { value: 0, suffix: '件', label: '早期離職数', sub: '創業以来' },
]

function CountUp({ target, duration = 1400, active }: { target: number; duration?: number; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    if (target === 0) { setCount(0); return }

    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])

  return <>{count}</>
}

export default function KpiStats() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setActive(true); observer.unobserve(el) }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ background: 'var(--bg-dark)', padding: '64px 0' }}>
      <div className="container-v3">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '40px 16px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--accent-light)',
                  lineHeight: 1,
                  marginBottom: 12,
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'center',
                  gap: 4,
                }}
              >
                <CountUp target={stat.value} active={active} />
                <span style={{ fontSize: '0.55em', fontStyle: 'normal', opacity: 0.9 }}>
                  {stat.suffix}
                </span>
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: 8,
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
