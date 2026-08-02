import { Link } from 'react-router-dom';
import {
  Heart,
  Droplets,
  PartyPopper,
  Calendar,
  Music,
  Sparkles,
  Mic2,
  Wind,
  Volume2,
  Flame,
  MapPin,
  Clock,
  Library,
  Wand2,
  Music2,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import IconBadge from '../components/ui/IconBadge';
import CtaButton from '../components/ui/CtaButton';
import AdvantageGrid from '../components/service/AdvantageGrid';
import type { Advantage } from '../components/service/types';
import { ROUTES, WHATSAPP_URL } from '../lib/site';

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
}

interface OfferCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

/**
 * Links point at the canonical `/services/*` URLs. The Romanian `/servicii/*`
 * routes stay available for existing inbound links, but internal navigation
 * consistently uses the indexed address.
 */
const serviceCards: ServiceCard[] = [
  {
    icon: Heart,
    title: 'Nuntă',
    description:
      'Muzică live, instrumentiști profesioniști și efecte speciale care transformă ziua ta cea mai importantă într-o experiență de neuitat.',
    path: ROUTES.weddings,
  },
  {
    icon: Droplets,
    title: 'Botez',
    description:
      'Atmosferă caldă și muzică potrivită pentru un moment de pură emoție alături de familie și prieteni.',
    path: ROUTES.baptisms,
  },
  {
    icon: PartyPopper,
    title: 'Majorat',
    description:
      'Energie, ritm și un show live care face din sărbătorirea majoratului un eveniment de poveste.',
    path: ROUTES.majorate,
  },
  {
    icon: Calendar,
    title: 'Zile Onomastice',
    description:
      'Sărbătorește ziua de nume cu muzică live și o atmosferă autentic românească.',
    path: ROUTES.nameDays,
  },
  {
    icon: Music,
    title: 'Petreceri',
    description:
      'DJ, lumini dinamice și un repertoriu variat care ține dansul până în zori la orice petrecere privată.',
    path: ROUTES.parties,
  },
  {
    icon: Sparkles,
    title: 'Toate Serviciile',
    description:
      'Descoperă gama completă de servicii muzicale și de divertisment oferite de formația noastră.',
    path: ROUTES.services,
  },
];

const offerCategories: OfferCategory[] = [
  {
    icon: Mic2,
    title: 'Muzică Live',
    description:
      'Voci live și un repertoriu adaptat fiecărui moment, de la intrarea invitaților până la ultima melodie a serii.',
    items: [
      'Muzică Populară',
      'Muzică de Petrecere',
      'Muzică Ușoară',
      'Manele la cerere',
    ],
  },
  {
    icon: Music2,
    title: 'Instrumente Live',
    description:
      'Instrumentiști profesioniști care adaugă autenticitate și emoție fiecărui eveniment cu sunet acustic real.',
    items: ['Clarinet', 'Saxofon', 'Acordeon', 'Orgă'],
  },
  {
    icon: Sparkles,
    title: 'Divertisment & Atmosferă',
    description:
      'Efecte vizuale și sonore premium care transformă sala și creează o atmosferă de spectacol de neuitat.',
    items: [
      'DJ',
      'Lumini dinamice profesionale',
      'Mașină de fum greu pentru dansul mirilor',
      'Artificii Vulcan',
      'Oglindă Foto',
    ],
  },
];

const advantages: Advantage[] = [
  { icon: Clock, title: 'Peste 25 de ani experiență' },
  { icon: Library, title: 'Repertoriu variat' },
  { icon: Wand2, title: 'Atmosferă adaptată fiecărui eveniment' },
  { icon: Music2, title: 'Muzică live' },
  { icon: Wind, title: 'Instrumentiști profesioniști' },
  { icon: Volume2, title: 'Sonorizare de calitate' },
  { icon: Flame, title: 'Efecte speciale premium' },
  { icon: MapPin, title: 'Disponibilitate în toată România' },
];

const ServicesPage = () => (
  <>
    <Seo
      title="Servicii Formație Evenimente: Muzică Live, DJ & Efecte Premium"
      description="Servicii Formația Ionuț Sterie, formație nunți, formație botez, formație majorat și petreceri în toată România. Muzică live, clarinet live, saxofon live, DJ evenimente, lumini dinamice și efecte speciale premium."
      path={ROUTES.services}
      breadcrumbs={[{ name: 'Acasă', path: ROUTES.home }]}
    />

    {/* Hero */}
    <section
      aria-labelledby="services-hero-title"
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #D4AF37 0, transparent 40%), radial-gradient(circle at 80% 70%, #D4AF37 0, transparent 40%)',
        }}
      />
      <div className="container-page relative max-w-3xl text-center">
        <Reveal>
          <p className="mb-6 font-montserrat text-xs uppercase tracking-[0.3em] text-gold/80">
            Formația Ionuț Sterie
          </p>
          <h1
            id="services-hero-title"
            className="mb-8 text-balance font-playfair text-4xl leading-tight text-gold md:text-6xl"
          >
            Serviciile Noastre
          </h1>
          <p className="text-pretty font-montserrat text-lg leading-relaxed text-white/70">
            Descoperă serviciile oferite de Formația Ionuț Sterie și creează un
            eveniment memorabil alături de muzică live, instrumente profesioniste
            și efecte speciale premium.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Services Grid */}
    <section
      aria-labelledby="services-grid-title"
      className="section-y bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container-page max-w-7xl">
        <SectionHeading
          id="services-grid-title"
          title="Servicii pentru Fiecare Eveniment"
          lead="Indiferent de ocazie, formația noastră adaptează muzica și atmosfera pentru a transforma fiecare moment într-o amintire de neuitat."
          className="heading-gap"
        />

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card, index) => (
            <Reveal
              key={card.title}
              as="li"
              delay={index * 120}
              className="group flex h-full flex-col rounded-lg border border-white/5 bg-white/5 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/40"
            >
              <IconBadge
                icon={card.icon}
                className="mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/20"
              />
              <h3 className="mb-3 font-playfair text-xl text-gold">
                {card.title}
              </h3>
              <p className="mb-6 flex-grow font-montserrat text-sm leading-relaxed text-white/70">
                {card.description}
              </p>
              <Link
                to={card.path}
                className="mt-auto inline-flex items-center gap-2 font-montserrat text-sm text-gold transition-colors duration-200 group-hover:text-[#E5C158]"
              >
                Află mai multe
                <span className="sr-only"> despre {card.title}</span>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    {/* What We Offer */}
    <section
      aria-labelledby="services-offer-title"
      className="section-y bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container-page max-w-7xl">
        <SectionHeading
          id="services-offer-title"
          title="Ce Oferim"
          lead="O gamă completă de servicii muzicale și de divertisment, grupate profesional pentru a acoperi fiecare nevoie a evenimentului tău."
          className="heading-gap"
        />

        <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {offerCategories.map((category, index) => (
            <Reveal
              key={category.title}
              as="li"
              delay={index * 150}
              className="h-full rounded-lg border border-white/5 bg-white/5 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-gold/30"
            >
              <div className="mb-5 flex items-center gap-4">
                <IconBadge icon={category.icon} size="sm" />
                <h3 className="font-playfair text-xl text-gold">
                  {category.title}
                </h3>
              </div>
              <p className="mb-6 font-montserrat text-sm leading-relaxed text-white/60">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-montserrat text-sm text-white/80"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    {/* Why Choose Us */}
    <section
      aria-labelledby="services-advantages-title"
      className="section-y bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container-page max-w-7xl">
        <SectionHeading
          id="services-advantages-title"
          title="De Ce să Ne Alegi"
          lead="Experiență, profesionalism și pasiune pentru muzică, ingrediente care fac diferența la fiecare eveniment."
          className="heading-gap"
        />
        <AdvantageGrid items={advantages} />
      </div>
    </section>

    {/* Call to Action */}
    <section
      aria-labelledby="services-cta-title"
      className="section-y bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container-page max-w-4xl">
        <Reveal className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 via-black to-black p-10 text-center md:p-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, #D4AF37 0, transparent 60%)',
            }}
          />
          <div className="relative">
            <h2
              id="services-cta-title"
              className="mb-5 text-balance font-playfair text-3xl leading-tight text-gold md:text-4xl"
            >
              Pregătit să organizezi un eveniment memorabil?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-pretty font-montserrat text-lg leading-relaxed text-white/70">
              Solicită o ofertă personalizată și hai să transformăm evenimentul
              tău într-o experiență de neuitat.
            </p>
            <CtaButton href={WHATSAPP_URL} size="lg">
              Solicită Oferta
              <ArrowRight size={20} aria-hidden="true" />
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ServicesPage;
