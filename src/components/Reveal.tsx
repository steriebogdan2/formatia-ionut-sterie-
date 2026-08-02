import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds; capped so long grids never feel slow. */
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

/**
 * A grid of thirteen cards staggered at 90–120ms each would take over a second
 * to finish resolving. Capping the delay keeps the cascade readable while the
 * last card still lands promptly.
 */
const MAX_DELAY = 400;

const Reveal = ({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  // All supported tags accept the same subset of props we pass; narrowing to
  // 'div' keeps the JSX types simple without changing what is rendered.
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={`${className} transform-gpu transition-[opacity,transform] duration-700 ease-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0 will-change-[opacity,transform]'
      }`}
      style={{
        transitionDelay: visible ? `${Math.min(delay, MAX_DELAY)}ms` : '0ms',
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
