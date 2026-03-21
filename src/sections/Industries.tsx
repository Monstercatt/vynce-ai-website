import { motion } from "framer-motion"

const industries = [
  {
    icon: "🛒",
    name: "E-Commerce",
    text: "Handle product questions, order tracking, returns, and upsells — automatically, at any scale.",
    stat: "40% reduction in support tickets",
  },
  {
    icon: "🏡",
    name: "Real Estate",
    text: "Capture buyer intent, schedule viewings, and qualify investment leads around the clock.",
    stat: "5× more qualified appointments",
  },
  {
    icon: "🎓",
    name: "Education",
    text: "Answer admissions questions, guide students through enrollment, and reduce staff load.",
    stat: "60% fewer repetitive support tasks",
  },
  {
    icon: "🏥",
    name: "Healthcare",
    text: "Pre-screen patients, schedule appointments, and send reminders compliantly and instantly.",
    stat: "35% improvement in appointment show rate",
  },
  {
    icon: "💼",
    name: "SaaS & Tech",
    text: "Reduce churn with proactive support, onboard users faster, and qualify inbound demos.",
    stat: "2.8× faster time-to-value",
  },
  {
    icon: "🏦",
    name: "Financial Services",
    text: "Guide users through products, capture lead intent, and escalate compliance-sensitive issues.",
    stat: "50% higher lead-to-meeting rate",
  },
]

export default function Industries() {
  return (
    <section id="industries" className="relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-purple-400 font-medium">Industries</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Built for Every Industry
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            Vynce AI adapts to your specific domain, tone, and compliance requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 group relative overflow-hidden"
            >
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }}
              />
              <span className="text-3xl mb-4 block">{ind.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2 font-syne">{ind.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">{ind.text}</p>
              <p className="text-xs text-purple-400 font-medium">{ind.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
