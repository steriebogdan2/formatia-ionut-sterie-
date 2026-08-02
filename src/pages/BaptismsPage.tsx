import {
  Wine,
  Cake,
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
  id: 'baptisms',
  serviceName: 'Formație botez',
  seo: {
    title:
      'Formație pentru Botezuri în România: Muzică Live, DJ & Efecte Premium',
    description:
      'Formație pentru botezuri în toată România. Muzică live, clarinet, saxofon, acordeon, DJ, lumini dinamice și efecte speciale, cu peste 25 de ani de experiență.',
    path: ROUTES.baptisms,
  },
  hero: {
    title: 'Formație pentru Botezuri în România',
    subtitle:
      'Transformăm fiecare botez într-o experiență memorabilă prin muzică live, atmosferă elegantă și divertisment pentru toate generațiile.',
    image:
      'https://images.pexels.com/photos/20051711/pexels-photo-20051711.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Petrecere de botez cu familia adunată la masă',
  },
  intro: {
    title: 'Despre Serviciul de Botez',
    body: 'Fiecare botez este o sărbătoare a vieții și a familiei, iar misiunea noastră este să creăm amintiri de neuitat de la primul cântec până la ultima melodie a petrecerii. Cu muzică live, instrumentiști profesioniști și efecte speciale, formația noastră adaptează atmosfera la povestea familiei voastre, la invitați și la momentele care contează cu adevărat. Muzica devine, în mâinile noastre, o experiență emoțională completă, nu doar un fond sonor, ci sufletul sărbătorii.',
  },
  offer: {
    title: 'Ce Oferim',
    lead: 'O gamă completă de servicii muzicale și de divertisment, fiecare gândit să contribuie la un botez de neuitat.',
    cards: [
      offerCard(
        'popular',
        'Melodii autentice românești care aprind sufletul invitaților și transformă sărbătorirea botezului într-o atmosferă caldă, plină de tradiție și emoție.'
      ),
      offerCard(
        'party',
        'Ritmuri care ridică invitații de pe scaune și țin dansul viu toată ziua, adaptate moment cu moment pentru energia perfectă a botezului.'
      ),
      offerCard(
        'easy',
        'Balade și melodii elegante, perfecte pentru primirea invitaților și momentele de reflecție într-o atmosferă rafinată.'
      ),
      offerCard(
        'manele',
        'Interpretăm la cerere piesele preferate ale familiei și invitaților, pentru ca fiecare moment al botezului să poarte amprenta voastră.'
      ),
      offerCard(
        'organ',
        'Armonii bogate care încălzesc fiecare moment al botezului, de la intrarea în sală până la ultima melodie a petrecerii.'
      ),
      offerCard(
        'accordion',
        'Sunetul autentic al acordeonului aduce un plus de căldură și tradiție, evocând emoția profundă a sărbătorii în familie.'
      ),
      offerCard(
        'clarinet',
        'Clarinetul întreține momentele tradiționale cu virtuozitate, dând viață dansurilor și jocurilor care bucură inimile invitaților.'
      ),
      offerCard(
        'sax',
        'Saxofonul live aduce un ton elegant și cald petrecerii, transformând fiecare notă într-o emoție de neuitat pentru întreaga familie.'
      ),
      offerCard(
        'dj',
        'DJ profesionist care preia ștafeta muzicii live și menține energia pe ringul de dans cu un mix perfect pentru invitații de toate vârstele.'
      ),
      offerCard(
        'lights',
        'Lumini dinamice profesionale care sculptează atmosfera sălii și pun în valoare fiecare moment al botezului cu un spectacol vizual de impact.'
      ),
      offerCard(
        'smoke',
        'Fum greu care rămâne la nivelul ringului, creând un covor de nori care face momentele cheie ale botezului pur magice.'
      ),
      offerCard(
        'fireworks',
        'Artificii Vulcan care încununează momentele cheie cu jerbe de scântei, adăugând un efect spectaculos pe care invitații îl aplaudă.'
      ),
      offerCard(
        'photoMirror',
        'Oglinda foto captează zâmbetele și momentele spontane ale invitaților, lăsându-le o amintire distractivă și elegantă de la botez.'
      ),
    ],
  },
  moments: {
    title: 'Momente Speciale',
    lead: 'Fiecare moment al botezului are ritmul și emoția lui. Iată cum le dăm viață, pas cu pas.',
    cards: [
      {
        icon: Wine,
        title: 'Primirea Invitaților',
        description:
          'Muzică ușoară și atmosferă elegantă îi întâmpină pe invitați de la primul pas, setând tonul unei sărbători de neuitat.',
        image:
          'https://images.pexels.com/photos/29526125/pexels-photo-29526125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        icon: Cake,
        title: 'Momentul Tortului',
        description:
          'Momentul tortului devine punctul culminant al petrecerii, cu lumini, muzică și emoție care luminează chipurile tuturor invitaților.',
        image:
          'https://images.pexels.com/photos/3859921/pexels-photo-3859921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        icon: Volume2,
        title: 'Atmosfera pe Ringul de Dans',
        description:
          'DJ, lumini dinamice și muzică live preiau ștafeta și transformă ringul într-o pistă de dans care nu se golește niciodată.',
        image:
          'https://images.pexels.com/photos/5956947/pexels-photo-5956947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        icon: Users,
        title: 'Distracție pentru toate Generațiile',
        description:
          'De la bunici la copii, fiecare invitat găsește ritmul său. Muzică variată și jocuri care aduc împreună toate generațiile într-o singură bucurie.',
        image:
          'https://images.pexels.com/photos/7489208/pexels-photo-7489208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  advantages: {
    lead: 'Experiență, profesionalism și pasiune pentru muzică, motivele pentru care familiile din toată România ne aleg pentru botezul copiilor lor.',
    items: [
      { icon: Clock, title: 'Peste 25 de ani experiență' },
      { icon: Library, title: 'Repertoriu variat' },
      { icon: Users, title: 'Atmosferă adaptată fiecărui eveniment' },
      { icon: Music2, title: 'Muzică live' },
      { icon: Wind, title: 'Instrumentiști profesioniști' },
      { icon: Volume2, title: 'Sonorizare profesională' },
      { icon: Flame, title: 'Efecte speciale' },
      { icon: MapPin, title: 'Disponibili în toată România' },
    ],
  },
  cta: {
    title: 'Hai să transformăm botezul într-o amintire de neuitat.',
    body: 'Solicită o ofertă personalizată și lasă-ne să creăm atmosfera perfectă pentru familia și invitații tăi.',
  },
};

const BaptismsPage = () => <ServiceLanding content={content} />;

export default BaptismsPage;
