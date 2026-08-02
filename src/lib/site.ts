/**
 * Single source of truth for site-wide constants.
 * Keeping these in one place avoids the string drift that creeps into
 * hand-edited meta tags, structured data and sitemaps.
 */

export const SITE_NAME = 'Formația Ionut Sterie';
export const SITE_URL = 'https://formatiaionutsterie.com';
export const SITE_LOCALE = 'ro_RO';

export const DEFAULT_TITLE =
  'Formația Ionut Sterie - Muzică Populară și de Petrecere din Târgoviște';
export const DEFAULT_DESCRIPTION =
  'Descoperă ritmurile vibrante ale Formației Ionut Sterie, lideri în muzică populară și de petrecere în Târgoviște. Vizitează site-ul pentru melodii captivante și evenimente memorabile!';

export const OG_IMAGE = 'https://i.imgur.com/JJhl0xt.jpeg';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 800;

export const PHONE_DISPLAY = '+40 773 306 802';
export const PHONE_E164 = '+40773306802';
export const PHONE_HREF = 'tel:+40773306802';
export const EMAIL = 'ionutsterie1979@gmail.com';
export const EMAIL_HREF = 'mailto:ionutsterie1979@gmail.com';
export const WHATSAPP_URL = 'https://wa.me/40773306802';

export const SOCIAL_LINKS = {
  instagram:
    'https://www.instagram.com/formatia_ionut_sterie?igsh=MXJuMXFocmdwZWxwaA==',
  youtube: 'https://www.youtube.com/@FormatiaIonutSterie/featured',
  facebook: 'https://www.facebook.com/FormatiaIonutSteriesiMagdalenabanu',
  tiktok: 'https://www.tiktok.com/@formatiaionut.sterie',
  whatsapp: WHATSAPP_URL,
} as const;

export const GA_MEASUREMENT_ID = 'G-CLMNK6CHCP';

/**
 * Every canonical route on the site, in Romanian.
 *
 * Routing, navigation, footer links, breadcrumbs, structured data and the
 * sitemap all read from this object, so a URL can only ever be changed in one
 * place. Service pages stay nested under `/servicii` to keep the hierarchy the
 * breadcrumbs describe.
 */
export const ROUTES = {
  home: '/',
  about: '/despre-noi',
  services: '/servicii',
  weddings: '/servicii/nunti',
  baptisms: '/servicii/botezuri',
  majorate: '/servicii/majorate',
  nameDays: '/servicii/zile-onomastice',
  parties: '/servicii/petreceri',
  repertoire: '/repertoriu',
  reviews: '/recenzii',
  contact: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;

/**
 * English URLs the site used before it was localised.
 *
 * The host issues real 301s for these (see `public/_redirects` and
 * `vercel.json`); the router also maps them client-side so in-app links and
 * any bookmark still resolve if the app is served without that configuration.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/about': ROUTES.about,
  '/services': ROUTES.services,
  '/services/weddings': ROUTES.weddings,
  '/services/baptisms': ROUTES.baptisms,
  '/services/majorate': ROUTES.majorate,
  '/services/name-days': ROUTES.nameDays,
  '/services/parties': ROUTES.parties,
  '/repertoire': ROUTES.repertoire,
  '/reviews': ROUTES.reviews,
};

/** Builds an absolute URL from an app path. */
export const absoluteUrl = (path: string = ROUTES.home): string =>
  `${SITE_URL}${path === '/' ? '/' : path.replace(/\/+$/, '')}`;
