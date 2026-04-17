import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1920&q=80'

function scrollToSection(href: string) {
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

// Stagger container — controls child animation cascade
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
}

export default function Hero() {
  const handleExplore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    scrollToSection('#districts')
  }

  const handleCulture = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    scrollToSection('#culture')
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Hero — Milan Showcase"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Milan Duomo Cathedral aerial view"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* ── Dark gradient overlay (bottom → up) ── */}
      <div
        className={cn(
          'absolute inset-0 z-10',
          'bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent',
        )}
        aria-hidden="true"
      />

      {/* ── Additional left-side vignette for readability ── */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-20 flex min-h-screen items-end pb-24 lg:items-center lg:pb-0">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl lg:max-w-4xl"
          >
            {/* ── Coordinates label ── */}
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className={cn(
                  'inline-flex items-center gap-2',
                  'text-xs font-semibold uppercase tracking-[0.25em]',
                  'text-[#C9A84C]',
                )}
              >
                <span className="h-px w-6 bg-[#C9A84C]" aria-hidden="true" />
                45°28′N · 9°12′E
              </span>
            </motion.div>

            {/* ── Headline ── */}
            <motion.h1
              variants={itemVariants}
              className={cn(
                'text-6xl md:text-8xl lg:text-9xl',
                'tracking-tight leading-[0.92]',
                'text-[#F5F0E8]',
              )}
            >
              <span className="block font-light">La Capitale</span>
              <span className="block font-bold">della Moda.</span>
            </motion.h1>

            {/* ── Subtitle ── */}
            <motion.p
              variants={itemVariants}
              className={cn(
                'mt-7 max-w-xl',
                'text-base md:text-lg leading-relaxed',
                'text-[#8A8580]',
              )}
            >
              Where timeless elegance meets relentless innovation. Milan is
              Italy's most cosmopolitan city — a global stage for fashion,
              design, and culture.
            </motion.p>

            {/* ── CTA Buttons ── */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary: Explore the City */}
              <button
                type="button"
                onClick={handleExplore}
                className={cn(
                  'group relative inline-flex items-center gap-2 overflow-hidden',
                  'rounded-full border border-[#C9A84C] px-8 py-3.5',
                  'text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A84C]',
                  'transition-all duration-300',
                  'hover:text-[#0A0A0A]',
                  // fill effect via pseudo-element via ::before — use a motion span instead
                )}
              >
                {/* Animated fill background */}
                <span
                  className={cn(
                    'absolute inset-0 -translate-x-full bg-[#C9A84C]',
                    'transition-transform duration-300 ease-in-out',
                    'group-hover:translate-x-0',
                  )}
                  aria-hidden="true"
                />
                <span className="relative">Explore the City</span>
                <ArrowDown
                  size={14}
                  className="relative -rotate-90 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              {/* Secondary: Discover Culture */}
              <button
                type="button"
                onClick={handleCulture}
                className={cn(
                  'inline-flex items-center gap-2',
                  'rounded-full px-8 py-3.5',
                  'text-sm font-semibold uppercase tracking-[0.15em] text-[#8A8580]',
                  'transition-colors duration-300 hover:text-[#F5F0E8]',
                )}
              >
                Discover Culture
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4, ease: 'easeOut' }}
        className={cn(
          'absolute bottom-8 left-1/2 z-20 -translate-x-1/2',
          'flex flex-col items-center gap-2',
        )}
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#4A4540]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <ArrowDown
            size={16}
            className="text-[#4A4540]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
