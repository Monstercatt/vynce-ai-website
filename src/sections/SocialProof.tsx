import { motion } from "framer-motion"

const metrics = [
  { value: "1000+", label: "Conversations Automated Daily" },
  { value: "3.2×", label: "Average Lead Conversion Lift" },
  { value: "< 0.5s", label: "AI Response Time" },
  { value: "98%", label: "Customer Satisfaction Rate" },
]

const logos = [
  "Clinics", "Pharmacies", "Hospitals", "Gyms", "Salons"
]

export default function SocialProof() {
  return (
    <section style={{ paddingTop: 60, paddingBottom: 80 }} className="relative">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-white/30 tracking-widest uppercase mb-10"
        >
          Built for Growing Businesses
        </motion.p>

        {/* Logo strip */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-16">
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-white/20 font-syne font-bold text-lg hover:text-white/40 transition-colors cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-purple-500/30 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold font-syne grad-text">{m.value}</p>
              <p className="text-white/40 text-sm mt-2 leading-snug">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
