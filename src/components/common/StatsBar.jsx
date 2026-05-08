const DEFAULT_STATS = [
  { value: '400+', label: 'Projects Completed' },
  { value: '15+', label: 'Successful Years' },
  { value: '98%', label: 'Client Retention' },
  { value: '10+', label: 'Countries' },
];

export default function StatsBar({ stats = DEFAULT_STATS }) {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, rgba(26,107,219,0.08) 0%, rgba(2,11,24,0.95) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 24px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </p>
              <p
                className="mt-2 text-xs uppercase tracking-widest"
                style={{ color: 'rgba(168,192,214,0.6)', letterSpacing: '0.1em' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
