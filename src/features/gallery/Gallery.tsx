import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/common/AnimateOnScroll'
import SectionLabel from '@/components/common/SectionLabel'

interface GalleryImage {
  url: string
  alt: string
  tall: boolean
}

const images: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80',
    alt: 'Milan cityscape',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&q=80',
    alt: 'Duomo di Milano',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1624604268681-cdd842aeee41?w=800&q=80',
    alt: 'Brera district',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80',
    alt: 'Milan fashion',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1668784290849-aa5acd24edcd?w=800&q=80',
    alt: 'Navigli canals',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=80',
    alt: 'Milan cathedral detail',
    tall: false,
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimateOnScroll className="mb-4">
          <SectionLabel>GALLERY</SectionLabel>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1} className="mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F5F0E8] leading-tight">
            Milan in Frames
          </h2>
        </AnimateOnScroll>

        {/* Masonry-style grid */}
        <AnimateOnScroll delay={0.2}>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            style={{ gridTemplateRows: '250px 250px' }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.url}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={[
                  'relative rounded-2xl overflow-hidden group cursor-pointer',
                  image.tall ? 'row-span-2' : 'row-span-1',
                ].join(' ')}
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-[#C9A84C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Alt text label (subtle, bottom-left) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-xs font-medium text-[#F5F0E8]/80 uppercase tracking-widest">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
