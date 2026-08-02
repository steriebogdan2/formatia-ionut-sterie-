import { GA_MEASUREMENT_ID } from './site';

/**
 * Google Analytics 4 for a React Router single-page app.
 *
 * The gtag snippet is injected once, *after* the page has settled, so it never
 * competes with the LCP request. Automatic page views are disabled
 * (`send_page_view: false`) because in an SPA only the first navigation is a
 * real document load; every later route change is reported from
 * `usePageViews()`.
 */

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
  }
}

let scriptRequested = false;
let configured = false;

/** Views recorded before `config` ran; GA would discard them out of order. */
const pendingViews: { path: string; title: string }[] = [];

/** Honours Do Not Track and stays out of the way on local development. */
const analyticsAllowed = (): boolean => {
  if (typeof window === 'undefined') return false;

  const dnt =
    (navigator as unknown as { doNotTrack?: string }).doNotTrack ??
    (window as unknown as { doNotTrack?: string }).doNotTrack;
  if (dnt === '1' || dnt === 'yes') return false;

  const { hostname } = window.location;
  return hostname !== 'localhost' && hostname !== '127.0.0.1';
};

/**
 * The canonical gtag shim. It must push the `arguments` object rather than an
 * array, which is why this is a function expression and not an arrow.
 */
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // gtag.js reads the raw `arguments` object, not an array.
  window.dataLayer.push(arguments);
}

const sendPageView = (path: string, title: string) => {
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  });
};

/** Runs a callback when the browser is idle, with a safe timeout fallback. */
const whenIdle = (callback: () => void) => {
  const requestIdle = (
    window as unknown as {
      requestIdleCallback?: (
        cb: () => void,
        options?: { timeout: number }
      ) => number;
    }
  ).requestIdleCallback;

  if (requestIdle) requestIdle(callback, { timeout: 4000 });
  else window.setTimeout(callback, 2000);
};

export const initAnalytics = (): void => {
  if (scriptRequested || !analyticsAllowed()) return;
  scriptRequested = true;

  const load = () =>
    whenIdle(() => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false,
        anonymize_ip: true,
      });

      configured = true;
      pendingViews
        .splice(0)
        .forEach(({ path, title }) => sendPageView(path, title));
    });

  if (document.readyState === 'complete') load();
  else window.addEventListener('load', load, { once: true });
};

/** Reports a single SPA page view, queueing it if GA is not configured yet. */
export const trackPageView = (path: string, title: string): void => {
  if (!scriptRequested) return;
  if (!configured) {
    pendingViews.push({ path, title });
    return;
  }
  sendPageView(path, title);
};
