import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// ── Typing animation for subheading ──
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, 28)
    return () => clearTimeout(t)
  }, [started, displayed, text])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: "0.9em",
            background: "#22d3ee",
            marginLeft: 2,
            verticalAlign: "middle",
            borderRadius: 1,
            animation: "cursorBlink 0.75s step-end infinite",
            boxShadow: "0 0 8px #22d3ee",
          }}
        />
      )}
    </span>
  )
}

// ── Falling light rays rain effect ──
function LightRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let af: number
    let w = 0, h = 0

    interface Ray {
      x: number; y: number; length: number; speed: number
      opacity: number; width: number; color: string; tail: number
    }

    const rays: Ray[] = []
    const COLORS = ["34,211,238","139,92,246","255,255,255","167,139,250","56,189,248"]

    function spawnRay(forceY?: number): Ray {
      return {
        x: Math.random() * w,
        y: forceY !== undefined ? forceY : -(Math.random() * h * 0.5),
        length: Math.random() * 120 + 40,
        speed: Math.random() * 2.2 + 0.6,
        opacity: Math.random() * 0.18 + 0.04,
        width: Math.random() * 1.2 + 0.3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        tail: Math.random() * 60 + 20,
      }
    }

    function setup() {
      w = canvas!.width = canvas!.offsetWidth
      h = canvas!.height = canvas!.offsetHeight
      rays.length = 0
      const count = Math.floor(w / 16)
      for (let i = 0; i < count; i++) rays.push(spawnRay(Math.random() * h))
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)
      rays.forEach(r => {
        r.y += r.speed
        if (r.y - r.length > h) Object.assign(r, spawnRay())

        const g = ctx!.createLinearGradient(r.x, r.y - r.length, r.x, r.y + r.tail)
        g.addColorStop(0,    `rgba(${r.color},0)`)
        g.addColorStop(0.3,  `rgba(${r.color},${r.opacity * 0.4})`)
        g.addColorStop(0.75, `rgba(${r.color},${r.opacity})`)
        g.addColorStop(0.88, `rgba(${r.color},${r.opacity * 0.7})`)
        g.addColorStop(1,    `rgba(${r.color},0)`)

        ctx!.beginPath()
        ctx!.moveTo(r.x, r.y - r.length)
        ctx!.lineTo(r.x, r.y + r.tail)
        ctx!.strokeStyle = g
        ctx!.lineWidth = r.width
        ctx!.stroke()

        // Glowing head dot
        const hg = ctx!.createRadialGradient(r.x, r.y, 0, r.x, r.y, 3)
        hg.addColorStop(0, `rgba(${r.color},${Math.min(r.opacity * 3, 0.6)})`)
        hg.addColorStop(1, `rgba(${r.color},0)`)
        ctx!.beginPath()
        ctx!.arc(r.x, r.y, 2.5, 0, Math.PI * 2)
        ctx!.fillStyle = hg
        ctx!.fill()
      })
      af = requestAnimationFrame(draw)
    }

    setup(); draw()
    const ro = new ResizeObserver(setup); ro.observe(canvas)
    return () => { cancelAnimationFrame(af); ro.disconnect() }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}/>
}

// ── Subtle particle canvas ──
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let af: number, w = 0, h = 0, t = 0

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string }[] = []

    function setup() {
      w = canvas!.width = canvas!.offsetWidth
      h = canvas!.height = canvas!.offsetHeight
      particles.length = 0
      const colors = ["#8b5cf6", "#22d3ee", "#34d399", "#a78bfa"]
      for (let i = 0; i < 55; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.8 + 0.4,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)
      t++
      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        const pulse = Math.sin(t * 0.02 + p.x * 0.01) * 0.2
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = p.color
        ctx!.globalAlpha = Math.max(0, p.opacity + pulse)
        ctx!.fill()
        ctx!.globalAlpha = 1
      })
      af = requestAnimationFrame(draw)
    }
    setup(); draw()
    const ro = new ResizeObserver(setup); ro.observe(canvas)
    return () => { cancelAnimationFrame(af); ro.disconnect() }
  }, [])
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6, zIndex: 2 }}
    />
  )
}

export default function Hero() {
  const headline = [
    { text: "We Build Websites.", delay: 0.15 },
    { text: "We Automate Business.", delay: 0.32 },
    { text: "You Scale.", delay: 0.50, grad: true },
  ]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <style>{`
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      {/* ── BG IMAGE ── */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Multi-layer overlay for professional contrast */}
        {/* Left heavy dark for text */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(100deg, rgba(3,3,10,0.97) 0%, rgba(3,3,10,0.92) 30%, rgba(3,3,10,0.70) 55%, rgba(3,3,10,0.25) 100%)",
        }}/>
        {/* Top fade for navbar */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(3,3,10,0.7) 0%, transparent 20%, transparent 80%, rgba(3,3,10,0.9) 100%)",
        }}/>
        {/* Subtle purple glow over image on left */}
        <div style={{
          position: "absolute", top: "10%", left: "-5%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)",
          filter: "blur(80px)",
        }}/>
        {/* Subtle cyan glow center-right */}
        <div style={{
          position: "absolute", top: "20%", left: "45%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(34,211,238,0.08), transparent 70%)",
          filter: "blur(80px)",
        }}/>
      </div>

      {/* Light rain effect */}
      <LightRain />

      {/* Particles */}
      <ParticleCanvas />

      {/* ── CONTENT ── */}
      <div className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12" style={{ zIndex: 3 }}>
        <div className="max-w-[680px]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 999, marginBottom: 28,
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.45)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 24px rgba(139,92,246,0.2), inset 0 0 12px rgba(139,92,246,0.06)",
              fontSize: 12, fontWeight: 500, color: "#c4b5fd",
              letterSpacing: "0.04em",
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#34d399", flexShrink: 0,
              boxShadow: "0 0 8px #34d399",
              animation: "cursorBlink 2s ease-in-out infinite",
            }}/>
            Web Design · AI Automation Agency
          </motion.div>

          {/* Headline */}
          <div style={{ marginBottom: 22, display: "flex", flexDirection: "column", gap: 4 }}>
            {headline.map((line) => (
              <motion.div
                key={line.text}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: line.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {line.grad ? (
                  <h1
                    className="font-syne"
                    style={{
                      fontSize: "clamp(26px, 3.4vw, 48px)",
                      fontWeight: 800,
                      lineHeight: 1.05,
                      letterSpacing: "-1px",
                      background: "linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "shimmer 4s linear infinite",
                    }}
                  >
                    {line.text}
                  </h1>
                ) : (
                  <h1
                    className="font-syne"
                    style={{
                      fontSize: "clamp(26px, 3.4vw, 48px)",
                      fontWeight: 800,
                      lineHeight: 1.05,
                      letterSpacing: "-1px",
                      color: "#ffffff",
                      textShadow: "0 2px 40px rgba(0,0,0,0.9)",
                    }}
                  >
                    {line.text}
                  </h1>
                )}
              </motion.div>
            ))}
          </div>

          {/* Subtext with typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            style={{
              fontSize: "clamp(14px, 1.4vw, 17px)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 560,
              marginBottom: 32,
              textShadow: "0 1px 20px rgba(0,0,0,0.8)",
              minHeight: "3.5em",
            }}
          >
            <TypingText
              text="We design high-converting websites and deploy AI automation systems that capture leads, engage customers, and grow your business — on autopilot."
              delay={900}
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 26px", borderRadius: 12,
                background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                boxShadow: "0 0 28px rgba(124,58,237,0.45), 0 4px 16px rgba(124,58,237,0.25)",
                color: "#fff", fontWeight: 700, fontSize: 14,
                textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.3s",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Start Your Project
              <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
            </a>
            <a
              href="#demo"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 26px", borderRadius: 12,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(12px)",
                color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: 14,
                textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.3s",
              }}
            >
              View Our Work
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            style={{ display: "flex", gap: 20, flexWrap: "wrap", rowGap: 10 }}
          >
            {[
              { text: "No long-term contracts", color: "#34d399" },
              { text: "Delivered in 14 days", color: "#22d3ee" },
              { text: "AI-powered from day one", color: "#a78bfa" },
            ].map((item) => (
              <span
                key={item.text}
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  fontSize: 13, color: "rgba(255,255,255,0.5)",
                  textShadow: "0 1px 10px rgba(0,0,0,0.9)",
                }}
              >
                <span style={{
                  width: 18, height: 18, borderRadius: "50%",
                  background: `${item.color}20`,
                  border: `1px solid ${item.color}60`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, color: item.color, fontWeight: 800, flexShrink: 0,
                }}>✓</span>
                {item.text}
              </span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Right edge subtle vignette */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: "30%", zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(to left, rgba(3,3,10,0.4), transparent)",
      }}/>
    </section>
  )
}
