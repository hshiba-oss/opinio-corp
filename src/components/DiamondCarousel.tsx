import Image from 'next/image'

const people = [
  { src: '/images/person1.png', alt: '求職者1' },
  { src: '/images/person2.png', alt: '求職者2' },
  { src: '/images/person3.png', alt: '求職者3' },
  { src: '/images/person4.png', alt: '求職者4' },
]

export default function DiamondCarousel() {
  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
      {/* Diamond 1 - person1, upper area */}
      <div
        className="absolute w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl"
        style={{
          top: '8%',
          right: '38%',
          transform: 'rotate(45deg)',
        }}
      >
        <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
          <Image src={people[0].src} alt={people[0].alt} fill className="object-cover" sizes="160px" />
        </div>
      </div>

      {/* Diamond 2 - person2, lower-left */}
      <div
        className="absolute w-24 h-24 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 border-accent-500/30 shadow-xl"
        style={{
          bottom: '10%',
          right: '42%',
          transform: 'rotate(45deg)',
        }}
      >
        <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
          <Image src={people[1].src} alt={people[1].alt} fill className="object-cover" sizes="144px" />
        </div>
      </div>

      {/* Diamond 3 - person3, upper-left */}
      <div
        className="absolute w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden border-4 border-white/15 shadow-lg"
        style={{
          top: '15%',
          right: '55%',
          transform: 'rotate(45deg)',
        }}
      >
        <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
          <Image src={people[2].src} alt={people[2].alt} fill className="object-cover" sizes="112px" />
        </div>
      </div>

      {/* Diamond 4 - person4, lower-right */}
      <div
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-4 border-white/10 shadow-xl"
        style={{
          bottom: '15%',
          right: '28%',
          transform: 'rotate(45deg)',
        }}
      >
        <div style={{ transform: 'rotate(-45deg) scale(1.5)', width: '100%', height: '100%' }}>
          <Image src={people[3].src} alt={people[3].alt} fill className="object-cover" sizes="128px" />
        </div>
      </div>

      {/* Decorative empty diamond */}
      <div
        className="absolute w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 border-white/10"
        style={{
          top: '45%',
          right: '50%',
          transform: 'rotate(45deg)',
        }}
      />
    </div>
  )
}
