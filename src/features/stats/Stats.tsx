import AnimateOnScroll from '@/components/common/AnimateOnScroll'
import { cn } from '@/lib/utils'

interface Stat {
  value: string
  label: string
  sublabel: string
}

const STATS: Stat[] = [
  {
    value:    '1.37M',
    label:    'Residents',
    sublabel: 'Metropolitan area: 3.2M',
  },
  {
    value:    '182 km²',
    label:    'City Area',
    sublabel: "One of Italy's largest",
  },
  {
    value:    '#1',
    label:    'Fashion Capital',
    sublabel: 'Global fashion week host',
  },
  {
    value:    '1386',
    label:    'Duomo Founded',
    sublabel: 'Over 600 years of history',
  },
]

export default function Stats() {
  return (
    <section
      className={cn(
        'relative w-full',
        'border-y border-white/[0.08]',
        'bg-[#111111]',
      )}
      aria-label="Milan key statistics"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="relative">
              {/* Vertical divider — shown between items on desktop */}
              {index > 0 && (
                <span
                  className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/[0.08] md:block"
                  aria-hidden="true"
                />
              )}

              <AnimateOnScroll
                delay={index * 0.1}
                direction="up"
                className={cn(
                  'flex flex-col items-center justify-center gap-1.5 px-4 py-10 text-center',
                  'lg:px-8 lg:py-12',
                )}
              >
                {/* Value */}
                <dt className="order-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                  {stat.label}
                </dt>

                {/* Label — visually primary, semantically description */}
                <dd className="order-1 text-4xl font-bold tracking-tight text-[#F5F0E8] lg:text-5xl">
                  {stat.value}
                </dd>

                {/* Sublabel */}
                <dd className="order-3 text-xs text-[#4A4540]">
                  {stat.sublabel}
                </dd>
              </AnimateOnScroll>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
