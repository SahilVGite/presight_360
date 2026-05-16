export default function PageHero({
  label,
  title,
  subtitle,
  bgImage,
  children,
  isStarsBg = false,
  isGradientBg = true,
}) {
  return (
    <section
      className={[
        "relative overflow-hidden min-h-[85vh] flex items-center",
        !bgImage ? "gradient-page-hero" : "",
      ].join(" ")}
    >
      {/* Background image at 30% opacity */}
      {bgImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
          }}
        />
      )}

      {/* Decorative radial glow */}
      {isGradientBg && (
        <div className="absolute left-0 top-0 w-1/2 h-full gradient-radial-blue pointer-events-none" />
      )}
      {isStarsBg && (
        <div className="starsBg absolute left-0 top-0 w-full h-full gradient-radial-blue pointer-events-none" />
      )}

      <div className="relative main-wrapper w-full">
        {label && <p className="section-label mb-3">{label}</p>}
        <h1 className="uppercase max-w-[56.875rem] section-title">
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