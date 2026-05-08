/**
 * SectionHeader component
 * Props: label, title, subtitle, align ('left'|'center'), className
 */
export default function SectionHeader({ label, title, subtitle, align = 'left', className = '' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`${alignClass} ${className}`} style={{ maxWidth: align === 'center' ? '680px' : undefined }}>
      {label && <p className="section-label mb-3">{label}</p>}
      {title && (
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subtitle && (
        <p
          className="mt-4 text-sm leading-relaxed"
          style={{ color: 'rgba(168, 192, 214, 0.8)', maxWidth: '520px' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
