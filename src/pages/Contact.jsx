import PageHero from '../components/common/PageHero';

export default function Contact() {
  return (
    <>
      <section
        style={{
          minHeight: '100vh',
          paddingTop: '100px',
          background: 'linear-gradient(180deg, #020b18 0%, #05152a 100%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(7,29,56,0.5)' }}
          >
            {/* Form */}
            <div className="p-10 md:p-14">
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                LET'S CONNECT
              </h1>
              <p className="text-sm mb-8" style={{ color: 'rgba(168,192,214,0.7)', lineHeight: 1.7 }}>
                Our global team is ready to help you determine the security and risk management path that's right for you.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Last Name" className="input-dark text-sm" />
                  <input type="text" placeholder="First Name" className="input-dark text-sm" />
                </div>
                <input type="email" placeholder="Email" className="input-dark text-sm" />
                <input type="tel" placeholder="Phone Number" className="input-dark text-sm" />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="input-dark text-sm"
                  style={{ resize: 'vertical' }}
                />

                <div className="pt-2">
                  <button className="btn-primary px-7 py-3 text-sm">
                    Submit →
                  </button>
                </div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  We respect your privacy. Your data will never be shared
                </p>
              </div>
            </div>

            {/* Image */}
            <div
              style={{
                minHeight: '400px',
                background: 'linear-gradient(135deg, rgba(7,29,56,0.8) 0%, rgba(26,107,219,0.1) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.1)',
                fontSize: '0.75rem',
              }}
            >
              [ Contact Image ]
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
