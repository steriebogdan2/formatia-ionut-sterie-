import type { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  size?: 'sm' | 'md';
  className?: string;
}

const dimensions = {
  sm: { box: 'h-12 w-12', glyph: 24 },
  md: { box: 'h-14 w-14', glyph: 28 },
} as const;

/**
 * The gold ring that precedes a card title. Centralised so the circle size,
 * border and icon stroke stay identical across every card variant.
 */
const IconBadge = ({ icon: Icon, size = 'md', className = '' }: IconBadgeProps) => {
  const { box, glyph } = dimensions[size];
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 ${box} ${className}`}
    >
      <Icon
        size={glyph}
        strokeWidth={1.5}
        aria-hidden="true"
        className="text-gold"
      />
    </div>
  );
};

export default IconBadge;
