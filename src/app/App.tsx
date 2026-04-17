import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/features/hero/Hero'
import Stats from '@/features/stats/Stats'
import Districts from '@/features/districts/Districts'
import Culture from '@/features/culture/Culture'
import Cuisine from '@/features/cuisine/Cuisine'
import Gallery from '@/features/gallery/Gallery'
import Visit from '@/features/visit/Visit'
import Contact from '@/features/contact/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Districts />
        <Culture />
        <Cuisine />
        <Gallery />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
