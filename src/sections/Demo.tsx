import { motion } from "framer-motion"
import { useState } from "react"

interface Msg {
  role: string
  text: string
  time: string
  loading?: boolean
}

const beforeMessages: Msg[] = [
  { role: "user", text: "Hi, I need help choosing a plan", time: "2:14 PM" },
  { role: "ai", text: "...", time: "2:14 PM", loading: true },
  { role: "human", text: "Hey! Let me check with the team and get back to you", time: "2:47 PM" },
]

const afterMessages: Msg[] = [
  { role: "user", text: "Hi, I need help choosing a plan", time: "2:14 PM" },
  { role: "ai", text: "Hi! I'm Vynce, your AI assistant 👋 I'd love to help. Are you a solo founder or managing a team?", time: "2:14 PM" },
  { role: "user", text: "A team of about 15 people in sales", time: "2:14 PM" },
  { role: "ai", text: "Perfect! Growth plan is made for teams like yours — unlimited AI chats, CRM sync, and priority support. Want me to start your free trial now?", time: "2:15 PM" },
]

export default function Demo() {
  const [tab, setTab] = useState<'before' | 'after'>('before')

  return (
    <section id="demo" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(124,58,237,0.08) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-medium">Live Demo</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            See the Difference in<br />
            <span className="grad-text">Real Conversations</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            Compare how your team handles leads today versus how Vynce AI handles them instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Tab switcher */}
          <div className="flex rounded-xl glass p-1 mb-6 w-fit mx-auto" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            {(['before', 'after'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  tab === t
                    ? t === 'before'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {t === 'before' ? '❌ Without Vynce' : '✅ With Vynce AI'}
              </button>
            ))}
          </div>

          {/* Chat window */}
          <div className="glass rounded-2xl overflow-hidden glow-border" style={{ border: '1px solid rgba(139,92,246,0.2)' }}>
            {/* Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="ml-3 text-xs text-white/30">
                {tab === 'before' ? 'Support Chat · Manual Response' : 'vynce.ai · AI Agent · Response time: 0.4s'}
              </span>
              {tab === 'after' && (
                <span className="ml-auto flex items-center gap-1 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AI Active
                </span>
              )}
            </div>

            {/* Messages */}
            <div className="p-5 space-y-3 min-h-[280px]">
              {(tab === 'before' ? beforeMessages : afterMessages).map((msg, i) => (
                <motion.div
                  key={`${tab}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
                >
                  {msg.role !== 'user' && (
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-auto ${
                      msg.role === 'ai'
                        ? 'bg-gradient-to-br from-purple-500 to-cyan-400 text-white'
                        : 'bg-white/10 text-white/60'
                    }`}>
                      {msg.role === 'ai' ? (
                        <img
                          src="/vynce-ai-logo.png"
                          alt="Vynce AI"
                          className="w-4 h-4 object-contain"
                          draggable={false}
                        />
                      ) : (
                        '👤'
                      )}
                    </div>
                  )}
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-purple-600/30 text-white/90 rounded-br-sm'
                      : msg.loading
                        ? 'bg-white/[0.05] text-white/30 italic rounded-bl-sm'
                        : msg.role === 'human'
                          ? 'bg-orange-500/10 text-orange-200/70 rounded-bl-sm border border-orange-500/20'
                          : 'bg-white/[0.06] text-white/80 rounded-bl-sm'
                  }`}>
                    {msg.loading ? '⏳ Waiting for agent reply (33 mins later...)' : msg.text}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0 mt-auto">
                      👤
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {tab === 'before' && (
              <div className="px-5 pb-4">
                <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-300/70">
                  ⚠️ Lead went cold. No follow-up. Prospect signed with competitor.
                </div>
              </div>
            )}
            {tab === 'after' && (
              <div className="px-5 pb-4">
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-xs text-emerald-300/70">
                  ✅ Lead qualified in 60 seconds. Trial started. Deal closed same day.
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
