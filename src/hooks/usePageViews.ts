import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from '../lib/analytics';

/**
 * Sends one GA4 page view per React Router navigation.
 *
 * This hook lives in the layout, so it runs *after* the page's `<Seo>` effect
 * has written `document.title` — which means the title reported to GA always
 * matches the page the visitor is actually looking at.
 */
export function usePageViews(): void {
  const { pathname, search } = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const path = `${pathname}${search}`;
    if (lastPath.current === path) return;
    lastPath.current = path;
    trackPageView(path, document.title);
  }, [pathname, search]);
}
