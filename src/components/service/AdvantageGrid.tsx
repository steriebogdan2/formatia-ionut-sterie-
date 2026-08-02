import Reveal from '../Reveal';
import IconBadge from '../ui/IconBadge';
import type { Advantage } from './types';

interface AdvantageGridProps {
  items: Advantage[];
}

/** The "De Ce să Ne Alegi" tile row. */
const AdvantageGrid = ({ items }: AdvantageGridProps) => (
  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((advantage, index) => (
      <Reveal
        key={advantage.title}
        as="li"
        delay={index * 100}
        className="flex h-full flex-col items-center rounded-lg border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
      >
        <IconBadge icon={advantage.icon} className="mb-4" />
        <p className="text-pretty font-montserrat text-sm leading-relaxed text-white/80">
          {advantage.title}
        </p>
      </Reveal>
    ))}
  </ul>
);

export default AdvantageGrid;
