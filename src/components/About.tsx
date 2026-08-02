import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

interface Member {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  link?: { text: string; href: string };
  description: string;
}

const members: Member[] = [
  {
    name: 'Ionuț Sterie',
    role: 'Solist',
    image: 'https://i.imgur.com/4XQBMD5.jpeg',
    description:
      'Cu o experiență de peste 25 de ani, Ionuț Sterie aduce profesionalism, energie și pasiune la fiecare eveniment. Prin repertoriul variat și interacțiunea cu invitații, creează o atmosferă memorabilă.',
  },
  {
    name: 'Maria Magdalena Banu',
    role: 'Solistă',
    image: 'https://i.imgur.com/7dYnZee.jpeg',
    imagePosition: 'center top',
    link: {
      text: 'Vizitează site-ul solistei',
      href: 'https://magdalenabanu-evenimente.ro/',
    },
    description:
      'Completează formația prin eleganță, naturalețe și o prezență scenică plăcută. Interpretările sale contribuie la o atmosferă deosebită pentru fiecare eveniment.',
  },
  {
    name: 'Alex Sterie',
    role: 'Clarinet',
    image: 'https://i.imgur.com/xSwllDt.jpeg',
    imagePosition: 'center top',
    description:
      'Completează formația prin interpretarea live la clarinet, aducând un plus de autenticitate și energie fiecărui moment muzical.',
  },
];

interface AboutProps {
  /**
   * `h1` on the dedicated About page, where this section *is* the page title;
   * `h2` on the home page, which already has the hero as its `h1`.
   */
  headingLevel?: 'h1' | 'h2';
}

const About = ({ headingLevel = 'h2' }: AboutProps) => {
  // h1 and h2 accept identical props; narrowing keeps the JSX types simple.
  const Heading = headingLevel as 'h2';

  return (
    <section
      aria-labelledby="about-title"
      className="section-y bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container-page max-w-7xl">
        <Reveal className="heading-gap text-center">
          <Heading
            id="about-title"
            className="font-playfair text-4xl text-gold md:text-5xl"
          >
            Cunoaște Formația
          </Heading>
        </Reveal>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {members.map((member, index) => (
            <Reveal
              key={member.name}
              as="li"
              delay={index * 120}
              className="text-center"
            >
              <div className="group relative mb-4 aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} la Formația Ionut Sterie`}
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full transform-gpu object-cover transition-transform duration-500 group-hover:scale-105"
                  style={
                    member.imagePosition
                      ? { objectPosition: member.imagePosition }
                      : undefined
                  }
                />
              </div>

              <h3 className="mb-2 font-playfair text-2xl text-gold">
                {member.name}
              </h3>

              {member.link && (
                <a
                  href={member.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 inline-flex items-center gap-1 font-montserrat text-lg font-medium text-gold underline-offset-4 transition-all duration-200 hover:underline"
                >
                  {member.link.text}
                  <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                </a>
              )}

              <p className="mb-3 font-montserrat text-white/80">{member.role}</p>
              <p className="font-montserrat text-sm leading-relaxed text-white/60">
                {member.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
