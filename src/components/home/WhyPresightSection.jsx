export default function WhyPresightSection() {
  return (
    <section className=" relative py-12 px-6 lg:p-25 overflow-hidden flex items-center backdrop-blur-sm">
      {/* Background image */}
      <div className="absolute inset-0 bg-office-image" />
      <div className="absolute inset-0 gradient-why-overlay" />

      <div className="relative max-w-427.75 p-6 md:p-12 lg:p-24 mx-auto w-full bg-glass-effect">
        <h2 className="section-title">
          WHY PRESIGHT 360
        </h2>
        <p className="[font-size:var(--fs-title-md)] font-normal leading-normal mt-4 md:mt-8 lg:mt-18 text-white">
          At PreSight 360, we merge global intelligence capabilities with operational readiness to help clients succeed in high-stakes environments. Our approach is defined by precision, discretion, and relentless commitment to foresight — enabling our clients to navigate emerging threats, secure personnel, and make decisions with confidence.
        </p>
      </div>
    </section>
  );
}
