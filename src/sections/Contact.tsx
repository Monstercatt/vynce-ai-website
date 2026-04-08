export default function Contacts() {

  return (
    <section id="contact" className="min-h-screen bg-[#060608] py-16 px-4 font-['DM_Sans',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');

        .contact-input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          font-size: 0.9rem;
          color: rgba(255,255,255,0.9);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.35); }
        .contact-input:focus {
          border-color: #4285f4;
          box-shadow: 0 0 0 3px rgba(66,133,244,0.12);
        }
        .contact-input.error { border-color: #fc8181; }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.01em;
        }
        .submit-btn:hover {
          box-shadow: 0 4px 16px rgba(124,58,237,0.35);
          transform: translateY(-1px);
        }
        .submit-btn:active { transform: translateY(0); }

        .discord-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: #5865F2;
          color: white;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
        }
        .discord-btn:hover {
          background: #4752C4;
          box-shadow: 0 4px 14px rgba(88,101,242,0.4);
          transform: translateY(-1px);
        }

        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          box-shadow: none;
          backdrop-filter: blur(6px);
        }

        .card h1,
        .card h2,
        .card h3,
        .card label {
          color: rgba(255,255,255,0.92) !important;
        }

        .card p {
          color: rgba(255,255,255,0.6) !important;
        }

        .success-animation {
          animation: fadeInScale 0.4s ease;
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Get in Touch
          </h1>
          <p className="text-white/50 text-base">We'd love to hear from you. Reach out anytime.</p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {/* Information panel */}
          <div className="flex flex-col gap-6 w-full">
            <div className="card p-7">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Enterprise cooperation</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                If you are an enterprise looking for customized plans and business cooperation, please contact us at{" "}
                <a href="mailto:vynceai04@gmail.com" className="text-[#4285f4] hover:underline font-medium">
                  vynceai04@gmail.com
                </a>
              </p>
            </div>

            <div className="card p-7">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Customer support</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                If you have any questions, suggestions or requirements, please contact us at{" "}
                <a href="mailto:vynceai04@gmail.com" className="text-[#4285f4] hover:underline font-medium">
                  vynceai04@gmail.com
                </a>
              </p>
            </div>

            <div className="card p-7 pb-5">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Need Help Right Now?</h2>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Get direct access to our support team for quick issue resolution on Discord.
              </p>
              <a href="https://discord.gg/JAXdwVhX" target="_blank" rel="noopener noreferrer" className="discord-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join Discord server
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
