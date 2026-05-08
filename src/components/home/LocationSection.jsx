const LOCATIONS = [
  { topClass: 'top-[35%]', leftClass: 'left-[22%]', label: 'New York' },
  { topClass: 'top-[40%]', leftClass: 'left-[45%]', label: 'London' },
  { topClass: 'top-[42%]', leftClass: 'left-[55%]', label: 'Dubai' },
  { topClass: 'top-[55%]', leftClass: 'left-[72%]', label: 'Singapore' },
  { topClass: 'top-[60%]', leftClass: 'left-[80%]', label: 'Sydney' },
];

export default function LocationSection() {
  return (
    <section className="gradient-cta py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Presight 360</p>
        <h2 className="section-title mb-10 text-[clamp(1.5rem,3vw,2rem)]">
          OUR LOCATION
        </h2>

        {/* World Map */}
        <div className="rounded-xl overflow-hidden relative h-[380px] border border-white/07">
          <div className="absolute inset-0 bg-world-map opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(26,107,219,0.25)_0%,rgba(2,11,24,0.7)_100%)]" />

          {LOCATIONS.map((dot, i) => (
            <div
              key={i}
              className={`absolute -translate-x-1/2 -translate-y-1/2 ${dot.topClass} ${dot.leftClass}`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent-red shadow-[0_0_0_4px_rgba(232,70,42,0.3)] relative z-10" />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[rgba(2,11,24,0.85)] text-white text-[0.6rem] font-semibold px-1.5 py-0.5 rounded whitespace-nowrap border border-white/10">
                {dot.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
