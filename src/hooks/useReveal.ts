import { useEffect, useRef, useState } from 'react';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/** Users who ask for less motion get the content immediately, never hidden. */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveals an element once it scrolls into view.
 *
 * Starts visible when IntersectionObserver is unavailable or reduced motion is
 * requested, so content is never left permanently hidden behind an effect that
 * cannot run.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    // Anything already on screen at mount is shown without waiting for a scroll.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}
