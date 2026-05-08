const DEFAULT_STATS = [
  { value: '400+', label: 'Projects Completed' },
  { value: '15+',  label: 'Successful Years' },
  { value: '98%',  label: 'Client Retention' },
  { value: '10+',  label: 'Countries' },
];

export default function StatsBar({ stats = DEFAULT_STATS }) {
  return (
    <section className="gradient-stats border-t border-white\/06 border-b border-white\/06 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-[800] text-white leading-none tracking-[-0.02em] text-[clamp(2.5rem,5vw,4rem)]">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-secondary\/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
