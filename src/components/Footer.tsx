import { Link } from 'react-router-dom';
import {
  Instagram,
  Youtube,
  MessageCircle,
  Facebook,
  type LucideIcon,
} from 'lucide-react';
import Reveal from './Reveal';
import { ROUTES, SITE_NAME, SOCIAL_LINKS } from '../lib/site';

interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, icon: Instagram },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, icon: Youtube },
  { label: 'WhatsApp', href: SOCIAL_LINKS.whatsapp, icon: MessageCircle },
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, icon: Facebook },
];

const quickLinks = [
  { name: 'Nunți', to: ROUTES.weddings },
  { name: 'Botezuri', to: ROUTES.baptisms },
  { name: 'Majorate', to: ROUTES.majorate },
  { name: 'Zile Onomastice', to: ROUTES.nameDays },
  { name: 'Petreceri', to: ROUTES.parties },
];

/**
 * The negative margin keeps the icons optically where they were while giving
 * each link a ~40px tap target instead of a bare 20px glyph.
 */
const SocialRow = ({ className = '' }: { className?: string }) => (
  <ul className={`flex items-center gap-2 ${className}`}>
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${SITE_NAME} pe ${label}`}
          className="-m-1 inline-flex items-center justify-center rounded-full p-2.5 text-white/60 transition-colors duration-300 hover:text-gold"
        >
          <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-black py-12">
    <div className="container-page max-w-7xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal>
          <h2 className="mb-4 font-playfair text-2xl text-gold">{SITE_NAME}</h2>
          <p className="font-montserrat text-white/60">
            Muzică autentică pentru momente de neuitat
          </p>
          <h3 className="mb-3 mt-[18px] font-playfair text-xl font-semibold text-gold">
            Social Media
          </h3>
          <SocialRow />
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mb-4 font-playfair text-xl text-gold">
            Link-uri Rapide
          </h3>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="-mx-2 inline-block rounded px-2 py-1.5 font-montserrat text-white/60 transition-colors duration-200 hover:text-gold"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
        <p className="font-montserrat text-sm text-white/60">
          © {new Date().getFullYear()} {SITE_NAME}. Toate drepturile rezervate.
        </p>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <SocialRow />

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://kitamaru.ro/images/anpc/anpc-sal.svg"
                alt="ANPC – Soluționarea Alternativă a Litigiilor (SAL)"
                width={250}
                height={48}
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://kitamaru.ro/images/anpc/anpc-sol.svg"
                alt="ANPC – Soluționarea Online a Litigiilor (SOL)"
                width={250}
                height={48}
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
