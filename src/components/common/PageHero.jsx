export default function PageHero({ label, title, subtitle, bgImage, children }) {
  return (
    <section
      className={[
        'relative overflow-hidden min-h-[40vh] flex items-end pt-[120px] pb-[60px]',
        bgImage ? '' : 'gradient-page-hero',
      ].join(' ')}
      style={
        bgImage
          ? {
              background: `linear-gradient(to right, rgba(2,11,24,0.92) 50%, rgba(2,11,24,0.5) 100%), url(${bgImage}) center/cover no-repeat`,
            }
          : undefined
      }
    >
      {/* Decorative radial glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full gradient-radial-blue pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {label && <p className="section-label mb-3">{label}</p>}
        <h1 className="font-display text-white font-[800] uppercase leading-[1.05] max-w-[700px] tracking-[0.02em] text-[clamp(2rem,5vw,3.5rem)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-sm max-w-xl text-secondary\/75 leading-[1.7]">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
