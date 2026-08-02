import Reveal from './Reveal';

interface Song {
  /** YouTube embed URL. */
  src: string;
  /** Used for the iframe's accessible name. */
  title: string;
}

const songs: Song[] = [
  {
    src: 'https://www.youtube.com/embed/MjFBG3bKLqY?si=IbgWvgWSwezwoH0m',
    title: 'Formația Ionut Sterie – înregistrare live 1',
  },
  {
    src: 'https://www.youtube.com/embed/mcBVbxKRO94?si=L6NbYQmIgmZyWGpT',
    title: 'Formația Ionut Sterie – înregistrare live 2',
  },
  {
    src: 'https://www.youtube.com/embed/c211FFxvgBg?si=ULQfYohrY4zMTRug',
    title: 'Formația Ionut Sterie – înregistrare live 3',
  },
  {
    src: 'https://www.youtube.com/embed/ApclqsQPghM?si=VAmpCo_W1YO_rc_g',
    title: 'Formația Ionut Sterie – înregistrare live 4',
  },
  {
    src: 'https://www.youtube.com/embed/xuCkcPKyQn0?si=uDI45te48I7aIRvh',
    title: 'Formația Ionut Sterie – înregistrare live 5',
  },
  {
    src: 'https://www.youtube.com/embed/yi6Gj3S8oUw?si=usXZSSOM-fIWrnE_',
    title: 'Formația Ionut Sterie – înregistrare live 6',
  },
];

const Songs = () => (
  <section aria-labelledby="songs-title" className="section-y bg-black">
    <div className="container-page max-w-7xl">
      <Reveal className="heading-gap">
        <h2
          id="songs-title"
          className="text-center font-playfair text-4xl text-gold md:text-5xl"
        >
          Piesele Noastre
        </h2>
      </Reveal>

      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {songs.map((song, index) => (
          <Reveal
            key={song.src}
            as="li"
            delay={index * 120}
            className="aspect-video"
          >
            {/*
              Six eager YouTube embeds would pull in several megabytes of
              third-party script before the page is even scrolled. Native lazy
              loading defers each player until it approaches the viewport, with
              no change to how the section looks or behaves.
            */}
            <iframe
              src={song.src}
              title={song.title}
              loading="lazy"
              className="h-full w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/50"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Songs;
