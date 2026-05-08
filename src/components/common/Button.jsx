import { ArrowRight } from 'lucide-react';

/**
 * Button variants: 'primary' | 'outline' | 'ghost'
 * Sizes: 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  as: Tag = 'button',
  ...props
}) {
  const sizeStyles = {
    sm: { padding: '8px 18px', fontSize: '0.8rem' },
    md: { padding: '11px 24px', fontSize: '0.875rem' },
    lg: { padding: '14px 32px', fontSize: '1rem' },
  };

  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : '';

  return (
    <Tag
      type={Tag === 'button' ? type : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClass} font-medium ${className}`}
      style={{ ...sizeStyles[size], opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight size={15} />}
    </Tag>
  );
}
