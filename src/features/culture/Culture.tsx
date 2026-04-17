import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/common/AnimateOnScroll'
import SectionLabel from '@/components/common/SectionLabel'

interface CultureItem {
  title: string
  subtitle: string
  description: string
  detail: string
  image: string
  number: string
}

const cultureItems: CultureItem[] = [
  {
    title: 'Teatro alla Scala',
    subtitle: "The World's Greatest Opera House",
    description:
      'Since 1778, La Scala has been the pinnacle of operatic achievement. Every great name in classical music has graced its legendary stage — from Verdi to Toscanini, from Callas to Pavarotti. To attend a performance here is to participate in living history.',
    detail: 'Founded 1778 · Via Filodrammatici, 2',
    image: 'https://images.unsplash.com/photo-1701184788923-c35f876bf234?w=900&q=80',
    number: '01',
  },
  {
    title: 'The Last Supper',
    subtitle: "Leonardo's Masterpiece",
    description:
      "Hidden in the refectory of Santa Maria delle Grazie, Leonardo da Vinci's 'The Last Supper' is one of the most studied paintings in the world. Painted between 1495 and 1498, it remains a breathtaking feat of perspective and human emotion.",
    detail: 'Painted 1495–1498 · Santa Maria delle Grazie',
    image: 'https://images.unsplash.com/photo-1705604087658-bc5b155e76ce?w=900&q=80',
    number: '02',
  },
  {
    title: 'Milan Fashion Week',
    subtitle: 'The Global Stage of Style',
    description:
      'Twice a year, Milan becomes the undisputed capital of the fashion world. The runways of Armani, Versace, Prada, and Gucci set the global agenda for style. Milan Fashion Week is not just an event — it is a declaration of Italian excellence.',
    detail: 'February & September · Various venues',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    number: '03',
  },
]

interface CultureBlockProps {
  item: CultureItem
  index: number
}

function CultureBlock({ item, index }: CultureBlockProps) {
  const isEven = index % 2 === 0
  // Even: image left, text right — Odd: text left, image right
  const imageOrder = isEven ? 'lg:order-1' : 'lg:order-2'
  const textOrder = isEven ? 'lg:order-2' : 'lg:order-1'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image column */}
      <AnimateOnScroll
        className={imageOrder}
        direction={isEven ? 'left' : 'right'}
        delay={0.1}
      >
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </AnimateOnScroll>

      {/* Text column */}
      <AnimateOnScroll
        className={textOrder}
        direction={isEven ? 'right' : 'left'}
        delay={0.2}
      >
        <div className="flex flex-col gap-5">
          {/* Decorative number */}
          <span
            className="font-bold leading-none select-none text-[#C9A84C]/20"
            style={{ fontSize: '7rem', lineHeight: 1 }}
            aria-hidden="true"
          >
            {item.number}
          </span>

          <div className="flex flex-col gap-3 -mt-6">
            {/* Subtitle in gold small caps */}
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
              {item.subtitle}
            </span>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight tracking-tight">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-base text-[#8A8580] leading-relaxed">
              {item.description}
            </p>

            {/* Detail line */}
            <p className="text-xs text-[#4A4540] tracking-wide mt-1">
              {item.detail}
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}

export default function Culture() {
  return (
    <section id="culture" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="mb-20">
            <SectionLabel>CULTURE &amp; LEGACY</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight tracking-tight">
              A City of Timeless Art
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Culture blocks with dividers */}
        <div className="flex flex-col gap-24">
          {cultureItems.map((item, index) => (
            <div key={item.number}>
              <CultureBlock item={item} index={index} />
              {index < cultureItems.length - 1 && (
                <div className="border-t border-white/[0.06] mt-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
