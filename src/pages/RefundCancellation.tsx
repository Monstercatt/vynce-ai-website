import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function RefundCancellation() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Refund & Cancellation Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginBottom: 24 }}>
            Effective date: April 8, 2026 · Last updated: April 8, 2026
          </p>

          <p>
            We want you to feel confident choosing Vynce AI. This policy outlines how refunds, 
            cancellations, and credits work across our subscription plans and custom automation services.
          </p>

          <h2>1. Free Trial</h2>
          <p>
            We offer a free trial period on eligible plans so you can explore our platform before 
            committing. No payment is required during the trial. If you choose not to continue, simply 
            cancel before the trial ends — you won't be charged.
          </p>

          <h2>2. Subscription Cancellations</h2>
          <ul>
            <li>You may cancel your subscription at any time from your account dashboard or by emailing us</li>
            <li>Cancellations take effect at the end of your current billing cycle — you'll retain access until then</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Annual plans:</strong> If you cancel an annual subscription mid-term, you'll receive a prorated credit for the unused months, applicable toward future services</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Monthly plans:</strong> No partial refunds are issued for the current billing month</li>
          </ul>

          <h2>3. Custom Automation & Setup Fees</h2>
          <p>
            For bespoke automation setups, integrations, and custom workflow development:
          </p>
          <ul>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Setup fees are non-refundable once the deliverable has been deployed or delivered to you</strong></li>
            <li>If a project is cancelled before delivery, you will be refunded the unused portion minus any work already completed</li>
            <li>Milestone-based projects are refundable only for milestones not yet started</li>
          </ul>

          <h2>4. Refund Eligibility</h2>
          <p>Refunds may be issued in the following cases:</p>
          <ul>
            <li>You were charged in error (e.g., duplicate billing, post-cancellation charge)</li>
            <li>A critical platform issue entirely prevented you from using the service during the billing period</li>
            <li>The service delivered materially differs from what was agreed upon in the project scope</li>
          </ul>

          <h2>5. How to Request a Refund</h2>
          <ul>
            <li>Email us at <a href="mailto:vynceai04@gmail.com" style={{ color: "#4285f4" }}>vynceai04@gmail.com</a> with your account details, invoice/transaction ID, and reason for the request</li>
            <li>Our team will review and respond within 5 business days</li>
            <li>Approved refunds are processed within 5–7 business days to the original payment method via Razorpay</li>
          </ul>

          <h2>6. Non-Refundable Items</h2>
          <ul>
            <li>Completed and delivered custom automation setups</li>
            <li>Third-party licence or API costs incurred on your behalf</li>
            <li>Services used during a billing period where no technical issues occurred</li>
          </ul>

          <h2>7. Contact</h2>
          <p>
            For any billing, refund, or cancellation questions, reach out at{" "}
            <a href="mailto:vynceai04@gmail.com" style={{ color: "#4285f4" }}>vynceai04@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
