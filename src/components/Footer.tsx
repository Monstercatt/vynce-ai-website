export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]" style={{ background: '#060608' }}>
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(34,211,238,0.3), transparent)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-14 md:py-16">

        {/* Main grid: brand + 2 link cols */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">

          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold font-syne text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                V
              </div>
              <span className="font-syne font-bold text-white text-lg">
                Vynce<span className="text-purple-400"> AI</span>
              </span>
            </div>

            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
              AI automation platform helping modern businesses convert conversations into revenue — 24/7, at scale.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: '𝕏', title: 'Twitter' },
                { label: 'in', title: 'LinkedIn' },
                { label: 'gh', title: 'GitHub' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  title={s.title}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-purple-500/40 transition-all duration-200 text-xs font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white text-sm font-semibold font-syne mb-5">Product</h4>
            <ul className="space-y-3.5">
              {['Features', 'Demo', 'How It Works'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/35 text-sm hover:text-white/70 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white text-sm font-semibold font-syne mb-5">Company</h4>
            <ul className="space-y-3.5">
              {['About', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/35 text-sm hover:text-white/70 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]"
        >
          <p className="text-white/25 text-xs text-center sm:text-left">
            © 2025 Vynce AI. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-white/25">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
