import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import AnimateOnScroll from '@/components/common/AnimateOnScroll'
import SectionLabel from '@/components/common/SectionLabel'

interface ContactDetail {
  icon: React.ElementType
  label: string
  value: string
}

const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Piazza del Duomo, 20122 Milano MI, Italy',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+39 02 1234 5678',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@milanoshowcase.com',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <AnimateOnScroll direction="up" delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <SectionLabel className="mb-4">GET IN TOUCH</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-tight">
              Contact Us
            </h2>
            <p className="mt-4 text-[#8A8580] max-w-xl text-base leading-relaxed">
              Have a question about Milan or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Contact Details ── */}
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="flex flex-col gap-6">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon
                return (
                  <div
                    key={detail.label}
                    className="flex items-start gap-5 bg-[#111111] rounded-2xl p-6 border border-white/[0.06]"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#C9A84C]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#4A4540] mb-1">
                        {detail.label}
                      </p>
                      <p className="text-[#F5F0E8] text-sm leading-relaxed">{detail.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimateOnScroll>

          {/* ── Form ── */}
          <AnimateOnScroll direction="right" delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full bg-[#111111] rounded-2xl border border-white/[0.06] p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-2">Message Sent</h3>
                <p className="text-[#8A8580] text-sm">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111111] rounded-2xl border border-white/[0.06] p-8 flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#4A4540]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-[#1A1A1A] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#4A4540] outline-none focus:border-[#C9A84C]/50 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#4A4540]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-[#1A1A1A] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#4A4540] outline-none focus:border-[#C9A84C]/50 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#4A4540]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind…"
                    className="bg-[#1A1A1A] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#4A4540] outline-none focus:border-[#C9A84C]/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 w-full bg-[#C9A84C] hover:bg-[#D4B55A] text-[#0A0A0A] font-semibold text-sm uppercase tracking-[0.15em] py-3.5 rounded-xl transition-colors duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
