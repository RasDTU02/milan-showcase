import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateOnScroll from '@/components/common/AnimateOnScroll'
import SectionLabel from '@/components/common/SectionLabel'

interface District {
  name: string
  tagline: string
  description: string
  image: string
  tag: string
}

const districts: District[] = [
  {
    name: 'Brera',
    tagline: 'The Artistic Soul',
    description:
      'Cobblestone streets lined with galleries, boutiques, and sunlit cafés. Brera is Milan\'s bohemian quarter — a haven for artists, intellectuals, and lovers of beauty.',
    image: 'https://images.unsplash.com/photo-1624604268681-cdd842aeee41?w=800&q=80',
    tag: 'Art & Culture',
  },
  {
    name: 'Navigli',
    tagline: 'Canals & Aperitivo',
    description:
      'Ancient waterways transformed into a vibrant nightlife and dining destination. As the sun sets, Navigli comes alive with the ritual of aperitivo.',
    image: 'https://images.unsplash.com/photo-1668784290849-aa5acd24edcd?w=800&q=80',
    tag: 'Nightlife',
  },
  {
    name: 'Porta Nuova',
    tagline: 'The Modern Skyline',
    description:
      "Milan's bold architectural statement. The Bosco Verticale towers, sleek glass facades, and the Unicredit Tower define Europe's most ambitious urban renewal.",
    image: 'https://images.unsplash.com/photo-1530284610319-31ee7c55378e?w=800&q=80',
    tag: 'Architecture',
  },
  {
    name: 'Duomo',
    tagline: 'The Historic Heart',
    description:
      'At the center of it all stands the magnificent Gothic cathedral. The Galleria Vittorio Emanuele II, Via Montenapoleone — history and luxury in every direction.',
    image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=80',
    tag: 'Historic',
  },
]

interface DistrictCardProps {
  district: District
  delay: number
}

function DistrictCard({ district, delay }: DistrictCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={delay}>
      <div
        className="relative rounded-2xl overflow-hidden h-80 md:h-96 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background image with scale on hover */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${district.image})` }}
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />

        {/* Content anchored to bottom */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1">
          {/* Tag badge */}
          <span className="self-start text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-3 py-1 mb-1">
            {district.tag}
          </span>

          {/* Name */}
          <h3 className="text-2xl font-bold text-[#F5F0E8] leading-tight">
            {district.name}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-[#8A8580]">{district.tagline}</p>

          {/* Description — slides up on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.p
                key="description"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-sm text-[#F5F0E8]/70 leading-relaxed mt-2"
              >
                {district.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export default function Districts() {
  return (
    <section id="districts" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="mb-14">
            <SectionLabel>EXPLORE</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight tracking-tight">
              The Neighborhoods of Milan
            </h2>
          </div>
        </AnimateOnScroll>

        {/* District cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {districts.map((district, index) => (
            <DistrictCard
              key={district.name}
              district={district}
              delay={0.1 + index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
