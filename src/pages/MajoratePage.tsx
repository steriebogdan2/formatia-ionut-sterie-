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
  id: 'majorate',
  serviceName: 'Formație majorat',
  seo: {
    title:
      'Formație pentru Majorate în România: Muzică Live, DJ & Efecte Premium',
    description:
      'Formație pentru petreceri de majorat în toată România. Muzică live, saxofon, clarinet, acordeon, DJ, lumini dinamice și efecte speciale, cu peste 25 de ani de experiență.',
    path: ROUTES.majorate,
  },
  hero: {
    title: 'Formație pentru Majorate în România',
    subtitle:
      'Transformăm sărbătorirea împlinirii vârstei de 18 ani într-o experiență memorabilă prin muzică live, energie și momente care rămân în suflet.',
    image:
      'https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Tineri petrecând pe ringul de dans la o aniversare',
  },
  intro: {
    title: 'Despre Serviciul de Majorat',
    body: 'Majoratul este momentul în care o viață nouă începe, iar misiunea noastră este să facem această sărbătoare de neuitat. Cu muzică live, instrumentiști profesioniști și efecte speciale, formația noastră adaptează atmosfera la personalitatea sărbătoritului, la invitați și la momentele care contează cu adevărat. Muzica devine, în mâinile noastre, o experiență plină de energie și emoție, nu doar un fond sonor, ci sufletul petrecerii.',
  },
  offer: {
    title: 'Ce Oferim',
    lead: 'O gamă completă de servicii muzicale și de divertisment, fiecare gândit să contribuie la un majorat de neuitat.',
    cards: [
      offerCard(
        'popular',
        'Melodii autentice românești care aprind sufletul invitaților și aduc tradiția în mijlocul petrecerii de majorat, într-o atmosferă caldă și plină de viață.'
      ),
      offerCard(
        'party',
        'Ritmuri care ridică invitații de pe scaune și țin dansul viu până în zori, adaptate moment cu moment pentru energia maximă a unui majorat.'
      ),
      offerCard(
        'easy',
        'Balade și melodii elegante, perfecte pentru momentele de reflecție și primirea invitaților într-o atmosferă rafinată.'
      ),
      offerCard(
        'manele',
        'Interpretăm la cerere piesele preferate ale sărbătoritului și ale invitaților, pentru ca fiecare moment să poarte amprenta voastră personală.'
      ),
      offerCard(
        'organ',
        'Armonii bogate care încălzesc fiecare moment al petrecerii, de la intrarea în sală până la ultima melodie a nopții.'
      ),
      offerCard(
        'accordion',
        'Sunetul autentic al acordeonului aduce un plus de căldură și tradiție, evocând emoția profundă a sărbătoririi împlinirii unei vârste importante.'
      ),
      offerCard(
        'clarinet',
        'Clarinetul întreține momentele tradiționale cu virtuozitate, dând viață dansurilor și jocurilor care bucură inimile invitaților.'
      ),
      offerCard(
        'sax',
        'Saxofonul live aduce un ton elegant și plin de energie petrecerii, transformând fiecare notă într-o emoție de neuitat pentru sărbătorit și invitați.'
      ),
      offerCard(
        'dj',
        'DJ profesionist care preia ștafeta muzicii live și menține energia pe ringul de dans cu un mix perfect pentru invitații de toate vârstele.'
      ),
      offerCard(
        'lights',
        'Lumini dinamice profesionale care sculptează atmosfera sălii și pun în valoare fiecare moment al petrecerii cu un spectacol vizual de impact.'
      ),
      offerCard(
        'smoke',
        'Fum greu care rămâne la nivelul ringului, creând un covor de nori care face momentele cheie ale petrecerii pur magice.'
      ),
      offerCard(
        'fireworks',
        'Artificii Vulcan care încununează momentele cheie cu jerbe de scântei, adăugând un efect spectaculos pe care invitații îl aplaudă cu entuziasm.'
      ),
      offerCard(
        'photoMirror',
        'Oglinda foto captează zâmbetele și momentele spontane ale invitaților, lăsându-le o amintire distractivă și elegantă de la petrecerea de majorat.'
      ),
    ],
  },
  advantages: {
    lead: 'Experiență, profesionalism și pasiune pentru muzică, motivele pentru care familiile din toată România ne aleg pentru petrecerea de majorat a copiilor lor.',
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
    title:
      'Hai să transformăm petrecerea de majorat într-o amintire de neuitat.',
    body: 'Solicită o ofertă personalizată și lasă-ne să creăm atmosfera perfectă pentru sărbătorit și invitații tăi.',
  },
};

const MajoratePage = () => <ServiceLanding content={content} />;

export default MajoratePage;
