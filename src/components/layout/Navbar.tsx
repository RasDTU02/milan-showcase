import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Districts', href: '#districts' },
  { label: 'Culture',   href: '#culture'   },
  { label: 'Cuisine',   href: '#cuisine'   },
  { label: 'Visit',     href: '#visit'     },
]

function scrollToSection(href: string) {
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when viewport widens past mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('#')
    setMenuOpen(false)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
    setMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* ── Logo ── */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="group flex items-baseline gap-0 outline-none"
          aria-label="Milano — scroll to top"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5F0E8] transition-colors duration-200 group-hover:text-white">
            MILAN
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5F0E8] transition-colors duration-200 group-hover:text-white">
            O
          </span>
          <span
            className="ml-0.5 text-base font-bold leading-none text-[#C9A84C] transition-opacity duration-200 group-hover:opacity-80"
            aria-hidden="true"
          >
            ·
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  'relative text-sm font-medium tracking-wide text-[#8A8580]',
                  'transition-colors duration-200 hover:text-[#F5F0E8]',
                  'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#C9A84C]',
                  'after:transition-all after:duration-300 hover:after:w-full',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <a
          href="#visit"
          onClick={(e) => handleLinkClick(e, '#visit')}
          className={cn(
            'hidden md:inline-flex items-center gap-2',
            'rounded-full border border-[#C9A84C]/50 px-5 py-2',
            'text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A84C]',
            'transition-all duration-300',
            'hover:bg-[#C9A84C] hover:text-[#0A0A0A] hover:border-[#C9A84C]',
          )}
        >
          Plan Visit
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={cn(
            'md:hidden flex items-center justify-center rounded-lg p-2',
            'text-[#8A8580] transition-colors duration-200 hover:text-[#F5F0E8]',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C]',
          )}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={cn(
              'md:hidden',
              'border-t border-white/[0.08]',
              'bg-[#0A0A0A]/95 backdrop-blur-xl',
            )}
          >
            <ul className="flex flex-col px-6 py-4 gap-1" role="list">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: i * 0.06,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      'block rounded-lg px-4 py-3',
                      'text-sm font-medium tracking-wide text-[#8A8580]',
                      'transition-colors duration-200 hover:bg-white/[0.04] hover:text-[#F5F0E8]',
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.22,
                  delay: NAV_LINKS.length * 0.06,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="mt-3 pt-3 border-t border-white/[0.08]"
              >
                <a
                  href="#visit"
                  onClick={(e) => handleLinkClick(e, '#visit')}
                  className={cn(
                    'flex items-center justify-center rounded-full',
                    'border border-[#C9A84C]/50 px-5 py-3',
                    'text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A84C]',
                    'transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#0A0A0A]',
                  )}
                >
                  Plan Visit
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
