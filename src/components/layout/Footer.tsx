import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Camera, Globe, Share2 } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

interface SocialLink {
  label: string
  href: string
  icon: ReactNode
}

const NAV_LINKS: NavLink[] = [
  { label: 'Districts', href: '#districts' },
  { label: 'Culture',   href: '#culture'   },
  { label: 'Cuisine',   href: '#cuisine'   },
  { label: 'Visit',     href: '#visit'     },
  { label: 'Contact',   href: '#contact'   },
]

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: <Camera className="w-4 h-4" strokeWidth={1.5} />,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/',
    icon: <Globe className="w-4 h-4" strokeWidth={1.5} />,
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/',
    icon: <Share2 className="w-4 h-4" strokeWidth={1.5} />,
  },
]

function handleScrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── Top Row: Wordmark + Nav Links ── */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-10">

          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-1.5 group w-fit"
            aria-label="Milano – back to top"
          >
            <span className="text-xl font-bold tracking-[0.18em] text-[#F5F0E8] uppercase transition-colors duration-200 group-hover:text-[#C9A84C]">
              MILANO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mb-3 shrink-0" />
          </a>

          {/* Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <motion.button
                    type="button"
                    onClick={() => handleScrollTo(link.href)}
                    className="text-sm font-medium text-[#4A4540] hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
                    whileHover={{ y: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/[0.04] mb-10" />

        {/* ── Bottom Row: Copyright + Social Icons ── */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-sm text-[#4A4540]">
            © 2025 Milano Showcase. Made with love for{' '}
            <span className="italic text-[#8A8580]">la bella città.</span>
          </p>

          {/* Social Icons */}
          <ul className="flex items-center gap-4" aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.08] text-[#4A4540] hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                >
                  {social.icon}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  )
}
