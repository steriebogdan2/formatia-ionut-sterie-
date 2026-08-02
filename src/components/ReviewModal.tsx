import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { Star, X, Upload, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  supabase,
  type ReviewEventType,
  EVENT_TYPE_LABELS,
} from '../lib/supabaseClient';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const EVENT_TYPES = Object.keys(EVENT_TYPE_LABELS) as ReviewEventType[];
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const inputClass =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-montserrat text-white placeholder-white/40 transition-colors focus:border-gold focus:outline-none';
const labelClass = 'block font-montserrat text-sm text-white/80 mb-2';

const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  const [fullName, setFullName] = useState('');
  const [eventType, setEventType] = useState<ReviewEventType>('wedding');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const resetForm = useCallback(() => {
    setFullName('');
    setEventType('wedding');
    setRating(0);
    setHoverRating(0);
    setMessage('');
    setPhotoFile(null);
    setPhotoPreview(null);
    setSubmitState('idle');
    setErrorMsg('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, []);

  const handleClose = useCallback(() => {
    if (submitState === 'submitting') return;
    resetForm();
    onClose();
  }, [submitState, resetForm, onClose]);

  // Escape to dismiss, and the page behind the dialog stays put.
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  // Move focus into the dialog on open and hand it back on close.
  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    dialogRef.current
      ?.querySelector<HTMLElement>(FOCUSABLE)
      ?.focus({ preventScroll: true });

    return () => previouslyFocused.current?.focus({ preventScroll: true });
  }, [isOpen]);

  // Release each preview's object URL when it is replaced or the form closes.
  useEffect(() => {
    if (!photoPreview) return;
    return () => URL.revokeObjectURL(photoPreview);
  }, [photoPreview]);

  /** Keeps Tab cycling inside the dialog while it is open. */
  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
    ).filter((el) => el.offsetParent !== null);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Te rugăm să selectezi o imagine.');
      setSubmitState('error');
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      setErrorMsg('Imaginea nu poate depăși 5MB.');
      setSubmitState('error');
      return;
    }
    setErrorMsg('');
    setSubmitState('idle');
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validate = (): string | null => {
    if (!fullName.trim()) return 'Te rugăm să introduci numele tău.';
    if (rating < 1 || rating > 5) return 'Te rugăm să acorzi o notă (1–5 stele).';
    if (!message.trim()) return 'Te rugăm să scrii recenzia ta.';
    return null;
  };

  const uploadPhoto = async (): Promise<string | null> => {
    if (!photoFile) return null;
    const ext = photoFile.name.split('.').pop() || 'jpg';
    const filePath = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 10)}.${ext}`;
    const { error } = await supabase.storage
      .from('review-photos')
      .upload(filePath, photoFile, { cacheControl: '3600', upsert: false });
    if (error) throw error;
    const { data } = supabase.storage.from('review-photos').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      setSubmitState('error');
      return;
    }

    setSubmitState('submitting');
    setErrorMsg('');

    try {
      const photoUrl = await uploadPhoto();
      const { error } = await supabase.from('reviews').insert({
        full_name: fullName.trim(),
        event_type: eventType,
        rating,
        message: message.trim(),
        photo_url: photoUrl,
        status: 'pending',
      });
      if (error) throw error;
      setSubmitState('success');
    } catch (err) {
      console.error('Review submission failed', err);
      setErrorMsg('A apărut o eroare. Te rugăm să încerci din nou.');
      setSubmitState('error');
    }
  };

  if (!isOpen) return null;

  const submitting = submitState === 'submitting';

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={trapFocus}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-2xl border border-gold/30 bg-gradient-to-b from-gray-900 to-black shadow-2xl"
      >
        <button
          type="button"
          onClick={handleClose}
          disabled={submitting}
          aria-label="Închide"
          className="absolute right-3 top-3 rounded-full p-2 text-white/60 transition-colors hover:text-gold disabled:opacity-40"
        >
          <X size={24} aria-hidden="true" />
        </button>

        <div className="p-6 sm:p-8">
          {submitState === 'success' ? (
            <div className="py-8 text-center">
              <CheckCircle2
                size={56}
                aria-hidden="true"
                className="mx-auto mb-4 text-gold"
              />
              <h2
                id="review-modal-title"
                className="mb-3 font-playfair text-2xl text-gold"
              >
                Mulțumim pentru recenzie!
              </h2>
              <p className="mb-6 font-montserrat leading-relaxed text-white/70">
                Recenzia ta a fost trimisă cu succes și va apărea pe site după ce
                va fi aprobată de echipa noastră.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-montserrat font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5C158]"
              >
                Închide
              </button>
            </div>
          ) : (
            <>
              <h2
                id="review-modal-title"
                className="mb-2 pr-10 font-playfair text-2xl text-gold md:text-3xl"
              >
                Lasă o Recenzie
              </h2>
              <p className="mb-6 font-montserrat text-sm text-white/60">
                Împărtășește-ți experiența cu Formația Ionuț Sterie.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className={labelClass} htmlFor="full-name">
                    Nume complet *
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    disabled={submitting}
                    className={inputClass}
                    placeholder="Numele tău"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="event-type">
                    Tip eveniment *
                  </label>
                  <select
                    id="event-type"
                    name="event-type"
                    value={eventType}
                    onChange={(event) =>
                      setEventType(event.target.value as ReviewEventType)
                    }
                    disabled={submitting}
                    className={inputClass}
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-gray-900">
                        {EVENT_TYPE_LABELS[type]}
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset>
                  <legend className={labelClass}>Notă *</legend>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onFocus={() => setHoverRating(star)}
                        onBlur={() => setHoverRating(0)}
                        disabled={submitting}
                        aria-pressed={rating === star}
                        aria-label={
                          star === 1 ? '1 stea' : `${star} stele`
                        }
                        className="rounded p-1 transition-transform hover:scale-110 disabled:opacity-50"
                      >
                        <Star
                          size={28}
                          aria-hidden="true"
                          className={
                            (hoverRating || rating) >= star
                              ? 'fill-gold text-gold'
                              : 'text-white/30'
                          }
                        />
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Recenzie *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    disabled={submitting}
                    className={`${inputClass} min-h-[120px] resize-none`}
                    placeholder="Spune-ne despre experiența ta..."
                    maxLength={1000}
                  />
                </div>

                <div>
                  <span className={labelClass}>Fotografie (opțional)</span>
                  {photoPreview ? (
                    <div className="relative inline-block">
                      <img
                        src={photoPreview}
                        alt="Previzualizarea fotografiei încărcate"
                        width={80}
                        height={80}
                        className="h-20 w-20 rounded-full border-2 border-gold/40 object-cover"
                      />
                      <button
                        type="button"
                        onClick={removePhoto}
                        disabled={submitting}
                        aria-label="Elimină fotografia"
                        className="absolute -right-1 -top-1 rounded-full bg-black/80 p-1.5 text-white transition-colors hover:text-gold disabled:opacity-40"
                      >
                        <X size={14} aria-hidden="true" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={submitting}
                      className="-mx-2 flex items-center gap-2 rounded px-2 py-2 font-montserrat text-sm text-white/60 transition-colors hover:text-gold disabled:opacity-40"
                    >
                      <Upload size={18} aria-hidden="true" />
                      Încarcă o fotografie
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    disabled={submitting}
                    tabIndex={-1}
                    className="hidden"
                  />
                </div>

                {/*
                  The live region is always in the DOM so assistive technology
                  announces validation errors as soon as they appear.
                */}
                <div role="alert" aria-live="assertive" className="empty:hidden">
                  {submitState === 'error' && errorMsg && (
                    <div className="flex items-start gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 font-montserrat text-sm text-red-300">
                      <AlertCircle
                        size={18}
                        aria-hidden="true"
                        className="mt-0.5 flex-shrink-0"
                      />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-montserrat font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5C158] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <>
                      <Loader2
                        size={20}
                        aria-hidden="true"
                        className="animate-spin"
                      />
                      Se trimite...
                    </>
                  ) : (
                    'Trimite Recenzia'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
