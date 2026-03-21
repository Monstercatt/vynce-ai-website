import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 120 }} className="relative">
      <div className="max-w-[900px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden text-center p-14 md:p-20"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(22,31,47,0.8) 50%, rgba(34,211,238,0.08) 100%)',
            border: '1px solid rgba(139,92,246,0.25)',
          }}
        >
          {/* Background glow blobs */}
          <div
            className="absolute top-[-30%] left-[-10%] w-96 h-96 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(60px)' }}
          />
          <div
            className="absolute bottom-[-30%] right-[-10%] w-80 h-80 rounded-full opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #22d3ee, transparent 70%)', filter: 'blur(60px)' }}
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-purple-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Join 2,000+ businesses automating their growth
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Start Automate in
              <br />
              <span className="grad-text">Under 10 Minutes</span>
            </h2>

            <p className="text-white/45 text-lg max-w-md mx-auto mb-10">
              No contracts. No credit card. Deploy your AI agent and watch it work from day one.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="#" className="btn-primary text-white font-semibold px-8 py-4 rounded-xl text-sm">
                Get Started Free →
              </a>
              <a href="#" className="btn-secondary text-white/80 font-medium px-8 py-4 rounded-xl text-sm">
                Book a Demo
              </a>
            </div>

            <p className="text-white/25 text-xs mt-8">
              14-day free trial · Cancel anytime · Setup in minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
