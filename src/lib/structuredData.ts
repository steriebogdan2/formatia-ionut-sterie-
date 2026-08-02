import { SITE_URL, absoluteUrl } from './site';

/** JSON-LD is untyped by nature; a shallow record keeps it readable. */
export type JsonLd = Record<string, unknown>;

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Per-page structured data.
 *
 * The site-wide MusicGroup, LocalBusiness and WebSite nodes are served
 * statically from index.html, so crawlers see them without running the app.
 * These builders add only what changes per route, referencing the static nodes
 * by `@id`.
 */

export const webPageSchema = (
  title: string,
  description: string,
  path: string
): JsonLd => ({
  '@type': 'WebPage',
  '@id': `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: title,
  description,
  inLanguage: 'ro-RO',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
});

export const breadcrumbSchema = (crumbs: Crumb[]): JsonLd => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

/** Describes one bookable service offered by the band. */
export const serviceSchema = (
  name: string,
  description: string,
  path: string
): JsonLd => ({
  '@type': 'Service',
  '@id': `${absoluteUrl(path)}#service`,
  name,
  description,
  serviceType: name,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'România' },
  url: absoluteUrl(path),
});

/** Wraps one or more schema nodes in a single `@graph` document. */
export const graph = (nodes: JsonLd[]): JsonLd => ({
  '@context': 'https://schema.org',
  '@graph': nodes,
});
