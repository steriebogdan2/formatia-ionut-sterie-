import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  MessageCircle,
  Facebook,
  type LucideIcon,
} from 'lucide-react';
import Reveal from './Reveal';
import IconBadge from './ui/IconBadge';
import CtaButton from './ui/CtaButton';
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from '../lib/site';

interface ContactCard {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const cards: ContactCard[] = [
  {
    icon: Phone,
    label: 'Telefon',
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    external: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: EMAIL_HREF,
    external: false,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@formatia_ionut_sterie',
    href: SOCIAL_LINKS.instagram,
    external: true,
  },
  {
    icon: Youtube,
    label: 'YouTube',
    value: '@FormatiaIonutSterie',
    href: SOCIAL_LINKS.youtube,
    external: true,
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Ionut Sterie',
    href: SOCIAL_LINKS.facebook,
    external: true,
  },
];

const Contact = () => (
  <section aria-labelledby="contact-title" className="section-y bg-black">
    <div className="container-page max-w-7xl">
      <Reveal className="heading-gap text-center">
        <h1
          id="contact-title"
          className="mb-6 text-balance font-playfair text-4xl text-gold md:text-5xl"
        >
          Contactează Formația Ionut Sterie
        </h1>
        <p className="mx-auto max-w-2xl text-pretty font-montserrat text-lg text-white/60">
          Suntem aici să transformăm evenimentul tău într-un moment de neuitat.
          Contactează-ne prin canalul preferat.
        </p>
      </Reveal>

      <ul className="mx-auto mb-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <Reveal key={card.label} as="li" delay={index * 120}>
            <a
              href={card.href}
              {...(card.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={`${card.label}: ${card.value}`}
              className="group flex h-full items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/[0.04] hover:shadow-lg hover:shadow-gold/10"
            >
              <IconBadge
                icon={card.icon}
                className="text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/20"
              />
              <div className="min-w-0">
                <p className="mb-1 font-montserrat text-sm uppercase tracking-wide text-gold">
                  {card.label}
                </p>
                <p className="truncate font-montserrat text-lg text-white">
                  {card.value}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200}>
        <div className="text-center">
          <CtaButton href={WHATSAPP_URL}>
            <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
            Contactează-ne pe WhatsApp
          </CtaButton>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
