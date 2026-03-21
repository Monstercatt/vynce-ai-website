import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Connect Your Channels",
    text: "Link Vynce AI to your website chat, WhatsApp, email, and CRM in minutes with our no-code integrations.",
    color: "#8b5cf6",
  },
  {
    num: "02",
    title: "Train on Your Business",
    text: "Upload your docs, FAQs, and product info. Vynce learns your brand voice and responds exactly like your best rep.",
    color: "#22d3ee",
  },
  {
    num: "03",
    title: "Deploy & Watch It Scale",
    text: "Go live and let AI handle every conversation, capture every lead, and push qualified prospects to your sales team automatically.",
    color: "#34d399",
  },
]

export default function HowItWorks() {
  return (
    <section id="features" className="relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-purple-400 font-medium">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            From Setup to Revenue<br />in Three Steps
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-emerald-500/30" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold font-syne mb-6 relative z-10"
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}40`,
                    color: s.color,
                    boxShadow: `0 0 30px ${s.color}20`,
                  }}
                >
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-syne">{s.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm max-w-xs">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
