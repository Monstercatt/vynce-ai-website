import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginBottom: 24 }}>
            Effective date: April 8, 2026 · Last updated: April 8, 2026
          </p>

          <p>
            At Vynce AI ("we," "our," "us"), your privacy is a core part of how we build and deliver 
            our workflow automation services. This Privacy Policy explains what data we collect, how we 
            use it, and your rights as a user — whether you're a business customer, trial user, or 
            website visitor.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Account & Contact Data</strong> — Name, email address, phone number, company name, and job title when you sign up, contact us, or subscribe to our services.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Workflow & Usage Data</strong> — Inputs, configurations, API connections, and process data submitted through our automation platform to execute and optimize your workflows.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Technical Data</strong> — IP address, browser type, device information, and cookies collected automatically when you visit our website or use our dashboards.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Payment Data</strong> — Billing details processed securely through our payment partners (e.g., Razorpay). We never store your card or bank credentials on our servers.</li>
          </ul>

          <h2>2. How We Use Your Data</h2>
          <ul>
            <li>To deliver, maintain, and improve our automation services</li>
            <li>To configure, deploy, and monitor your custom workflows</li>
            <li>To communicate service updates, support responses, and relevant notifications</li>
            <li>To analyse aggregated, anonymised usage patterns for product improvement</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>3. Data Retention & Deletion</h2>
          <p>
            We retain your data only for as long as necessary to provide our services and fulfil legal 
            requirements. Workflow data processed through our platform is stored only during your active 
            subscription. Upon account termination or written request, we delete all associated data 
            within 30 days, except where retention is required by law.
          </p>

          <h2>4. We Never Sell Your Data</h2>
          <p>
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>We do not sell, rent, or trade your personal information to any third party — ever.</strong>{" "}
            Your data is used solely to power and improve the services you've subscribed to.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            Our platform may integrate with third-party APIs and tools (e.g., CRMs, messaging platforms, 
            payment gateways) as part of your automation workflows. Data shared with these services is 
            governed by their own privacy policies. We only facilitate integrations you explicitly authorise.
          </p>

          <h2>6. Security</h2>
          <p>
            We protect your data using industry-standard measures including HTTPS encryption 
            (SSL/TLS), encrypted storage, access controls, and regular security audits. While no system 
            is 100% immune, we are committed to safeguarding your information with best-in-class practices.
          </p>

          <h2>7. GDPR & CCPA Compliance</h2>
          <p>
            If you are located in the European Economic Area (EEA) or California, you have additional 
            rights under the GDPR and CCPA respectively, including the right to:
          </p>
          <ul>
            <li>Access, correct, or delete your personal data</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Request data portability in a machine-readable format</li>
            <li>Opt out of the sale of personal information (we don't sell data, but the right applies)</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:vynceai04@gmail.com" style={{ color: "#4285f4" }}>vynceai04@gmail.com</a>.
            We will respond within 30 days.
          </p>

          <h2>8. Cookies</h2>
          <p>
            We use minimal, functional cookies to maintain sessions and improve user experience. We do 
            not use third-party advertising or tracking cookies. You can manage cookie preferences in 
            your browser settings at any time.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify registered users of material 
            changes via email or through our platform dashboard. Continued use of our services after 
            changes constitutes acceptance of the updated policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For privacy-related inquiries, data requests, or concerns, reach out to us at{" "}
            <a href="mailto:vynceai04@gmail.com" style={{ color: "#4285f4" }}>vynceai04@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
