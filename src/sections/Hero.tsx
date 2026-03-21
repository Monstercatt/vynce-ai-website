import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const words = ["Revenue", "Leads", "Growth", "Loyalty"]

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 1900)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ paddingTop: 80, paddingBottom: 0 }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
        <div
          className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left copy */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-purple-300 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI-Powered Business Automation · Now Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white"
          >
            Turn Every Chat Into{" "}
            <span className="relative inline-block">
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grad-text"
              >
                {words[wordIdx]}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/50 text-lg leading-relaxed mt-6 max-w-lg"
          >
            Vynce AI deploys intelligent conversation agents that capture leads, qualify prospects, and close deals — 24/7, without a single human rep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 mt-10"
          >
            <a href="#" className="btn-primary text-white font-semibold px-7 py-3.5 rounded-xl text-sm text-center">
              Get Started Free →
            </a>
            <a href="#demo" className="btn-secondary text-white/80 font-medium px-7 py-3.5 rounded-xl text-sm text-center">
              ▶ Watch 2-min Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex items-center gap-6 mt-10 text-sm text-white/35"
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/></svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/></svg>
              Setup in 10 minutes
            </span>
          </motion.div>
        </div>

        {/* Right — Chat UI mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="relative float">
            {/* Glow behind card */}
            <div
              className="absolute inset-[-20px] rounded-3xl opacity-30"
              style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)', filter: 'blur(40px)' }}
            />
            {/* Chat window */}
            <div className="relative glass rounded-2xl p-4 glow-border" style={{ border: '1px solid rgba(139,92,246,0.25)' }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06] mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-white/30 font-dm">vynce.ai · Live Chat</span>
                <span className="ml-auto flex items-center gap-1 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Chat messages */}
              <div className="space-y-3 p-2">
                <ChatBubble from="user" text="Hi, I'm interested in your enterprise plan. Can you help?" delay={0.5} />
                <ChatBubble from="ai" text="Absolutely! I'd love to help you find the right plan. How many team members will be using Vynce AI?" delay={0.9} />
                <ChatBubble from="user" text="Around 40-50 people, mostly in sales." delay={1.3} />
                <ChatBubble from="ai" text="Perfect — our Growth plan is ideal for sales teams that size. It includes unlimited conversations, CRM sync, and priority support. Want me to schedule a demo with your account manager?" delay={1.7} />
                <TypingIndicator delay={2.3} />
              </div>

              {/* Input bar */}
              <div className="mt-4 flex items-center gap-2 bg-white/[0.04] rounded-xl px-4 py-2.5 border border-white/[0.06]">
                <span className="text-sm text-white/20 flex-1">Type a message...</span>
                <button className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center text-white text-xs">
                  ↑
                </button>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -right-8 top-8 glass rounded-xl px-4 py-3 border border-white/[0.08]"
            >
              <p className="text-xs text-white/40">Avg. Response</p>
              <p className="text-xl font-bold font-syne text-emerald-400">0.4s</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -left-8 bottom-12 glass rounded-xl px-4 py-3 border border-white/[0.08]"
            >
              <p className="text-xs text-white/40">Leads Captured</p>
              <p className="text-xl font-bold font-syne grad-text">+312%</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #060608)' }} />
    </section>
  )
}

function ChatBubble({ from, text, delay }: { from: 'user' | 'ai'; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`flex ${from === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {from === 'ai' && (
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold mr-2 mt-auto flex-shrink-0">
          V
        </div>
      )}
      <div
        className={`max-w-[80%] text-xs px-3 py-2 rounded-2xl leading-relaxed ${
          from === 'user'
            ? 'bg-purple-600/40 text-white/90 rounded-br-sm'
            : 'bg-white/[0.06] text-white/80 rounded-bl-sm'
        }`}
      >
        {text}
      </div>
    </motion.div>
  )
}

function TypingIndicator({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        V
      </div>
      <div className="bg-white/[0.06] rounded-2xl rounded-bl-sm px-3 py-2.5 flex gap-1 items-center">
        {[0, 0.2, 0.4].map(d => (
          <motion.span
            key={d}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: d }}
            className="w-1.5 h-1.5 rounded-full bg-white/40"
          />
        ))}
      </div>
    </motion.div>
  )
}
