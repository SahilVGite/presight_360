/**
 * PageHero - full-width banner for inner pages
 * Props: label, title, subtitle, bgImage (optional)
 */
export default function PageHero({ label, title, subtitle, bgImage, children }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: '120px',
        paddingBottom: '60px',
        background: bgImage
          ? `linear-gradient(to right, rgba(2,11,24,0.92) 50%, rgba(2,11,24,0.5) 100%), url(${bgImage}) center/cover no-repeat`
          : 'linear-gradient(135deg, #020b18 0%, #05152a 60%, #071d38 100%)',
      }}
    >
      {/* Decorative globe-like gradient */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(ellipse at 80% 50%, rgba(26,107,219,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {label && <p className="section-label mb-3">{label}</p>}
        <h1
          className="font-display text-white"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            textTransform: 'uppercase',
            maxWidth: '700px',
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-sm max-w-xl" style={{ color: 'rgba(168,192,214,0.75)', lineHeight: 1.7 }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
