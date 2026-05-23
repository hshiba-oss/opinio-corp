'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, delay = 0, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => el.classList.add('scroll-revealed'), delay)
          observer.unobserve(el)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`scroll-reveal${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}
