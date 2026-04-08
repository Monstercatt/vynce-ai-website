import { Link } from "react-router-dom"
import { useEffect } from "react"

const team = [

]

const benefits = [
  { icon: "⚡", title: "Save 100+ Hours/Month", desc: "Eliminate repetitive tasks and free your team to focus on high-value work." },
  { icon: "📈", title: "Scale Without Hiring", desc: "Handle 10× the workload with intelligent automation — no extra headcount needed." },
  { icon: "🔗", title: "Connect Everything", desc: "Seamlessly integrate your CRM, marketing tools, payment systems, and more." },
  { icon: "🛡️", title: "Enterprise-Grade Security", desc: "Your data stays protected with encryption, access controls, and compliance-ready infrastructure." },
]

export default function AboutUs() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <section className="min-h-screen bg-[#060608] py-24 px-4 font-['DM_Sans',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');
        .about-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          backdrop-filter: blur(6px);
          padding: 40px;
        }
        .team-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.3s, transform 0.2s;
        }
        .team-card:hover {
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-2px);
        }
        .benefit-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 22px;
          transition: border-color 0.3s, transform 0.2s;
        }
        .benefit-card:hover {
          border-color: rgba(139,92,246,0.25);
          transform: translateY(-2px);
        }
        .avatar {
          width: 56px; height: 56px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1.1rem; color: white;
          flex-shrink: 0;
        }
        .back-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #a78bfa; text-decoration: none; font-weight: 600; font-size: 0.9rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: #c4b5fd; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <Link to="/" className="back-link" style={{ marginBottom: 24, display: "inline-flex" }}>
          ← Back to Home
        </Link>

        {/* Company Intro */}
        <div className="about-card" style={{ marginTop: 16, marginBottom: 32 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.95)", fontFamily: "'DM Serif Display', serif" }}>
            Leading Workflow Automation Experts
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 16 }}>
            Vynce AI is a workflow automation company headquartered in Nagpur, India. We help businesses
            of all sizes — from fast-growing startups to established enterprises — eliminate manual
            bottlenecks and scale operations through intelligent automation.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 16 }}>
            Our expertise spans <strong style={{ color: "rgba(255,255,255,0.75)" }}>marketing automation,
              operational workflows, customer engagement, data processing, and custom integrations</strong>.
            Whether it's automating lead follow-ups, streamlining internal approvals, connecting
            disparate tools via APIs, or deploying self-service systems like automated print kiosks —
            we build workflows that just work.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 16 }}>
            Founded in 2026, Vynce AI was born from a simple belief: <em style={{ color: "rgba(255,255,255,0.7)" }}>businesses
              shouldn't spend hours on tasks that technology can handle in seconds</em>. Every solution we
            build is designed to save time, reduce errors, and give teams the freedom to focus on
            strategic, creative, and high-impact work.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.8 }}>
            We combine deep technical expertise in AI, APIs, and cloud infrastructure with a
            founder-led, hands-on approach to every engagement. When you work with Vynce AI, you're not
            buying a tool — you're gaining a dedicated automation partner invested in your growth.
          </p>

          {/* Mission & Vision */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 28 }}>
            <div style={{
              background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: 14, padding: "20px 24px",
            }}>
              <h3 style={{ color: "#a78bfa", fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>🎯 Our Mission</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                To make powerful workflow automation accessible to every business — not just enterprises
                with massive budgets, but every team ready to work smarter.
              </p>
            </div>
            <div style={{
              background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.15)",
              borderRadius: 14, padding: "20px 24px",
            }}>
              <h3 style={{ color: "#22d3ee", fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>🚀 Our Vision</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                A world where repetitive work is handled by intelligent systems, freeing humans to focus
                on creativity, strategy, and the work that truly matters.
              </p>
            </div>
          </div>
        </div>

        {/* Why Vynce AI */}
        <h2 className="text-2xl font-bold mb-5" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'DM Serif Display', serif" }}>
          Why Businesses Choose Us
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14, marginBottom: 36 }}>
          {benefits.map((b) => (
            <div key={b.title} className="benefit-card">
              <span style={{ fontSize: 26, display: "block", marginBottom: 10 }}>{b.icon}</span>
              <h3 style={{ color: "rgba(255,255,255,0.88)", fontWeight: 700, fontSize: "0.95rem", marginBottom: 6 }}>{b.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'DM Serif Display', serif" }}>

        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {team.map((m) => (
            <div key={m.name} className="team-card">
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div className="avatar" style={{ background: m.gradient }}>{m.initials}</div>
                <div>
                  <h3 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1rem" }}>{m.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", fontWeight: 500 }}>{m.role}</p>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", lineHeight: 1.6 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
