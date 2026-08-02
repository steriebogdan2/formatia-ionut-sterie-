import { GitBranch as BrandTiktok, MessageCircle } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from '../lib/site';

const HERO_IMAGE = 'https://i.imgur.com/JJhl0xt.jpeg';

const Hero = () => (
  <section
    aria-labelledby="hero-title"
    /*
      `svh` keeps the hero exactly one visible viewport tall on mobile, so the
      call-to-action buttons are never pushed under the browser chrome.
    */
    className="relative flex min-h-screen items-center justify-center supports-[height:100svh]:min-h-[100svh]"
  >
    <div className="absolute inset-0">
      {/*
        A real <img> rather than a CSS background: it is the LCP element, and
        only an element can carry fetchPriority, which pairs with the preload
        in index.html to start the download in the very first round trip.
      */}
      <img
        src={HERO_IMAGE}
        alt="Formația Ionut Sterie cântând live pe scenă la un eveniment"
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    <div className="relative z-10 px-4 text-center">
      <h1
        id="hero-title"
        className="mb-6 translate-y-6 animate-fade-up text-balance font-playfair text-5xl text-gold opacity-0 md:text-7xl"
        style={{ animationDelay: '0.2s' }}
      >
        {SITE_NAME}
      </h1>
      <p
        className="mb-8 translate-y-6 animate-fade-up text-pretty font-montserrat text-xl text-white/90 opacity-0 md:text-2xl"
        style={{ animationDelay: '0.5s' }}
      >
        Atmosferă memorabilă la nunți, botezuri, majorate și petreceri în toată
        România.
      </p>

      <a
        href={SOCIAL_LINKS.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex translate-y-6 animate-fade-up items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-3 font-montserrat text-black opacity-0 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#D4AF37]/30"
        style={{ animationDelay: '0.8s' }}
      >
        <BrandTiktok size={24} aria-hidden="true" />
        Descoperă mai multe piese pe TikTok
      </a>

      <div
        className="mt-5 translate-y-6 animate-fade-up opacity-0"
        style={{ animationDelay: '0.95s' }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-3 font-montserrat text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#D4AF37]/30"
        >
          <MessageCircle size={24} aria-hidden="true" />
          Solicită o ofertă
        </a>
      </div>

      <a
        href={PHONE_HREF}
        className="mt-3 inline-block px-3 py-2 font-montserrat text-sm text-white/70 transition-colors duration-200 hover:text-white"
      >
        <span aria-hidden="true">📞 </span>
        <span className="sr-only">Sună la </span>
        {PHONE_DISPLAY}
      </a>
    </div>
  </section>
);

export default Hero;
