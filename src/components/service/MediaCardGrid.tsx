import Reveal from '../Reveal';
import type { MediaCard } from './types';

interface MediaCardGridProps {
  cards: MediaCard[];
  /** Stagger step in ms; smaller for the long thirteen-card grids. */
  step?: number;
}

/**
 * The image-led card grid shared by every service page.
 *
 * `h-full` plus a growing body means every card in a row ends on the same
 * baseline, however long the copy is.
 */
const MediaCardGrid = ({ cards, step = 90 }: MediaCardGridProps) => (
  <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {cards.map((card, index) => {
      const Icon = card.icon;
      return (
        <Reveal
          key={card.title}
          as="li"
          delay={index * step}
          className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/20"
        >
          <div className="relative h-56 overflow-hidden">
            {/*
              A real <img> instead of a CSS background so the browser can defer
              it with native lazy loading; the rendering is identical.
            */}
            <img
              src={card.image}
              alt={`${card.title} la un eveniment cu Formația Ionut Sterie`}
              width={940}
              height={650}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full transform-gpu object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/15 backdrop-blur-sm">
              <Icon
                size={22}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-gold"
              />
            </div>
            <h3 className="absolute bottom-4 left-5 right-5 text-balance font-playfair text-xl text-gold">
              {card.title}
            </h3>
          </div>

          <div className="flex-1 bg-gradient-to-b from-gray-900 to-black p-5">
            <p className="font-montserrat text-sm leading-relaxed text-white/70">
              {card.description}
            </p>
          </div>
        </Reveal>
      );
    })}
  </ul>
);

export default MediaCardGrid;
