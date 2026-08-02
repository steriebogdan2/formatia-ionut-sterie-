import { useEffect } from 'react';
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
} from '../lib/site';
import {
  breadcrumbSchema,
  graph,
  webPageSchema,
  type Crumb,
  type JsonLd,
} from '../lib/structuredData';

interface SeoProps {
  /** Page title without the site-name suffix. */
  title: string;
  description?: string;
  /** App path, e.g. `/servicii/nunti`. Used for the canonical URL. */
  path?: string;
  /** Absolute URL of the social share image. */
  image?: string;
  /** Ancestors of the current page; the page itself is appended automatically. */
  breadcrumbs?: Crumb[];
  /** Extra JSON-LD nodes merged into the page graph. */
  schema?: JsonLd[];
  /** Set for pages that must stay out of the index (404, duplicates). */
  noIndex?: boolean;
}

const JSONLD_ID = 'page-jsonld';

/** Creates the tag on first use, then just updates it on later navigations. */
const upsertMeta = (
  attr: 'name' | 'property',
  key: string,
  content: string
) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
};

const upsertJsonLd = (data: JsonLd) => {
  let el = document.head.querySelector<HTMLScriptElement>(`#${JSONLD_ID}`);
  if (!el) {
    el = document.createElement('script');
    el.id = JSONLD_ID;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

/**
 * Keeps document metadata in sync with the active route.
 *
 * Everything is written imperatively into `<head>`, which keeps the dependency
 * footprint at zero while still giving each route its own title, description,
 * canonical URL, social cards and structured data.
 */
const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = OG_IMAGE,
  breadcrumbs,
  schema,
  noIndex = false,
}: SeoProps) => {
  // Serialising the object props lets the effect depend on their *contents*
  // rather than on identities that change on every render.
  const crumbKey = breadcrumbs
    ? breadcrumbs.map((crumb) => `${crumb.name}|${crumb.path}`).join('>')
    : '';
  const schemaKey = schema ? JSON.stringify(schema) : '';

  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    const url = absoluteUrl(path);

    document.title = fullTitle;

    upsertMeta('name', 'title', fullTitle);
    upsertMeta('name', 'description', description);
    upsertMeta(
      'name',
      'robots',
      noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
    );

    upsertCanonical(url);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:url', url);
    upsertMeta('name', 'twitter:image', image);

    const parents: Crumb[] = crumbKey
      ? crumbKey.split('>').map((entry) => {
          const [name, crumbPath] = entry.split('|');
          return { name, path: crumbPath };
        })
      : [];
    const extraSchema: JsonLd[] = schemaKey ? JSON.parse(schemaKey) : [];

    upsertJsonLd(
      graph([
        webPageSchema(fullTitle, description, path),
        ...(path === '/'
          ? []
          : [breadcrumbSchema([...parents, { name: title, path }])]),
        ...extraSchema,
      ])
    );
  }, [title, description, path, image, noIndex, crumbKey, schemaKey]);

  return null;
};

export default Seo;
