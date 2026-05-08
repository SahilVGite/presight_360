export default function Contact() {
  return (
    <>
      <section className="min-h-screen pt-[100px] bg-[linear-gradient(180deg,#020b18_0%,#05152a_100%)] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden border border-white\/07 bg-card-50">
            {/* Form */}
            <div className="p-10 md:p-14">
              <h1 className="font-display font-[900] uppercase mb-4 text-[clamp(2rem,4vw,3rem)]">
                LET'S CONNECT
              </h1>
              <p className="text-sm mb-8 text-secondary\/70 leading-[1.7]">
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
                  className="input-dark text-sm resize-y"
                />
                <div className="pt-2">
                  <button className="btn-primary px-7 py-3 text-sm">Submit →</button>
                </div>
                <p className="text-xs text-white/35">We respect your privacy. Your data will never be shared</p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="min-h-[400px] bg-[linear-gradient(135deg,rgba(7,29,56,0.8)_0%,rgba(26,107,219,0.1)_100%)] flex items-center justify-center text-white/10 text-xs">
              [ Contact Image ]
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
