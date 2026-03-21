import { motion } from "framer-motion"

const features = [
  {
    icon: "🤖",
    title: "AI Chat Automation",
    text: "Handle thousands of conversations simultaneously across all your channels without lifting a finger.",
    accent: "#8b5cf6",
    side: "left",
  },
  {
    icon: "🎯",
    title: "Smart Lead Qualification",
    text: "AI scores every lead in real-time based on intent signals, ensuring your sales team only speaks to hot prospects.",
    accent: "#22d3ee",
    side: "right",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    text: "Deep insights into conversation quality, conversion rates, and revenue impact — all in one live dashboard.",
    accent: "#34d399",
    side: "left",
  },
  {
    icon: "🔗",
    title: "CRM Integration",
    text: "Native integrations with HubSpot, Salesforce, Pipedrive and more. Data flows automatically — no CSV exports.",
    accent: "#f59e0b",
    side: "right",
  },
  {
    icon: "🌍",
    title: "Multilingual AI",
    text: "Engage customers in 40+ languages with the same quality and tone as your best native-speaking rep.",
    accent: "#ec4899",
    side: "left",
  },
  {
    icon: "⚡",
    title: "Scalable Infrastructure",
    text: "99.9% uptime SLA. Handle traffic spikes automatically — Black Friday, product launches, viral moments.",
    accent: "#6366f1",
    side: "right",
  },
]

function FeatureCard({ f, i, direction }: { f: typeof features[0]; i: number; direction: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="relative overflow-hidden group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${f.accent}30`,
        borderRadius: "999px",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${f.accent}90, transparent)` }}
      />
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${f.accent}10, transparent 65%)` }}
      />
      <div className="relative z-10 px-6 py-5 flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: `${f.accent}15`, border: `1px solid ${f.accent}40` }}
        >
          {f.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-[10px] font-bold font-syne tracking-widest"
              style={{ color: `${f.accent}90` }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-sm font-bold text-white font-syne mb-1 leading-snug">{f.title}</h3>
          <p className="text-xs text-white/40 leading-relaxed">{f.text}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-medium">Platform Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Everything You Need to<br />
            <span className="grad-text">Automate & Convert</span>
          </h2>
          <p className="text-white/40 mt-5 max-w-lg mx-auto text-sm leading-relaxed">
            A complete AI automation stack, not a chatbot. Vynce is built for teams serious about revenue.
          </p>
        </motion.div>

        {/* ── DESKTOP SPINE LAYOUT ── */}
        <div className="hidden md:block relative">

          {/* Full-height spine */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none overflow-hidden"
            style={{ left: "50%", transform: "translateX(-50%)", width: 1 }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, #8b5cf6, #22d3ee, #34d399, #f59e0b, #ec4899, #6366f1)",
                opacity: 0.25,
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: 100,
                background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.7), transparent)",
              }}
              animate={{ top: ["-100px", "100%"] }}
              transition={{ duration: 3.5, repeat: 1, ease: "linear", repeatDelay: 0.5 }}
            />
          </div>

          {/* Rows */}
          <div className="flex flex-col" style={{ gap: 28 }}>
            {features.map((f, i) => {
              const isLeft = f.side === "left"

              return (
                <div
                  key={f.title}
                  className="relative flex items-center"
                >
                  {/* LEFT HALF */}
                  <div
                    className="flex items-center justify-end"
                    style={{ width: "50%", paddingRight: 52 }}
                  >
                    {isLeft
                      ? <div className="w-full"><FeatureCard f={f} i={i} direction="left" /></div>
                      : <div />
                    }
                  </div>

                  {/* CENTER NODE */}
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 44,
                      height: 44,
                      zIndex: 10,
                    }}
                  >
                    {/* Connector left */}
                    {isLeft && (
                      <div
                        className="absolute"
                        style={{
                          right: "100%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 30,
                          height: 1,
                          background: `linear-gradient(to left, ${f.accent}80, transparent)`,
                        }}
                      />
                    )}
                    {/* Connector right */}
                    {!isLeft && (
                      <div
                        className="absolute"
                        style={{
                          left: "100%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 30,
                          height: 1,
                          background: `linear-gradient(to right, ${f.accent}80, transparent)`,
                        }}
                      />
                    )}

                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `1px solid ${f.accent}60` }}
                      whileInView={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1.6, delay: i * 0.15, ease: "easeInOut" }}
                    />
                    {/* Node */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 + 0.15, type: "spring", stiffness: 250 }}
                      className="w-9 h-9 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: `${f.accent}18`,
                        border: `2px solid ${f.accent}`,
                        boxShadow: `0 0 18px ${f.accent}55, 0 0 36px ${f.accent}18`,
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: f.accent, boxShadow: `0 0 8px ${f.accent}` }}
                      />
                    </motion.div>
                  </div>

                  {/* RIGHT HALF */}
                  <div
                    className="flex items-center justify-start"
                    style={{ width: "50%", paddingLeft: 52 }}
                  >
                    {!isLeft
                      ? <div className="w-full"><FeatureCard f={f} i={i} direction="right" /></div>
                      : <div />
                    }
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE ── */}
        <div className="md:hidden relative pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-px overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, #8b5cf6, #22d3ee, #34d399, #f59e0b, #ec4899, #6366f1)",
                opacity: 0.35,
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: 80,
                background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.55), transparent)",
              }}
              animate={{ top: ["-80px", "100%"] }}
              transition={{ duration: 3, repeat: 1, ease: "linear" }}
            />
          </div>

          <div className="flex flex-col gap-7">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${f.accent}28`,
                    borderRadius: "999px",
                  }}
                >
                {/* Node — inside the card div so top-1/2 centers against the card only */}
                <div
                  className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: `${f.accent}20`,
                    border: `2px solid ${f.accent}`,
                    boxShadow: `0 0 12px ${f.accent}55`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: f.accent }} />
                </div>
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${f.accent}80, transparent)` }}
                  />
                  <div className="px-5 py-4 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${f.accent}15`, border: `1px solid ${f.accent}35` }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-bold font-syne block mb-0.5 tracking-widest"
                        style={{ color: `${f.accent}80` }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm font-bold text-white font-syne mb-1">{f.title}</h3>
                      <p className="text-xs text-white/40 leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
