import { ArrowRight } from 'lucide-react';

const sizeClasses = {
  sm: `
    px-5 pr-2.5 py-1 md:py-2
    text-[0.9rem]
    gap-3
    rounded-full
  `,

  md: `
    px-7 pr-3.5 py-2 md:py-[10px]
    text-[1.05rem]
    gap-4
    rounded-full
  `,

  lg: `
    px-8 pr-4 py-1.5 md:py-3
    text-[1.15rem]
    gap-5
    rounded-full
  `,
};

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
  const variantClass =
    variant === 'primary'
      ? `
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden

        bg-[#DB3B3B]

        text-white
        font-medium
        tracking-[0.01em]

        transition-all
        duration-300
      `
      : variant === 'outline'
      ? `
        bg-transparent
        text-white
      `
      : '';

  return (
    <Tag
      type={Tag === 'button' ? type : undefined}
      onClick={onClick}
      disabled={disabled}
      className={[
        variantClass,
        sizeClasses[size],
        'group',
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer',
        className,
      ].join(' ')}
      {...props}
    >
      {/* Glass shine */}
      {variant === 'primary' && (
        <span
          className="
            absolute
            inset-0
            rounded-full
            pointer-events-none
          "
        />
      )}

      {/* Text */}
      <span className="relative z-10">
        {children}
      </span>

      {/* Arrow */}
      {showArrow && (
        <span
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            w-[35px]
            h-[35px]
            md:w-[48px]
            md:h-[48px]

            rounded-full

            bg-white/20
            border border-white/15

            backdrop-blur-2xl

            transition-all
            duration-300
          "
        >
          <ArrowRight
            size={26}
            strokeWidth={2}
            className="text-white"
          />
        </span>
      )}
    </Tag>
  );
}
