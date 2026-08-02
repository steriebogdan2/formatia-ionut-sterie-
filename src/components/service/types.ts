import type { LucideIcon } from 'lucide-react';

/** A picture card used in the "Ce Oferim" and "Momente Speciale" grids. */
export interface MediaCard {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

/** A single reason-to-choose-us tile. */
export interface Advantage {
  icon: LucideIcon;
  title: string;
}

/** A titled grid section on a service landing page. */
export interface CardSection {
  title: string;
  lead: string;
  cards: MediaCard[];
}

/**
 * Everything that differs between the five service landing pages. The layout
 * itself lives in `ServiceLanding`, so the pages stay pure content.
 */
export interface ServiceLandingContent {
  /** Slug-ish key used to build unique heading ids. */
  id: string;
  seo: {
    title: string;
    description: string;
    path: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    body: string;
  };
  offer: CardSection;
  moments?: CardSection;
  advantages: {
    lead: string;
    items: Advantage[];
  };
  cta: {
    title: string;
    body: string;
  };
  /** Short service name used in the breadcrumb trail and Service schema. */
  serviceName: string;
}
