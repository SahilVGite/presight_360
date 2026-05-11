export default function WhyPresightSection() {
  return (
    <section className=" relative p-[6.25rem] overflow-hidden flex items-center ">
      {/* Background image */}
      <div className="absolute inset-0 bg-office-image" />
      <div className="absolute inset-0 gradient-why-overlay" />

      <div className="relative max-w-[106.9375rem] p-24 mx-auto w-full bg-glass-effect">
        <h2 className="section-title">
          WHY PRESIGHT 360
        </h2>
        <p className="text-[2rem] font-normal leading-normal mt-[4.6875rem] text-white">
          At PreSight 360, we merge global intelligence capabilities with operational readiness to help clients succeed in high-stakes environments. Our approach is defined by precision, discretion, and relentless commitment to foresight — enabling our clients to navigate emerging threats, secure personnel, and make decisions with confidence.
        </p>
      </div>
    </section>
  );
}
