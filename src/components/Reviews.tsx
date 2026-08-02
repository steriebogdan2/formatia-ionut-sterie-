import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Star,
  PenLine,
  Loader2,
  AlertCircle,
  MessageSquareQuote,
} from 'lucide-react';
import Reveal from './Reveal';
import { supabase, type Review, EVENT_TYPE_LABELS } from '../lib/supabaseClient';

/**
 * The form is only needed once a visitor decides to write a review, so it is
 * split out of the main bundle and fetched on first open.
 */
const ReviewModal = lazy(() => import('./ReviewModal'));

type LoadState = 'loading' | 'success' | 'error';

const writeButtonClass =
  'inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-montserrat font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5C158] hover:shadow-lg hover:shadow-gold/30';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadState, setLoadState] = useState<LoadState>('loading');
  const [isModalOpen, setIsModalOpen] = useState(false);
  /** Stays true after the first open so the lazy chunk is not thrown away. */
  const [modalRequested, setModalRequested] = useState(false);

  const openModal = useCallback(() => {
    setModalRequested(true);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const fetchReviews = async () => {
      setLoadState('loading');
      const { data, error } = await supabase
        .from('reviews')
        .select(
          'id, full_name, event_type, rating, message, photo_url, status, created_at, updated_at'
        )
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (cancelled) return;

      if (error) {
        setLoadState('error');
        return;
      }
      setReviews(data ?? []);
      setLoadState('success');
    };

    fetchReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      aria-labelledby="reviews-title"
      className="section-y bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container-page max-w-7xl">
        <Reveal className="heading-gap">
          <h2
            id="reviews-title"
            className="text-center font-playfair text-4xl text-gold md:text-5xl"
          >
            Ce Spun Clienții Noștri
          </h2>
        </Reveal>

        <div aria-live="polite" aria-busy={loadState === 'loading'}>
          {loadState === 'loading' && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2
                size={40}
                aria-hidden="true"
                className="mb-4 animate-spin text-gold"
              />
              <p className="font-montserrat text-white/60">
                Se încarcă recenziile...
              </p>
            </div>
          )}

          {loadState === 'error' && (
            <Reveal className="mx-auto max-w-xl">
              <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-sm">
                <AlertCircle
                  size={40}
                  aria-hidden="true"
                  className="mb-4 text-gold"
                />
                <p className="mb-2 font-montserrat text-white/80">
                  Nu am putut încărca recenziile.
                </p>
                <p className="font-montserrat text-sm text-white/60">
                  Te rugăm să reîncerci mai târziu.
                </p>
              </div>
            </Reveal>
          )}

          {loadState === 'success' && reviews.length === 0 && (
            <Reveal className="mx-auto max-w-xl">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/20 bg-white/5 px-6 py-12 text-center backdrop-blur-sm">
                <MessageSquareQuote
                  size={48}
                  aria-hidden="true"
                  className="mb-6 text-gold"
                />
                <h3 className="mb-4 text-balance font-playfair text-2xl text-gold md:text-3xl">
                  Fii primul care lasă o recenzie
                </h3>
                <p className="mb-8 max-w-md text-pretty font-montserrat leading-relaxed text-white/70">
                  Recenziile autentice ale clienților noștri vor apărea aici
                  după evenimentele reale la care am participat. Împărtășește-ți
                  experiența și ajută-i pe viitorii clienți să ne cunoască.
                </p>
                <button
                  type="button"
                  onClick={openModal}
                  className={writeButtonClass}
                >
                  <PenLine size={18} aria-hidden="true" />
                  Lasă o Recenzie
                </button>
              </div>
            </Reveal>
          )}

          {loadState === 'success' && reviews.length > 0 && (
            <>
              <ul className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review, index) => (
                  <Reveal
                    key={review.id}
                    as="li"
                    delay={index * 120}
                    className="rounded-lg bg-white/5 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
                  >
                    <figure className="h-full">
                      <div className="mb-4 flex items-center gap-4">
                        {review.photo_url ? (
                          <img
                            src={review.photo_url}
                            alt=""
                            width={48}
                            height={48}
                            loading="lazy"
                            decoding="async"
                            className="h-12 w-12 flex-shrink-0 rounded-full border border-gold/30 object-cover"
                          />
                        ) : (
                          <div
                            aria-hidden="true"
                            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/20"
                          >
                            <span className="font-playfair text-lg text-gold">
                              {review.full_name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                        <div className="flex flex-col">
                          <div
                            className="mb-1 flex gap-0.5"
                            role="img"
                            aria-label={`${review.rating} din 5 stele`}
                          >
                            {Array.from({ length: review.rating }, (_, i) => (
                              <Star
                                key={i}
                                size={16}
                                aria-hidden="true"
                                className="fill-gold text-gold"
                              />
                            ))}
                          </div>
                          <span className="font-montserrat text-xs text-white/60">
                            {EVENT_TYPE_LABELS[review.event_type]}
                          </span>
                        </div>
                      </div>

                      <blockquote className="mb-4 font-montserrat leading-relaxed text-white/80">
                        &bdquo;{review.message}&rdquo;
                      </blockquote>

                      <figcaption className="mt-4 border-t border-white/10 pt-4 font-playfair text-lg text-gold">
                        {review.full_name}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </ul>

              <div className="text-center">
                <button
                  type="button"
                  onClick={openModal}
                  className={writeButtonClass}
                >
                  <PenLine size={18} aria-hidden="true" />
                  Lasă o Recenzie
                </button>
              </div>
            </>
          )}
        </div>

        {modalRequested &&
          createPortal(
            <Suspense fallback={null}>
              <ReviewModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </Suspense>,
            document.body
          )}
      </div>
    </section>
  );
};

export default Reviews;
