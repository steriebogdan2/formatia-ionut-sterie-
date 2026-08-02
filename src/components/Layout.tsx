import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { usePageViews } from '../hooks/usePageViews';

const Layout = () => {
  const { pathname } = useLocation();
  usePageViews();

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ScrollToTop />

      {/* Lets keyboard and screen-reader users skip past the navigation. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-montserrat focus:text-sm focus:font-medium focus:text-black"
      >
        Sari la conținut
      </a>

      <Navbar />

      <main id="main" className="flex-grow pt-16">
        {/* Keyed on the path so every route replays its own entrance. */}
        <div key={pathname} className="animate-page-enter">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
