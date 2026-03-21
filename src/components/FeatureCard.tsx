import { motion } from "framer-motion"

interface Props {
  icon: string
  title: string
  text: string
  accent?: string
}

export default function FeatureCard({ icon, title, text, accent = "#8b5cf6" }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass rounded-2xl p-7 group relative overflow-hidden cursor-default"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${accent}08, transparent 60%)` }}
      />
      <div
        className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }}
      />

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
        style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
      >
        {icon}
      </div>
      <h3 className="text-base font-bold text-white mb-2 font-syne">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{text}</p>
    </motion.div>
  )
}
