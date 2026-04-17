import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/common/AnimateOnScroll'
import SectionLabel from '@/components/common/SectionLabel'

interface Dish {
  name: string
  description: string
  origin: string
  emoji: string
  image: string
}

const dishes: Dish[] = [
  {
    name: 'Risotto alla Milanese',
    description:
      'Saffron-infused Arborio rice, slow-cooked with bone marrow and Parmesan. The jewel of Milanese cuisine.',
    origin: 'Traditional · 16th Century',
    emoji: '🌾',
    image: 'https://images.unsplash.com/photo-1712771531294-0a01b7a73691?w=600&q=80',
  },
  {
    name: 'Cotoletta Milanese',
    description:
      'A bone-in veal cutlet, pounded thin and fried in clarified butter until golden. Simple perfection.',
    origin: 'Traditional · 19th Century',
    emoji: '🥩',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80',
  },
  {
    name: 'Panettone',
    description:
      'The iconic sweet bread of Milan, studded with candied fruit and raisins. The taste of Christmas in every bite.',
    origin: 'Traditional · Medieval Era',
    emoji: '🍞',
    image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=80',
  },
  {
    name: 'Aperitivo Milanese',
    description:
      'More than a drink — it\'s a ritual. Campari was born in Milan. As the sun sets, the city pauses to sip and savour.',
    origin: 'Cultural Icon · Since 1860',
    emoji: '🍊',
    image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80',
  },
]

export default function Cuisine() {
  return (
    <section id="cuisine" className="bg-[#111111] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimateOnScroll className="mb-4">
          <SectionLabel>LA CUCINA</SectionLabel>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1} className="mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F5F0E8] leading-tight">
            Milanese Gastronomy
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mb-16">
          <p className="max-w-2xl text-lg text-[#8A8580] leading-relaxed">
            From humble origins to haute cuisine, the food of Milan reflects the city's character
            — refined, bold, and rooted in tradition.
          </p>
        </AnimateOnScroll>

        {/* Dish cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <AnimateOnScroll key={dish.name} delay={0.1 + index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/[0.08] h-full flex flex-col"
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl leading-none" role="img" aria-label={dish.name}>
                      {dish.emoji}
                    </span>
                    <h3 className="text-base font-bold text-[#F5F0E8] leading-snug">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#8A8580] leading-relaxed flex-1">
                    {dish.description}
                  </p>

                  <span className="text-xs font-medium text-[#C9A84C]/70 uppercase tracking-widest mt-auto">
                    {dish.origin}
                  </span>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
