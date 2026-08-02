import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ROUTES, SITE_NAME } from '../lib/site';

interface NavItem {
  name: string;
  to: string;
}

interface NavGroup extends NavItem {
  children: NavItem[];
}

const navItems: (NavItem | NavGroup)[] = [
  { name: 'Acasă', to: ROUTES.home },
  { name: 'Despre Noi', to: ROUTES.about },
  {
    name: 'Servicii',
    to: ROUTES.services,
    children: [
      { name: 'Nunți', to: ROUTES.weddings },
      { name: 'Botezuri', to: ROUTES.baptisms },
      { name: 'Majorate', to: ROUTES.majorate },
      { name: 'Zile Onomastice', to: ROUTES.nameDays },
      { name: 'Petreceri', to: ROUTES.parties },
    ],
  },
  { name: 'Repertoriu', to: ROUTES.repertoire },
  { name: 'Recenzii', to: ROUTES.reviews },
  { name: 'Contact', to: ROUTES.contact },
];

const isGroup = (item: NavItem | NavGroup): item is NavGroup =>
  (item as NavGroup).children !== undefined;

const SERVICES_MENU_ID = 'nav-services-menu';
const MOBILE_MENU_ID = 'nav-mobile-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, []);

  /** The logo and "Acasă" stay real links; on the home page they scroll up. */
  const handleHomeClick = (event: MouseEvent) => {
    closeAll();
    if (pathname === ROUTES.home) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Any navigation closes whatever menu is open.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Solidify the bar once the page has scrolled past the hero edge.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes menus from anywhere; a click outside closes the dropdown.
  useEffect(() => {
    if (!isOpen && !servicesOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAll();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isOpen, servicesOpen, closeAll]);

  const servicesActive = pathname.startsWith(ROUTES.services);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-montserrat px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
      isActive ? 'text-gold' : 'text-white hover:text-gold'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-montserrat block px-4 py-3 rounded-md text-base transition-colors duration-200 ${
      isActive ? 'text-gold' : 'text-white hover:text-gold'
    }`;

  return (
    <nav
      aria-label="Navigație principală"
      className={`fixed z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 shadow-lg shadow-black/30 backdrop-blur-md'
          : 'bg-black/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-page max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to={ROUTES.home}
              onClick={handleHomeClick}
              className="font-playfair text-xl text-gold transition-opacity duration-200 hover:opacity-80 sm:text-2xl"
            >
              {SITE_NAME}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) =>
                isGroup(item) ? (
                  <div
                    key={item.name}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-controls={SERVICES_MENU_ID}
                      aria-haspopup="true"
                      className={`font-montserrat inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                        servicesOpen || servicesActive
                          ? 'text-gold'
                          : 'text-white hover:text-gold'
                      }`}
                      onClick={() => setServicesOpen((open) => !open)}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {servicesOpen && (
                      <div
                        id={SERVICES_MENU_ID}
                        className="absolute left-0 top-full animate-dropdown-in pt-1"
                      >
                        <ul className="min-w-[200px] rounded-md border border-white/10 bg-black/95 py-2 shadow-xl shadow-black/50 backdrop-blur-md">
                          <li>
                            <Link
                              to={item.to}
                              onClick={closeAll}
                              className="font-montserrat block px-4 py-2 text-sm text-white transition-colors duration-200 hover:text-gold"
                            >
                              Toate Serviciile
                            </Link>
                          </li>
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                onClick={closeAll}
                                className="font-montserrat block px-4 py-2 text-sm text-white transition-colors duration-200 hover:text-gold"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : item.to === '/' ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={handleHomeClick}
                    aria-current={pathname === '/' ? 'page' : undefined}
                    className={desktopLinkClass({ isActive: pathname === '/' })}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={desktopLinkClass}
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-1 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls={MOBILE_MENU_ID}
              aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-white transition-colors duration-200 hover:text-gold"
            >
              {isOpen ? (
                <X size={24} aria-hidden="true" className="animate-fade-in" />
              ) : (
                <Menu size={24} aria-hidden="true" className="animate-fade-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/*
        The menu scrolls instead of overflowing the viewport on short screens.
        Underscores in the arbitrary value become spaces, which calc() requires
        around the minus sign.
      */}
      {isOpen && (
        <div
          id={MOBILE_MENU_ID}
          className="max-h-[calc(100vh_-_var(--nav-height))] overflow-y-auto overscroll-contain md:hidden"
        >
          <ul className="space-y-1 px-2 pb-4 pt-2 sm:px-3">
            {navItems.map((item) =>
              isGroup(item) ? (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    end
                    onClick={closeAll}
                    className={mobileLinkClass}
                  >
                    {item.name}
                  </NavLink>
                  <ul className="pl-4">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          onClick={closeAll}
                          className={({ isActive }) =>
                            `font-montserrat block rounded-md px-4 py-3 text-sm transition-colors duration-200 ${
                              isActive
                                ? 'text-gold'
                                : 'text-white/80 hover:text-gold'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name}>
                  {item.to === '/' ? (
                    <Link
                      to={item.to}
                      onClick={handleHomeClick}
                      aria-current={pathname === '/' ? 'page' : undefined}
                      className={mobileLinkClass({
                        isActive: pathname === '/',
                      })}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <NavLink
                      to={item.to}
                      onClick={closeAll}
                      className={mobileLinkClass}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
