import { motion } from "framer-motion"
import { useState } from "react"

const cards = [
  {
    problem: {
      icon: "⏰",
      title: "Slow Response Times Kill Deals",
      text: "78% of buyers choose the first vendor to respond. Manual teams can't reply fast enough — and you're losing revenue every hour.",
    },
    solution: {
      icon: "⚡",
      title: "Instant AI Responses",
      text: "Sub-second replies across every channel — web chat, WhatsApp, email, and more. Your AI never sleeps, never takes breaks.",
      accent: "#8b5cf6",
    },
  },
  {
    problem: {
      icon: "💸",
      title: "Support Teams Are Expensive to Scale",
      text: "Hiring, training, and retaining human agents costs 10× more than AI. Headcount scales linearly, but your growth demands don't.",
    },
    solution: {
      icon: "🎯",
      title: "Intelligent Lead Capture",
      text: "Automatically identify high-intent visitors, gather contact info, and score leads based on conversation signals — no forms needed.",
      accent: "#22d3ee",
    },
  },
  {
    problem: {
      icon: "🌙",
      title: "Leads Go Cold After Hours",
      text: "Prospects don't stop browsing at 5 PM. Without 24/7 coverage, you're silently bleeding high-intent customers to competitors.",
    },
    solution: {
      icon: "🔄",
      title: "Seamless CRM Sync",
      text: "Every conversation, lead, and insight flows directly into your existing CRM. Zero manual data entry, infinite clarity.",
      accent: "#34d399",
    },
  },
]

function FlipCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="relative h-[260px] cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(f => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT — Problem */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "16px",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          {/* Red glow */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "140px", height: "140px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,68,68,0.18), transparent 70%)",
            filter: "blur(20px)", pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{
                fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em",
                fontWeight: 600, padding: "4px 12px", borderRadius: "999px",
                background: "rgba(239,68,68,0.12)", color: "rgba(248,113,113,0.9)",
                border: "1px solid rgba(239,68,68,0.22)",
              }}>
                Problem
              </span>
              <span style={{ fontSize: "22px" }}>{card.problem.icon}</span>
            </div>
            <h3 style={{ fontSize: "17px", fontWeight: 700, color: "white", fontFamily: "Syne, sans-serif", lineHeight: 1.3, marginBottom: "10px" }}>
              {card.problem.title}
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
              {card.problem.text}
            </p>
          </div>

          <p style={{ position: "relative", zIndex: 1, fontSize: "11px", color: "rgba(255,255,255,0.2)", marginTop: "12px" }}>
            Tap to see solution →
          </p>
        </div>

        {/* BACK — Solution */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "16px",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            background: "rgba(255,255,255,0.035)",
            border: `1px solid ${card.solution.accent}40`,
          }}
        >
          {/* Accent glow */}
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: "180px", height: "180px", borderRadius: "50%",
            background: `radial-gradient(circle, ${card.solution.accent}22, transparent 70%)`,
            filter: "blur(30px)", pointerEvents: "none",
          }} />
          {/* Top accent line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: `linear-gradient(90deg, transparent, ${card.solution.accent}99, transparent)`,
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{
                fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em",
                fontWeight: 600, padding: "4px 12px", borderRadius: "999px",
                background: `${card.solution.accent}18`,
                color: card.solution.accent,
                border: `1px solid ${card.solution.accent}40`,
              }}>
                Solution
              </span>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px", fontSize: "18px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `${card.solution.accent}15`,
                border: `1px solid ${card.solution.accent}30`,
              }}>
                {card.solution.icon}
              </div>
            </div>
            <h3 style={{ fontSize: "17px", fontWeight: 700, color: "white", fontFamily: "Syne, sans-serif", lineHeight: 1.3, marginBottom: "10px" }}>
              {card.solution.title}
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
              {card.solution.text}
            </p>
          </div>

          <p style={{ position: "relative", zIndex: 1, fontSize: "11px", fontWeight: 600, color: card.solution.accent, marginTop: "12px", opacity: 0.85 }}>
            ✓ Solved with Vynce AI
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProblemSolution() {
  return (
    <section id="solution" className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-widest text-purple-400 font-medium">Problem → Solution</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight max-w-2xl">
            Every Pain Point Has an{" "}
            <span className="grad-text">AI-Powered Answer</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-base leading-relaxed">
            Hover over each card — or tap on mobile — to flip from the problem your business faces to how Vynce AI solves it.
          </p>
        </motion.div>

        {/* Mobile tap hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-10 md:hidden"
        >
          <span className="text-lg">👆</span>
          <span className="text-white/30 text-xs">Tap any card to reveal the solution</span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <FlipCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
