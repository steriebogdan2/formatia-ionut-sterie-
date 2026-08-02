import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restores scroll position on navigation.
 *
 * The jump is explicitly instant: `html { scroll-behavior: smooth }` would
 * otherwise animate the whole page back to the top on every route change, which
 * reads as lag rather than polish. Hash links are left alone so in-page anchors
 * keep working.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
