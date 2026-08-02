import { Mic2, Music4, Headphones, Sparkles, Wind, Camera } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import IconBadge from './ui/IconBadge';

interface OfferItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const offerItems: OfferItem[] = [
  {
    icon: Mic2,
    title: 'Solist & Solistă',
    description: 'Formație completă pentru evenimente memorabile.',
  },
  {
    icon: Music4,
    title: 'Repertoriu Variat',
    description:
      'Muzică populară, muzică de petrecere, muzică ușoară și manele la cerere.',
  },
  {
    icon: Headphones,
    title: 'DJ & Sonorizare',
    description:
      'Sunet profesionist și muzică adaptată fiecărui moment al evenimentului.',
  },
  {
    icon: Sparkles,
    title: 'Lumini & Efecte Speciale',
    description:
      'Lumini dinamice, fum greu pentru dansul mirilor și artificii Vulcan.',
  },
  {
    icon: Wind,
    title: 'Instrumente Live',
    description:
      'Clarinet, saxofon, acordeon și orgă pentru un spectacol autentic.',
  },
  {
    icon: Camera,
    title: 'Servicii Premium',
    description:
      'Oglindă foto și experiențe care transformă orice eveniment într-o amintire de neuitat.',
  },
];

const Offer = () => (
  <section
    aria-labelledby="offer-title"
    className="section-y bg-gradient-to-b from-gray-900 to-black"
  >
    <div className="container-page max-w-7xl">
      <Reveal className="heading-gap text-center">
        <h2
          id="offer-title"
          className="font-playfair text-4xl text-gold md:text-5xl"
        >
          Ce Oferim
        </h2>
      </Reveal>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {offerItems.map((item, index) => (
          <Reveal
            key={item.title}
            as="li"
            delay={index * 120}
            className="group rounded-lg bg-white/5 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
          >
            <IconBadge
              icon={item.icon}
              className="mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/20"
            />
            <h3 className="mb-3 font-playfair text-xl text-gold">
              {item.title}
            </h3>
            <p className="font-montserrat text-sm leading-relaxed text-white/70">
              {item.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Offer;
