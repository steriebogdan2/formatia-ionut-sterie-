import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'solid' | 'outline';
type Size = 'md' | 'lg';

interface CtaButtonProps {
  children: ReactNode;
  /** Internal route. Takes precedence over `href`. */
  to?: string;
  /** External URL; opened in a new tab. */
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}

/**
 * The site's primary action, in one place.
 *
 * Every gold pill used to carry its own copy of the same nine utility classes,
 * which is how padding and hover timings drift apart. Sharing them guarantees
 * identical interaction feedback everywhere.
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-montserrat font-medium transition-all duration-300 hover:-translate-y-0.5';

const variants: Record<Variant, string> = {
  solid:
    'bg-gold text-black hover:bg-[#E5C158] hover:shadow-lg hover:shadow-gold/30',
  outline: 'border border-gold/40 text-gold hover:bg-gold/10',
};

const sizes: Record<Size, string> = {
  md: 'px-8 py-3',
  lg: 'px-8 py-4',
};

const CtaButton = ({
  children,
  to,
  href,
  variant = 'solid',
  size = 'md',
  className = '',
}: CtaButtonProps) => {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  );
};

export default CtaButton;
