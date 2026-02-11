'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const people = [
  { src: '/images/person1.png', alt: '求職者1' },
  { src: '/images/person2.png', alt: '求職者2' },
  { src: '/images/person3.png', alt: '求職者3' },
  { src: '/images/person4.png', alt: '求職者4' },
  { src: '/images/ceo1.png', alt: '代表取締役 柴 久人' },
]

export default function DiamondCarousel() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <style jsx global>{`
        @keyframes diamondFloat1 {
          0% { transform: rotate(45deg) translateX(0px) translateY(0px); }
          25% { transform: rotate(45deg) translateX(15px) translateY(-10px); }
          50% { transform: rotate(45deg) translateX(0px) translateY(-5px); }
          75% { transform: rotate(45deg) translateX(-15px) translateY(-10px); }
          100% { transform: rotate(45deg) translateX(0px) translateY(0px); }
        }
        @keyframes diamondFloat2 {
          0% { transform: rotate(45deg) translateX(0px) translateY(0px); }
          25% { transform: rotate(45deg) translateX(-12px) translateY(8px); }
          50% { transform: rotate(45deg) translateX(5px) translateY(15px); }
          75% { transform: rotate(45deg) translateX(12px) translateY(5px); }
          100% { transform: rotate(45deg) translateX(0px) translateY(0px); }
        }
        @keyframes diamondFloat3 {
          0% { transform: rotate(45deg) translateX(0px) translateY(0px); }
          33% { transform: rotate(45deg) translateX(18px) translateY(12px); }
          66% { transform: rotate(45deg) translateX(-10px) translateY(-8px); }
          100% { transform: rotate(45deg) translateX(0px) translateY(0px); }
        }
        @keyframes diamondSpin {
          0% { transform: rotate(45deg); }
          25% { transform: rotate(50deg); }
          50% { transform: rotate(45deg); }
          75% { transform: rotate(40deg); }
          100% { transform: rotate(45deg); }
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diamond 1 - Large, right side, person1 */}
        <div
          className="absolute w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl"
          style={{
            top: '10%',
            right: '5%',
            animation: 'diamondFloat1 12s ease-in-out infinite',
            transform: 'rotate(45deg)',
          }}
        >
          <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
            <Image src={people[0].src} alt={people[0].alt} fill className="object-cover" sizes="256px" />
          </div>
        </div>

        {/* Diamond 2 - Medium, center-right, person2 */}
        <div
          className="absolute w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-4 border-accent-500/30 shadow-xl"
          style={{
            top: '50%',
            right: '22%',
            animation: 'diamondFloat2 15s ease-in-out infinite',
            transform: 'rotate(45deg)',
          }}
        >
          <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
            <Image src={people[1].src} alt={people[1].alt} fill className="object-cover" sizes="176px" />
          </div>
        </div>

        {/* Diamond 3 - Small, upper center, person3 */}
        <div
          className="absolute w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 border-white/15 shadow-lg"
          style={{
            top: '5%',
            right: '30%',
            animation: 'diamondFloat3 10s ease-in-out infinite',
            transform: 'rotate(45deg)',
          }}
        >
          <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
            <Image src={people[2].src} alt={people[2].alt} fill className="object-cover" sizes="144px" />
          </div>
        </div>

        {/* Diamond 4 - Medium, lower right, person4 */}
        <div
          className="absolute w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl"
          style={{
            bottom: '5%',
            right: '12%',
            animation: 'diamondFloat1 14s ease-in-out infinite 2s',
            transform: 'rotate(45deg)',
          }}
        >
          <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
            <Image src={people[3].src} alt={people[3].alt} fill className="object-cover" sizes="160px" />
          </div>
        </div>

        {/* Diamond 5 - Small accent, CEO */}
        <div
          className="absolute w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-4 border-accent-500/40 shadow-lg"
          style={{
            bottom: '25%',
            right: '35%',
            animation: 'diamondFloat2 11s ease-in-out infinite 1s',
            transform: 'rotate(45deg)',
          }}
        >
          <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
            <Image src={people[4].src} alt={people[4].alt} fill className="object-cover" sizes="128px" />
          </div>
        </div>

        {/* Decorative empty diamonds */}
        <div
          className="absolute w-20 h-20 md:w-28 md:h-28 rounded-xl border-2 border-white/10"
          style={{
            top: '35%',
            right: '45%',
            animation: 'diamondSpin 20s ease-in-out infinite',
            transform: 'rotate(45deg)',
          }}
        />
        <div
          className="absolute w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 border-accent-500/20"
          style={{
            top: '15%',
            right: '48%',
            animation: 'diamondSpin 16s ease-in-out infinite 3s',
            transform: 'rotate(45deg)',
          }}
        />
      </div>
    </>
  )
}
