import {
  Wine,
  Heart,
  Volume2,
  Users,
  Clock,
  Library,
  Music2,
  Wind,
  Flame,
  MapPin,
} from 'lucide-react';
import ServiceLanding from '../components/service/ServiceLanding';
import { offerCard } from '../components/service/offerCards';
import type { ServiceLandingContent } from '../components/service/types';
import { ROUTES } from '../lib/site';

const content: ServiceLandingContent = {
  id: 'weddings',
  serviceName: 'Formație nuntă',
  seo: {
    title: 'Formație Nuntă în România: Muzică Live, DJ & Efecte Premium',
    description:
      'Formație pentru nunți în toată România. Muzică live, clarinet, saxofon, DJ, lumini dinamice și efecte speciale, cu peste 25 de ani de experiență.',
    path: ROUTES.weddings,
  },
  hero: {
    title: 'Formație pentru Nunți în România',
    subtitle:
      'Transformăm cea mai importantă zi din viața voastră într-o experiență memorabilă prin muzică live, energie și momente care rămân în suflet.',
    image:
      'https://images.pexels.com/photos/19986452/pexels-photo-19986452.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Miri dansând la o nuntă cu muzică live',
  },
  intro: {
    title: 'Despre Serviciul de Nuntă',
    body: 'Fiecare nuntă este unică, iar misiunea noastră este să creăm amintiri de neuitat de la primul dans până la ultima melodie a serii. Cu muzică live, instrumentiști profesioniști și efecte speciale premium, formația noastră adaptează atmosfera la povestea voastră, la invitații voștri și la momentele care contează cu adevărat. Muzica devine, în mâinile noastre, o experiență emoțională completă, nu doar un fond sonor, ci sufletul petrecerii.',
  },
  offer: {
    title: 'Ce Oferim',
    lead: 'O gamă completă de servicii muzicale și de divertisment, fiecare gândit să contribuie la o nuntă de neuitat.',
    cards: [
      offerCard(
        'popular',
        'Melodii autentice românești care aprind sufletul invitaților și transformă sala într-o atmosferă caldă, plină de tradiție și emoție.'
      ),
      offerCard(
        'party',
        'Ritmuri care ridică invitații de pe scaune și țin dansul viu până în zori, adaptate moment cu moment pentru energie maximă.'
      ),
      offerCard(
        'easy',
        'Balade și melodii elegante, perfecte pentru momentele de reflecție și primirea invitaților într-o atmosferă rafinată.'
      ),
      offerCard(
        'manele',
        'Interpretăm la cerere piesele preferate ale mirilor și invitaților, pentru ca fiecare moment să poarte amprenta voastră personală.'
      ),
      offerCard(
        'organ',
        'Armonii bogate care încălzesc fiecare moment al nunții, de la intrarea în sală până la ultima melodie a serii.'
      ),
      offerCard(
        'accordion',
        'Sunetul autentic al acordeonului aduce un plus de căldură și tradiție, evocând emoția profundă a momentelor de sărbătoare.'
      ),
      offerCard(
        'sax',
        'Saxofonul live aduce un ton elegant și senzual dansului mirilor, transformând fiecare notă într-o emoție de neuitat.'
      ),
      offerCard(
        'clarinet',
        'Clarinetul întreține momentele tradiționale cu virtuozitate, dând viață dansurilor și jocurilor care bucură inimile invitaților.'
      ),
      offerCard(
        'dj',
        'DJ profesionist care preia ștafeta muzicii live și menține energia pe ringul de dans cu un mix perfect pentru invitați.'
      ),
      offerCard(
        'lights',
        'Lumini dinamice profesionale care sculptează atmosfera sălii și pun în valoare fiecare moment cu un spectacol vizual de impact.'
      ),
      offerCard(
        'smoke',
        'Fum greu pentru dansul mirilor care rămâne la nivelul ringului, creând un covor de nori care face primul danț pur magic.'
      ),
      offerCard(
        'fireworks',
        'Artificii Vulcan care încununează momentele cheie cu jerbe de scântei, adăugând un efect spectaculos pe care invitații îl aplaudă.'
      ),
      offerCard(
        'photoMirror',
        'Oglinda foto captează zâmbetele și momentele spontane ale invitaților, lăsându-le o amintire distractivă și elegantă de la nunta voastră.'
      ),
    ],
  },
  moments: {
    title: 'Momente Speciale',
    lead: 'Fiecare moment al nunții are ritmul și emoția lui. Iată cum le dăm viață, pas cu pas.',
    cards: [
      {
        icon: Wine,
        title: 'Primirea Invitaților',
        description:
          'Muzică ușoară și atmosferă elegantă îi întâmpină pe invitați de la primul pas, setând tonul unei seri memorabile.',
        image:
          'https://images.pexels.com/photos/13434437/pexels-photo-13434437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        icon: Heart,
        title: 'Dansul Mirilor',
        description:
          'Primul dans devine un moment de poveste, cu fum greu, lumini și o melodie aleasă care rămâne în suflet pentru totdeauna.',
        image:
          'https://images.pexels.com/photos/15536205/pexels-photo-15536205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        icon: Volume2,
        title: 'Atmosfera pe Ringul de Dans',
        description:
          'DJ, lumini dinamice și muzică live preiau ștafeta și transformă ringul într-o pistă de dans care nu se golește niciodată.',
        image:
          'https://images.pexels.com/photos/15964962/pexels-photo-15964962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  advantages: {
    lead: 'Experiență, profesionalism și pasiune pentru muzică, motivele pentru care familiile din toată România ne aleg pentru evenimentele lor.',
    items: [
      { icon: Clock, title: 'Peste 25 de ani experiență' },
      { icon: Library, title: 'Repertoriu variat' },
      { icon: Users, title: 'Atmosferă adaptată invitaților' },
      { icon: Music2, title: 'Muzică live' },
      { icon: Wind, title: 'Instrumentiști profesioniști' },
      { icon: Volume2, title: 'Sonorizare profesională' },
      { icon: Flame, title: 'Efecte speciale premium' },
      { icon: MapPin, title: 'Disponibilitate în toată România' },
    ],
  },
  cta: {
    title: 'Hai să transformăm nunta voastră într-o experiență memorabilă.',
    body: 'Solicită o ofertă personalizată și lasă-ne să creăm atmosfera perfectă pentru cea mai importantă zi din viața voastră.',
  },
};

const WeddingsPage = () => <ServiceLanding content={content} />;

export default WeddingsPage;
