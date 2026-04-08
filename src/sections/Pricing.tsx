import { motion } from "framer-motion"
import { useCallback } from "react"

declare global {
  interface Window {
    Razorpay: any
  }
}

const addOns = [
  { 
    title: "WhatsApp Bot Integration", 
    desc: "Full conversational WhatsApp bot — customers order via chat, not just QR form", 
    price: "₹4,999", unit: "one-time" 
  },
  { 
    title: "Payment Gateway", 
    desc: "Razorpay integration — customers pay online before job goes to printer", 
    price: "₹3,999", unit: "one-time" 
  },
  { 
    title: "Multi-branch Setup", 
    desc: "Connect 2nd or 3rd shop location to the same system", 
    price: "₹5,999", unit: "per branch" 
  },
  { 
    title: "Custom Branding", 
    desc: "Your shop name, logo and colors on the order form", 
    price: "₹1,499", unit: "one-time" 
  },
  { 
    title: "SMS Notifications", 
    desc: "Customer gets SMS when order is received and ready", 
    price: "₹999", unit: "+ SMS costs" 
  },
  { 
    title: "Extra Training Session", 
    desc: "Additional hands-on training for staff or manager", 
    price: "₹999", unit: "per session" 
  },
]

export default function Pricing() {
  const handlePay = useCallback(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = () => {
      const options = {
        key: "rzp_test_XXXXXXXXXXXXXX", // Replace with your Razorpay Test Key
        amount: 200000, // Amount in paise (₹2,000)
        currency: "INR",
        name: "Vynce AI",
        description: "Subscription Payment",
        image: "/vynce-logo.png",
        handler: function (response: any) {
          alert("Payment successful! ID: " + response.razorpay_payment_id)
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#7c3aed",
        },
      }
      const rzp = new window.Razorpay(options)
      rzp.open()
    }
    document.body.appendChild(script)
  }, [])

  return (
    <section id="pricing" style={{ paddingTop: 80, paddingBottom: 80 }} className="relative bg-[#060608]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');
        .core-pricing {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          margin-bottom: 48px;
        }
        .addon-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.3s, transform 0.2s;
        }
        .addon-card:hover {
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-2px);
        }
        .roi-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 32px;
          margin-top: 48px;
          position: relative;
        }
        .roi-card::before {
          content: '';
          position: absolute;
          top: -1px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent);
          border-radius: 2px 2px 0 0;
        }
        .pay-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 36px; border-radius: 14px; border: none;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          color: white; font-weight: 700; font-size: 1rem;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: box-shadow 0.3s, transform 0.15s;
          box-shadow: 0 0 28px rgba(124,58,237,0.35);
          margin-top: 24px;
        }
        .pay-btn:hover {
          box-shadow: 0 0 40px rgba(124,58,237,0.5);
          transform: translateY(-2px);
        }
        .pay-btn:active { transform: translateY(0); }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 font-['DM_Sans',sans-serif]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-purple-300 mb-5" style={{ background: "rgba(255,255,255,0.05)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Pricing & Add-ons
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            Choose the clear, high-ROI plan that fits your business needs. 
          </p>
        </motion.div>

        {/* Core Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="core-pricing"
        >
          <h3 style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>Base System Setup</h3>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: "2.5rem", fontWeight: 700, color: "white" }}>₹11,999</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>setup</span>
            <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>+</span>
            <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "white" }}>₹2,000</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>/month</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 500, margin: "0 auto", fontSize: "0.95rem" }}>
            Includes the core intake software, digital order forms, and standard processing dashboard.
          </p>
          <button onClick={handlePay} className="pay-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Subscribe Now
          </button>
        </motion.div>

        {/* Add-ons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-5" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'DM Serif Display', serif" }}>
            Optional Modules & Integrations
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {addOns.map((addon) => (
              <div key={addon.title} className="addon-card">
                <div>
                  <h4 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: "1.05rem", marginBottom: 8 }}>{addon.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: 20 }}>
                    {addon.desc}
                  </p>
                </div>
                <div>
                  <span style={{ color: "#e46f44", fontWeight: 700, fontSize: "1.25rem", fontFamily: "'DM Serif Display', serif" }}>{addon.price}</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginLeft: 6 }}>{addon.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROI Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="roi-card"
        >
          <div style={{ textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 600, marginBottom: 16 }}>
            Return on Investment
          </div>
          <h3 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.15rem", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.5px" }}>
            How This Pays For Itself
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8 }}>
            At 200 customers/day, your staff currently spends ~3-4 minutes per customer collecting print requirements. That's <strong style={{ color: "white" }}>10-13 hours of staff time per day</strong> just on intake. This system handles intake automatically — freeing your staff to focus on fulfillment.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, marginTop: 12 }}>
            At even ₹100/hour saved, the ₹11,999 setup pays back in under <strong style={{ color: "white" }}>6 days</strong>. The ₹2,000/month subscription is less than <strong style={{ color: "white" }}>₹67/day</strong> — less than one staff member's hourly wage.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

