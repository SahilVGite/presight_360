export default function WhyPresightSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden min-h-[320px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-office-image opacity-[0.18]" />
      <div className="absolute inset-0 gradient-why-overlay" />

      <div className="relative max-w-6xl mx-auto w-full">
        <p className="section-label mb-3">Why Presight 360</p>
        <h2 className="font-display font-[900] uppercase leading-[1.1] max-w-[700px] tracking-[0.02em] text-[clamp(1.6rem,3.5vw,2.6rem)]">
          WHY PRESIGHT 360
        </h2>
        <p className="text-sm leading-relaxed mt-4 max-w-2xl text-secondary\/70">
          At PreSight 360, we merge global intelligence capabilities with operational readiness to help clients succeed in high-stakes environments. Our approach is defined by precision, discretion, and relentless commitment to foresight — enabling our clients to navigate emerging threats, secure personnel, and make decisions with confidence.
        </p>
      </div>
    </section>
  );
}
