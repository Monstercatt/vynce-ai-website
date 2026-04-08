import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function TermsConditions() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms & Conditions</h1>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginBottom: 24 }}>
            Effective date: April 8, 2026 · Last updated: April 8, 2026
          </p>

          <p>
            These Terms and Conditions ("Terms") govern your access to and use of Vynce AI's workflow 
            automation platform, services, APIs, and related tools (collectively, the "Services"). By 
            using our Services, you agree to be bound by these Terms.
          </p>

          <h2>1. Services Overview</h2>
          <p>
            Vynce AI provides workflow automation solutions — including custom automation setups, 
            subscription-based platforms, API integrations, and managed automation services — designed 
            to help businesses streamline operations across marketing, operations, customer engagement, 
            and more.
          </p>

          <h2>2. Account Responsibilities</h2>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You must provide accurate and up-to-date information during registration</li>
            <li>You are responsible for all activities conducted under your account</li>
            <li>You must notify us immediately of any unauthorised access or security breach</li>
          </ul>

          <h2>3. Acceptable Use</h2>
          <ul>
            <li>You may not use our Services for any unlawful, fraudulent, or harmful purpose</li>
            <li>You may not attempt to reverse-engineer, decompile, or compromise our platform</li>
            <li>You may not use our tools to distribute spam, malware, or infringing content</li>
            <li>Automated workflows must comply with all applicable laws and third-party terms of service</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>Our IP:</strong> All proprietary tools, 
            templates, platform code, AI models, and underlying technology remain the exclusive 
            intellectual property of Vynce AI. You are granted a limited, non-exclusive, non-transferable 
            licence to use them during your active subscription.
          </p>
          <p style={{ marginTop: 12 }}>
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>Your IP:</strong> You retain full 
            ownership of any custom outputs, data, and workflow configurations generated or created 
            specifically for your business through our Services.
          </p>

          <h2>5. Subscriptions & Payment</h2>
          <ul>
            <li>Subscription plans are billed on a monthly or annual basis as selected at checkout</li>
            <li>All fees are quoted in INR unless otherwise stated and are exclusive of applicable taxes</li>
            <li>Payments are processed securely through our payment partner, Razorpay</li>
            <li>We reserve the right to modify pricing with 30 days' advance notice to active subscribers</li>
          </ul>

          <h2>6. Service Availability</h2>
          <p>
            We strive to maintain 99.9% uptime for our platform. However, we do not guarantee 
            uninterrupted service and are not liable for downtime caused by scheduled maintenance, 
            third-party service outages, or force majeure events.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Vynce AI provides automation tools and services on an "as-is" basis. While we work to ensure 
            accuracy and reliability, <strong style={{ color: "rgba(255,255,255,0.8)" }}>we are not 
            liable for business losses, data inaccuracies, or unintended outcomes resulting from 
            automated workflows</strong>. Our total liability for any claim shall not exceed the amount 
            you paid for the Services in the 12 months preceding the claim.
          </p>

          <h2>8. Termination</h2>
          <p>
            Either party may terminate the service agreement with written notice. Upon termination, 
            your access to the platform will be revoked and your data will be deleted within 30 days, 
            unless you request an export. We may also suspend or terminate accounts that violate these 
            Terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of India. Any disputes 
            arising from the use of our Services shall be subject to the exclusive jurisdiction of the 
            courts in Nagpur, Maharashtra.
          </p>

          <h2>10. Modifications</h2>
          <p>
            We may update these Terms from time to time. Material changes will be communicated via email 
            or platform notification at least 15 days in advance. Continued use of the Services after 
            changes take effect constitutes your acceptance.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:vynceai04@gmail.com" style={{ color: "#4285f4" }}>vynceai04@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
