import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 20
      setScrolled(prev => (prev === next ? prev : next))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Solution', 'Features', 'Industries', 'Demo', 'Contact']

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(6,6,8,0.85)] backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <img
              src="/vynce-ai-logo.png"
              alt="Vynce AI"
              className="w-5 h-5 object-contain"
              draggable={false}
            />
          </div>
          <span className="font-syne font-700 text-white text-lg tracking-tight">Vynce<span className="text-purple-400"> AI</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              {l}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="btn-primary text-sm text-white font-medium px-5 py-2.5 rounded-xl">
            Get Started Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[rgba(6,6,8,0.97)] backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-white/70 hover:text-white text-lg">
                  {l}
                </a>
              ))}
              <a href="#" className="btn-primary text-center text-sm text-white font-medium px-5 py-3 rounded-xl mt-2">
                Get Started Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
