import { motion } from 'framer-motion'
import { Sun, Plane, Building2, type LucideIcon } from 'lucide-react'
import AnimateOnScroll from '@/components/common/AnimateOnScroll'
import SectionLabel from '@/components/common/SectionLabel'

interface InfoItem {
  season: string
  desc: string
}

interface InfoCard {
  icon: LucideIcon
  title: string
  items: InfoItem[]
}

const INFO_CARDS: InfoCard[] = [
  {
    icon: Sun,
    title: 'Best Time to Visit',
    items: [
      {
        season: 'Spring (Apr–Jun)',
        desc: 'Mild weather, fashion week, blooming parks. Peak season.',
      },
      {
        season: 'Autumn (Sep–Oct)',
        desc: 'Golden light, second fashion week, harvest festivals.',
      },
      {
        season: 'Winter (Dec–Feb)',
        desc: 'Christmas markets, fewer crowds, the Scala season opens.',
      },
    ],
  },
  {
    icon: Plane,
    title: 'Getting There',
    items: [
      {
        season: 'Malpensa Airport (MXP)',
        desc: 'International hub, 50km from centre. Direct trains to Cadorna.',
      },
      {
        season: 'Linate Airport (LIN)',
        desc: 'City airport, 10km from centre. Metro line 4 direct.',
      },
      {
        season: 'Trenitalia / Italo',
        desc: 'High-speed trains from Rome (3h), Venice (2.5h), Florence (2h).',
      },
    ],
  },
  {
    icon: Building2,
    title: 'Where to Stay',
    items: [
      {
        season: 'Duomo District',
        desc: 'Most central. Steps from the cathedral and Galleria. Premium pricing.',
      },
      {
        season: 'Brera & Sempione',
        desc: 'Charming, walkable, artsy. Best for boutique hotels.',
      },
      {
        season: 'Navigli',
        desc: 'Vibrant nightlife area. Best for budget travellers and young visitors.',
      },
    ],
  },
]

export default function Visit() {
  return (
    <section id="visit" className="bg-[#111111] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── A. Info Cards ── */}
        <AnimateOnScroll direction="up" delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <SectionLabel className="mb-4">PLAN YOUR VISIT</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-tight">
              Your Guide to Milan
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {INFO_CARDS.map((card, cardIndex) => {
            const Icon = card.icon
            return (
              <AnimateOnScroll
                key={card.title}
                direction="up"
                delay={cardIndex * 0.12}
              >
                <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/[0.06] h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C9A84C]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#F5F0E8] mb-6">
                    {card.title}
                  </h3>

                  {/* Items */}
                  <ul className="flex flex-col gap-5">
                    {card.items.map((item) => (
                      <li key={item.season}>
                        <p className="text-sm font-medium text-[#F5F0E8] mb-0.5">
                          {item.season}
                        </p>
                        <p className="text-sm text-[#4A4540] leading-relaxed">
                          {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* ── B. Final CTA ── */}
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="border-t border-white/[0.06] pt-20 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] tracking-tight mb-5 max-w-2xl">
              Ready to Experience Milano?
            </h2>
            <p className="text-[#8A8580] text-lg mb-12 max-w-md leading-relaxed">
              Book your journey to Italy's most dynamic city.
            </p>

            <motion.a
              href="https://www.italia.it/en/lombardy/milan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] font-semibold text-base px-10 py-4 rounded-full transition-colors duration-300 hover:bg-[#d9b85c]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 340, damping: 22 }}
            >
              {/* Glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100"
                style={{
                  boxShadow: '0 0 40px 10px rgba(201,168,76,0.35)',
                }}
              />
              Plan Your Trip →
            </motion.a>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
