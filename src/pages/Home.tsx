import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import About from '../components/About';
import Songs from '../components/Songs';
import CTASection from '../components/CTASection';
import Reviews from '../components/Reviews';
import { DEFAULT_DESCRIPTION, ROUTES, SITE_NAME } from '../lib/site';

const Home = () => (
  <>
    {/*
      Organization, LocalBusiness and WebSite nodes ship statically in
      index.html; this only adds the page-level node.
    */}
    <Seo title={SITE_NAME} description={DEFAULT_DESCRIPTION} path={ROUTES.home} />

    <Hero />

    <div className="border-t border-white/5 bg-black py-3">
      <div className="container-page max-w-7xl text-center">
        <span className="font-montserrat text-xs tracking-wide text-white/60 sm:text-sm">
          Website realizat de{' '}
          <a
            href="https://sbnagency.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-1 inline-flex items-center gap-1 rounded px-1 py-1 text-gold/90 transition-colors duration-200 hover:text-gold"
          >
            SBNAgency
            <ArrowRight
              size={12}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </span>
      </div>
    </div>

    <Offer />
    <About />
    <Songs />
    <CTASection />
    <Reviews />
  </>
);

export default Home;
