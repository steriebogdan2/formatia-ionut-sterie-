import {
  Music3,
  PartyPopper,
  Music2,
  Mic2,
  Music,
  Disc3,
  Music4,
  Wind,
  Headphones,
  Lightbulb,
  Cloud,
  Flame,
  Camera,
} from 'lucide-react';
import type { MediaCard } from './types';

/**
 * The "Ce Oferim" cards are the same thirteen services on every landing page —
 * same icons, same titles, same photos. Only the copy is written per event
 * type, so only the copy lives in the page files.
 */
const CARD_META = {
  popular: {
    icon: Music3,
    title: 'Muzică Populară',
    image:
      'https://images.pexels.com/photos/8520105/pexels-photo-8520105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  party: {
    icon: PartyPopper,
    title: 'Muzică de Petrecere',
    image:
      'https://images.pexels.com/photos/5610120/pexels-photo-5610120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  easy: {
    icon: Music2,
    title: 'Muzică Ușoară',
    image:
      'https://images.pexels.com/photos/4231581/pexels-photo-4231581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  manele: {
    icon: Mic2,
    title: 'Manele la Cerere',
    image:
      'https://images.pexels.com/photos/9002848/pexels-photo-9002848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  organ: {
    icon: Music,
    title: 'Orga',
    image:
      'https://images.pexels.com/photos/8512655/pexels-photo-8512655.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  accordion: {
    icon: Disc3,
    title: 'Acordeon',
    image:
      'https://images.pexels.com/photos/8520185/pexels-photo-8520185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  sax: {
    icon: Music4,
    title: 'Saxofon',
    image:
      'https://images.pexels.com/photos/9001972/pexels-photo-9001972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  clarinet: {
    icon: Wind,
    title: 'Clarinet',
    image:
      'https://images.pexels.com/photos/37358630/pexels-photo-37358630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dj: {
    icon: Headphones,
    title: 'DJ',
    image:
      'https://images.pexels.com/photos/7715623/pexels-photo-7715623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  lights: {
    icon: Lightbulb,
    title: 'Lumini Dinamice',
    image:
      'https://images.pexels.com/photos/24181456/pexels-photo-24181456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  smoke: {
    icon: Cloud,
    title: 'Mașină de Fum Greu',
    image:
      'https://images.pexels.com/photos/10360902/pexels-photo-10360902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  fireworks: {
    icon: Flame,
    title: 'Artificii Vulcan',
    image:
      'https://images.pexels.com/photos/28542552/pexels-photo-28542552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  photoMirror: {
    icon: Camera,
    title: 'Oglindă Foto',
    image:
      'https://images.pexels.com/photos/13788485/pexels-photo-13788485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
} as const;

export type OfferCardKey = keyof typeof CARD_META;

/** Pairs a shared card definition with the copy written for one event type. */
export const offerCard = (
  key: OfferCardKey,
  description: string
): MediaCard => ({ ...CARD_META[key], description });
