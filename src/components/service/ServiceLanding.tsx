import { Star, ArrowRight } from 'lucide-react';
import Seo from '../Seo';
import Reveal from '../Reveal';
import SectionHeading from '../ui/SectionHeading';
import CtaButton from '../ui/CtaButton';
import MediaCardGrid from './MediaCardGrid';
import AdvantageGrid from './AdvantageGrid';
import { ROUTES, SITE_NAME, WHATSAPP_URL } from '../../lib/site';
import { serviceSchema } from '../../lib/structuredData';
import type { ServiceLandingContent } from './types';

/**
 * Sections alternate between the two page gradients so each one starts where
 * the previous one ended. When an odd section count would leave the last
 * section finishing on grey, it falls back to solid black instead — that keeps
 * the join with the black footer seamless.
 */
const backgroundFor = (index: number, total: number): string => {
  const endsOnGrey = index % 2 === 0;
  if (index === total - 1 && endsOnGrey) return 'bg-black';
  return endsOnGrey
    ? 'bg-gradient-to-b from-black to-gray-900'
    : 'bg-gradient-to-b from-gray-900 to-black';
};

const ServiceLanding = ({ content }: { content: ServiceLandingContent }) => {
  const { id, seo, hero, intro, offer, moments, advantages, cta, serviceName } =
    content;

  const order: string[] = moments
    ? ['intro', 'offer', 'moments', 'advantages', 'cta']
    : ['intro', 'offer', 'advantages', 'cta'];
  const background: Record<string, string> = Object.fromEntries(
    order.map((key, index) => [key, backgroundFor(index, order.length)])
  );

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        breadcrumbs={[
          { name: 'Acasă', path: ROUTES.home },
          { name: 'Servicii', path: ROUTES.services },
        ]}
        schema={[serviceSchema(serviceName, seo.description, seo.path)]}
      />

      {/* Hero */}
      <section
        aria-labelledby={`${id}-hero-title`}
        className="relative flex min-h-[75vh] items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          {/*
            The hero image is this page's LCP element, so it is fetched at high
            priority rather than being discovered as a CSS background.
          */}
          <img
            src={hero.image}
            alt={hero.imageAlt}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="mb-6 translate-y-6 animate-fade-up font-montserrat text-xs uppercase tracking-[0.3em] text-gold/80 opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            {SITE_NAME}
          </p>
          <h1
            id={`${id}-hero-title`}
            className="mb-8 translate-y-6 animate-fade-up text-balance font-playfair text-4xl leading-tight text-gold opacity-0 md:text-6xl"
            style={{ animationDelay: '0.4s' }}
          >
            {hero.title}
          </h1>
          <p
            className="mb-10 translate-y-6 animate-fade-up text-pretty font-montserrat text-lg leading-relaxed text-white/80 opacity-0 md:text-xl"
            style={{ animationDelay: '0.6s' }}
          >
            {hero.subtitle}
          </p>
          <div
            className="flex translate-y-6 animate-fade-up flex-col justify-center gap-4 opacity-0 sm:flex-row"
            style={{ animationDelay: '0.8s' }}
          >
            <CtaButton href={WHATSAPP_URL} size="lg">
              Solicită o Ofertă
              <ArrowRight size={18} aria-hidden="true" />
            </CtaButton>
            <CtaButton to={ROUTES.repertoire} variant="outline" size="lg">
              Vezi Repertoriul
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Despre serviciu */}
      <section
        aria-labelledby={`${id}-intro-title`}
        className={`section-y ${background.intro}`}
      >
        <div className="container-page max-w-3xl text-center">
          <Reveal>
            <h2
              id={`${id}-intro-title`}
              className="mb-6 text-balance font-playfair text-3xl text-gold md:text-4xl"
            >
              {intro.title}
            </h2>
            <p className="text-pretty font-montserrat text-lg leading-relaxed text-white/70">
              {intro.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ce Oferim */}
      <section
        aria-labelledby={`${id}-offer-title`}
        className={`section-y ${background.offer}`}
      >
        <div className="container-page max-w-7xl">
          <SectionHeading
            id={`${id}-offer-title`}
            title={offer.title}
            lead={offer.lead}
            className="heading-gap"
          />
          <MediaCardGrid cards={offer.cards} />
        </div>
      </section>

      {/* Momente Speciale */}
      {moments && (
        <section
          aria-labelledby={`${id}-moments-title`}
          className={`section-y ${background.moments}`}
        >
          <div className="container-page max-w-7xl">
            <SectionHeading
              id={`${id}-moments-title`}
              title={moments.title}
              lead={moments.lead}
              className="heading-gap"
            />
            <MediaCardGrid cards={moments.cards} step={120} />
          </div>
        </section>
      )}

      {/* De Ce să Ne Alegi */}
      <section
        aria-labelledby={`${id}-advantages-title`}
        className={`section-y ${background.advantages}`}
      >
        <div className="container-page max-w-7xl">
          <SectionHeading
            id={`${id}-advantages-title`}
            title="De Ce să Ne Alegi"
            lead={advantages.lead}
            className="heading-gap"
          />
          <AdvantageGrid items={advantages.items} />
        </div>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby={`${id}-cta-title`}
        className={`section-y ${background.cta}`}
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
              <Star
                size={32}
                aria-hidden="true"
                className="mx-auto mb-6 text-gold"
              />
              <h2
                id={`${id}-cta-title`}
                className="mb-5 text-balance font-playfair text-3xl leading-tight text-gold md:text-4xl"
              >
                {cta.title}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-pretty font-montserrat text-lg leading-relaxed text-white/70">
                {cta.body}
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
};

export default ServiceLanding;
