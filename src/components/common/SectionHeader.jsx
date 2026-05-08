export default function SectionHeader({ label, title, subtitle, align = 'left', className = '' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  const maxWClass  = align === 'center' ? 'max-w-[680px]' : '';

  return (
    <div className={`${alignClass} ${maxWClass} ${className}`}>
      {label && <p className="section-label mb-3">{label}</p>}
      {title && (
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-secondary\/80 max-w-[520px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
