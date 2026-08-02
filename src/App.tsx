import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, type ReactNode } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import { LEGACY_REDIRECTS, ROUTES } from './lib/site';

/*
  Only the home page is bundled eagerly — it is the entry point for almost all
  traffic. Every other route is fetched on demand.
*/
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WeddingsPage = lazy(() => import('./pages/WeddingsPage'));
const BaptismsPage = lazy(() => import('./pages/BaptismsPage'));
const MajoratePage = lazy(() => import('./pages/MajoratePage'));
const NameDaysPage = lazy(() => import('./pages/NameDaysPage'));
const PartiesPage = lazy(() => import('./pages/PartiesPage'));
const RepertoirePage = lazy(() => import('./pages/RepertoirePage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

/**
 * Reserves the height of a typical page while its chunk loads, so the footer
 * does not jump up and back down between routes.
 */
const PageFallback = () => <div className="min-h-[60vh]" aria-hidden="true" />;

const lazyRoute = (element: ReactNode) => (
  <Suspense fallback={<PageFallback />}>{element}</Suspense>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={lazyRoute(<AboutPage />)} />
        <Route path={ROUTES.services} element={lazyRoute(<ServicesPage />)} />
        <Route path={ROUTES.weddings} element={lazyRoute(<WeddingsPage />)} />
        <Route path={ROUTES.baptisms} element={lazyRoute(<BaptismsPage />)} />
        <Route path={ROUTES.majorate} element={lazyRoute(<MajoratePage />)} />
        <Route path={ROUTES.nameDays} element={lazyRoute(<NameDaysPage />)} />
        <Route path={ROUTES.parties} element={lazyRoute(<PartiesPage />)} />
        <Route
          path={ROUTES.repertoire}
          element={lazyRoute(<RepertoirePage />)}
        />
        <Route path={ROUTES.reviews} element={lazyRoute(<ReviewsPage />)} />
        <Route path={ROUTES.contact} element={lazyRoute(<ContactPage />)} />

        {/*
          Client-side safety net for the previous English URLs. The host should
          answer these with a 301 before React ever loads; this keeps them
          working if the app is deployed somewhere without that configuration.
        */}
        {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}

        <Route path="*" element={lazyRoute(<NotFoundPage />)} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
