export default function PageHero({
  label,
  title,
  subtitle,
  bgImage,
  children,
  isStarsBg = false,
}) {
  return (
    <section
      className={[
        "relative overflow-hidden min-h-[85vh] flex items-center",
        bgImage ? "" : "gradient-page-hero",
      ].join(" ")}
      style={
        bgImage
          ? {
              background: `url(${bgImage}) center/cover no-repeat`,
            }
          : undefined
      }
    >
      {/* Decorative radial glow */}
      <div className="absolute left-0 top-0 w-1/2 h-full gradient-radial-blue pointer-events-none" />
      {isStarsBg && (
        <div className="starsBg absolute left-0 top-0 w-full h-full gradient-radial-blue pointer-events-none" />
      )}

      <div className="relative max-w-394 mx-auto px-6 w-full">
        {label && <p className="section-label mb-3">{label}</p>}
        <h1 className="font-display text-white font-bold uppercase leading-[1.1064] max-w-222.25 tracking-[0.02em] text-[clamp(2rem,5vw,3.125rem)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-[clamp(1rem,4vw,1.125rem)] max-w-xl text-secondary\/75 leading-[1.7]">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
