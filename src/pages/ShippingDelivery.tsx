import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function ShippingDelivery() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <section className="min-h-screen bg-[#060608] py-24 px-4 font-['DM_Sans',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');
        .policy-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          backdrop-filter: blur(6px);
          padding: 40px;
        }
        .policy-card h1 { color: rgba(255,255,255,0.95); font-family: 'DM Serif Display', serif; }
        .policy-card h2 { color: rgba(255,255,255,0.88); margin-top: 32px; margin-bottom: 12px; font-size: 1.25rem; font-weight: 700; }
        .policy-card p, .policy-card li { color: rgba(255,255,255,0.55); font-size: 0.95rem; line-height: 1.8; }
        .policy-card ul { list-style: disc; padding-left: 24px; margin-top: 8px; }
        .policy-card ul li { margin-bottom: 6px; }
        .back-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #a78bfa; text-decoration: none; font-weight: 600; font-size: 0.9rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: #c4b5fd; }
      `}</style>

      <div className="max-w-3xl mx-auto">
        <Link to="/" className="back-link" style={{ marginBottom: 24, display: "inline-flex" }}>
          ← Back to Home
        </Link>

        <div className="policy-card" style={{ marginTop: 16 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Delivery & Access Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginBottom: 24 }}>
            Effective date: April 8, 2026 · Last updated: April 8, 2026
          </p>

          <p>
            Vynce AI is a digital-first automation platform. All our services — including workflow setups, 
            integrations, and managed automations — are delivered digitally. No physical goods are shipped.
          </p>

          <h2>1. Digital Delivery</h2>
          <p>
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>All services are delivered electronically.</strong>{" "}
            This includes access to our automation platform, custom workflow deployments, API credentials, 
            dashboard access, and documentation — all provided through secure digital channels.
          </p>

          <h2>2. Subscription Access</h2>
          <ul>
            <li>Upon successful payment, you'll receive instant access to your subscribed plan features via our web dashboard</li>
            <li>Login credentials and onboarding instructions are sent to your registered email within minutes of purchase</li>
            <li>All platform features are accessible 24/7 through any modern web browser</li>
          </ul>

          <h2>3. Custom Automation Delivery</h2>
          <p>For bespoke automation setups and custom workflow development:</p>
          <ul>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Standard projects:</strong> Delivered within 7–14 business days from scope approval</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Complex integrations:</strong> Delivered within 14–30 business days, depending on project scope and third-party dependencies</li>
            <li>You'll receive progress updates at key milestones throughout the project</li>
            <li>Final delivery includes deployed workflows, documentation, and a walkthrough session</li>
          </ul>

          <h2>4. Access Methods</h2>
          <p>Depending on your plan and project, services are accessed through:</p>
          <ul>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Web Dashboard</strong> — Your central hub for managing, monitoring, and configuring all workflows</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>API Access</strong> — RESTful APIs with full documentation for programmatic integration</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Email & Notifications</strong> — Automated reports, alerts, and status updates delivered to your inbox</li>
          </ul>

          <h2>5. Deployment & Onboarding</h2>
          <p>
            Every new client receives a guided onboarding experience. Our team helps you configure 
            initial workflows, connect third-party integrations, and verify everything is running 
            smoothly before handoff. Onboarding is included in all plans at no extra cost.
          </p>

          <h2>6. Service Availability</h2>
          <p>
            Our platform is hosted on reliable cloud infrastructure with a target uptime of 99.9%. 
            Scheduled maintenance windows are communicated at least 48 hours in advance via email and 
            dashboard notification.
          </p>

          <h2>7. Contact</h2>
          <p>
            For delivery timelines, access issues, or onboarding support, contact us at{" "}
            <a href="mailto:vynceai04@gmail.com" style={{ color: "#4285f4" }}>vynceai04@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
