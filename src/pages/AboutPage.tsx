import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import About from '../components/About';
import Reveal from '../components/Reveal';
import CtaButton from '../components/ui/CtaButton';
import { ROUTES, WHATSAPP_URL } from '../lib/site';

const inlineLink =
  'text-gold underline underline-offset-4 transition-colors duration-200 hover:text-[#E5C158]';

const AboutPage = () => (
  <>
    <Seo
      title="Despre Noi"
      description="Aflați povestea Formației Ionut Sterie, cu rădăcini adânci în cultura muzicală tradițională din Târgoviște, oferind spectacole de neuitat pentru orice ocazie."
      path={ROUTES.about}
      breadcrumbs={[{ name: 'Acasă', path: ROUTES.home }]}
    />

    <About headingLevel="h1" />

    <section aria-labelledby="about-story-title" className="section-y bg-black">
      <div className="container-page max-w-4xl">
        <Reveal className="mb-12">
          <h2
            id="about-story-title"
            className="mb-8 text-balance font-playfair text-3xl text-gold md:text-4xl"
          >
            Formația Ionuț Sterie — Muzică Live în Toată România
          </h2>
          <p className="font-montserrat leading-relaxed text-white/70">
            De mai bine de două decenii, Formația Ionuț Sterie transformă
            evenimentele românilor în amintiri de neuitat. Ceea ce a început ca o
            pasiune în inima țării, la Târgoviște, a devenit astăzi un nume de
            referință în peisajul muzical live din România. Suntem o{' '}
            <strong className="text-white">formație România</strong> în
            adevăratul sens al cuvântului: călătorim din colț în colț al țării
            pentru a aduce muzică live, autentică și plină de energie, acolo unde
            oamenii se adună să sărbătorească. Indiferent de regiune sau de
            mărimea evenimentului, ne adaptăm repertoriului și atmosferei dorite,
            pentru ca fiecare moment să fie exact așa cum v-ați imaginat.
          </p>
        </Reveal>

        <Reveal delay={120} className="mb-12">
          <h3 className="mb-6 text-balance font-playfair text-2xl text-gold">
            Prezenți în orașele mari și în comunitățile de pretutindeni
          </h3>
          <p className="mb-6 font-montserrat leading-relaxed text-white/70">
            De-a lungul anilor am avut onoarea să cântăm în cele mai importante
            centre urbane din țară. Suntem o{' '}
            <strong className="text-white">formație București</strong> prezentă
            frecvent la evenimente elegante din Capitală, dar călătoriile noastre
            ne poartă în aceeași măsură spre Constanța și litoralul Mării Negre,
            spre Brașov și zonele montane, spre Cluj-Napoca și inima
            Transilvaniei, spre Timișoara din vestul țării și spre Iași, capitala
            Moldovei. Nu ne oprim aici: ajungem cu aceeași dăruire în Sibiu,
            Craiova, Galați, Ploiești, Târgoviște, Pitești, Buzău și în
            nenumărate alte localități de pe întreg cuprinsul țării. Distanța nu
            ne-a oprit niciodată — pentru noi, fiecare invitație este o nouă
            oportunitate de a crea bucurie prin muzică.
          </p>
          <p className="font-montserrat leading-relaxed text-white/70">
            Fie că organizați un eveniment într-o sală de banquet din centrul
            Bucureștiului, pe terasa unei pensiuni din Brașov sau într-o curte
            generoasă dintr-un sat de pe valea Prahovei, Formația Ionuț Sterie
            vine cu tot ce este necesar pentru o reprezentație live de înaltă
            calitate: instrumentiști experimentați, soliști cu prezență scenică
            și un sunet calibrat pentru spațiul în care cântăm.
          </p>
        </Reveal>

        <Reveal delay={240} className="mb-12">
          <h3 className="mb-6 text-balance font-playfair text-2xl text-gold">
            Servicii muzicale pentru fiecare moment important
          </h3>
          <p className="mb-6 font-montserrat leading-relaxed text-white/70">
            În calitate de{' '}
            <strong className="text-white">formație evenimente</strong>, am
            aprofundat fiecare tip de ocazie în parte, știind că ritmul și
            repertoriul trebuie să urmeze firescul momentului. Iată tipurile de
            evenimente pentru care suntem pregătiți să oferim muzică live:
          </p>
          <ul className="mb-6 space-y-3 font-montserrat leading-relaxed text-white/70">
            <li>
              <strong className="text-gold">Nunți</strong> — ca{' '}
              <strong className="text-white">formație nuntă</strong>, acompaniem
              întregul fir al zilei: de la intrarea mirilor și dansul lor, până
              la momentul de petrecere cu invitații. Echilibrul dintre emoție și
              energie este marca fiecărei nunți la care cântăm.
            </li>
            <li>
              <strong className="text-gold">Botezuri</strong> — ca{' '}
              <strong className="text-white">formație botez</strong>, propunem
              momente muzicale calde și discrete, potrivite pentru atmosfera
              intimă a acestui eveniment.
            </li>
            <li>
              <strong className="text-gold">Majorate</strong> — în calitate de{' '}
              <strong className="text-white">formație majorat</strong>, aducem
              ritmul contemporan și energia pe care tinerii le-au dorit, fără a
              pierde eleganța pe care o familie o așteaptă.
            </li>
            <li>
              <strong className="text-gold">Zile Onomastice</strong> —
              sărbătorim alături de voi numele persoanelor dragi cu melodii care
              marchează în mod special momentul.
            </li>
            <li>
              <strong className="text-gold">Petreceri private</strong> — ca{' '}
              <strong className="text-white">formație petreceri</strong>,
              transformăm orice adunare de familie sau de prieteni într-o
              sărbătoare cu adevărat memorabilă.
            </li>
            <li>
              <strong className="text-gold">Evenimente corporate</strong> — de la
              gala-uri și conferințe până la petreceri de firmă, oferim un fond
              muzical profesionist care ridică nivelul oricărui eveniment de
              business.
            </li>
          </ul>
          <p className="font-montserrat leading-relaxed text-white/70">
            Detaliile fiecărui pachet și exemplele de momente pe care le putem
            construi le regăsiți pe pagina{' '}
            <Link to={ROUTES.services} className={inlineLink}>
              servicii
            </Link>
            , iar repertoriul nostru variat, de la muzică populară la petrecere,
            vă așteaptă{' '}
            <Link to={ROUTES.repertoire} className={inlineLink}>
              aici
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={360} className="mb-12">
          <h3 className="mb-6 text-balance font-playfair text-2xl text-gold">
            De ce clienții ne aleg, eveniment după eveniment
          </h3>
          <p className="mb-6 font-montserrat leading-relaxed text-white/70">
            Se întâmplă adesea să fim recomandați de la un eveniment la altul — un
            semn că ceea ce facem trece dincolo de simpla execuție muzicală.
            Soliștii și instrumentiștii noștri nu doar cântă, ci și
            interacționează cu invitații, citind atmosfera din sală și ajustând
            momentele astfel încât petrecerea să curgă firesc. Pasionați de
            muzică live și de emoția pe care o poate trezi doar un instrument
            cântat în fața publicului, ne concentrăm mereu pe calitate,
            punctualitate și un repertoriu curat, adaptat gusturilor voastre.
          </p>
          <p className="font-montserrat leading-relaxed text-white/70">
            Vă invităm să citiți experiențele celor care ne-au avut alături pe
            pagina de{' '}
            <Link to={ROUTES.reviews} className={inlineLink}>
              recenzii
            </Link>{' '}
            — poveștile lor sunt cea mai bună descriere a ceea ce înseamnă un
            eveniment cu Formația Ionuț Sterie.
          </p>
        </Reveal>

        <Reveal delay={480}>
          <div className="rounded-xl border border-gold/30 bg-white/[0.03] px-6 py-10 text-center md:px-10">
            <h3 className="mb-4 text-balance font-playfair text-2xl text-gold md:text-3xl">
              Solicită o ofertă personalizată
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-pretty font-montserrat leading-relaxed text-white/70">
              Fie că planifici o nuntă, un botez, un majorat sau o petrecere
              privată în București ori în orice alt colț al României, suntem la un
              click distanță. Contactează-ne pentru a discuta detalii și a primi
              o ofertă adaptată evenimentului tău.
            </p>
            <CtaButton href={WHATSAPP_URL}>Cere o ofertă acum</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default AboutPage;
