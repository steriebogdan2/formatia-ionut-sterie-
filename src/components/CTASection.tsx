import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import CtaButton from './ui/CtaButton';
import { WHATSAPP_URL } from '../lib/site';

const CTASection = () => (
  <section aria-labelledby="cta-title" className="section-y bg-black">
    <div className="container-page max-w-4xl">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-gold/[0.07] to-transparent px-6 py-16 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          />

          <div className="relative">
            <Reveal delay={120}>
              <span className="mb-6 inline-flex items-center gap-2 font-montserrat text-sm uppercase tracking-wide text-gold">
                <Sparkles size={18} strokeWidth={1.5} aria-hidden="true" />
                Rezervări și Evenimente
              </span>
            </Reveal>

            <Reveal delay={200}>
              <h2
                id="cta-title"
                className="mb-6 text-balance font-playfair text-4xl text-gold md:text-5xl"
              >
                Fă-ți Evenimentul de Neuitat
              </h2>
            </Reveal>

            <Reveal delay={280}>
              <p className="mx-auto mb-10 max-w-2xl text-pretty font-montserrat text-lg text-white/60">
                Indiferent dacă este o nuntă, un botez sau o petrecere privată,
                Formația Ionut Sterie aduce energia și muzica potrivită pentru
                momentele tale speciale. Solicită o ofertă personalizată acum.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <CtaButton href={WHATSAPP_URL}>Solicită o ofertă</CtaButton>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
