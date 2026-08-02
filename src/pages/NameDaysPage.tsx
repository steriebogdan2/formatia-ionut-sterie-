import {
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
  id: 'name-days',
  serviceName: 'Formație zile onomastice',
  seo: {
    title:
      'Formație Zile Onomastice în România: Muzică Live, DJ & Efecte Premium',
    description:
      'Formație pentru zile onomastice în toată România. Muzică live, clarinet, saxofon, acordeon, DJ, lumini dinamice și efecte speciale, cu peste 25 de ani de experiență.',
    path: ROUTES.nameDays,
  },
  hero: {
    title: 'Formație pentru Zile Onomastice în România',
    subtitle:
      'Transformăm sărbătorirea zilei de nume într-o experiență memorabilă prin muzică live, energie și momente care rămân în suflet.',
    image:
      'https://images.pexels.com/photos/8775179/pexels-photo-8775179.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Invitați sărbătorind împreună la o zi onomastică',
  },
  intro: {
    title: 'Despre Serviciul de Zi Onomastică',
    body: 'Ziua onomastică este o sărbătoare a tradiției și a momentelor petrecute alături de cei dragi, iar misiunea noastră este să o facem de neuitat. Cu muzică live, instrumentiști profesioniști și efecte speciale premium, formația noastră adaptează atmosfera la personalitatea sărbătoritului, la invitați și la momentele care contează cu adevărat. Muzica devine, în mâinile noastre, o experiență emoțională completă, nu doar un fond sonor, ci sufletul petrecerii.',
  },
  offer: {
    title: 'Ce Oferim',
    lead: 'O gamă completă de servicii muzicale și de divertisment, fiecare gândit să contribuie la o zi onomastică de neuitat.',
    cards: [
      offerCard(
        'popular',
        'Melodii autentice românești care aprind sufletul invitaților și transformă ziua de nume într-o atmosferă caldă, plină de tradiție și emoție.'
      ),
      offerCard(
        'party',
        'Ritmuri care ridică invitații de pe scaune și țin dansul viu până târziu în noapte, adaptate moment cu moment pentru energie maximă.'
      ),
      offerCard(
        'easy',
        'Balade și melodii elegante, perfecte pentru momentele de reflecție și primirea invitaților într-o atmosferă rafinată.'
      ),
      offerCard(
        'manele',
        'Interpretăm la cerere piesele preferate ale sărbătoritului și invitaților, pentru ca fiecare moment să poarte amprenta voastră personală.'
      ),
      offerCard(
        'organ',
        'Armonii bogate care încălzesc fiecare moment al zilei de nume, de la primul invitat care pășește în sală până la ultima melodie.'
      ),
      offerCard(
        'accordion',
        'Sunetul autentic al acordeonului aduce un plus de căldură și tradiție, evocând emoția profundă a momentelor de sărbătoare.'
      ),
      offerCard(
        'sax',
        'Saxofonul live aduce un ton elegant și senzual momentelor cheie, transformând fiecare notă într-o emoție de neuitat.'
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
        'Fum greu pentru momentul de dans al sărbătoritului, care rămâne la nivelul ringului, creând un covor de nori care face primul danț pur magic.'
      ),
      offerCard(
        'fireworks',
        'Artificii Vulcan care încununează momentele cheie cu jerbe de scântei, adăugând un efect spectaculos pe care invitații îl aplaudă.'
      ),
      offerCard(
        'photoMirror',
        'Oglinda foto captează zâmbetele și momentele spontane ale invitaților, lăsându-le o amintire de neuitat și elegantă de la ziua de nume.'
      ),
    ],
  },
  advantages: {
    lead: 'Experiență, profesionalism și pasiune pentru muzică, motivele pentru care familiile din toată România ne aleg pentru sărbătorirea zilei de nume.',
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
    title: 'Hai să transformăm ziua de nume într-o sărbătoare memorabilă.',
    body: 'Solicită o ofertă personalizată și lasă-ne să creăm atmosfera perfectă pentru sărbătorit și invitații tăi.',
  },
};

const NameDaysPage = () => <ServiceLanding content={content} />;

export default NameDaysPage;
