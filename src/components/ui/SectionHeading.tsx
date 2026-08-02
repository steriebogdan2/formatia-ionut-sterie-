import Reveal from '../Reveal';

interface SectionHeadingProps {
  /** Anchors the surrounding section's `aria-labelledby`. */
  id: string;
  title: string;
  lead?: string;
  /** `h1` only on pages where this heading *is* the page title. */
  as?: 'h1' | 'h2';
  /** `lg` is the display size used to open a content section. */
  size?: 'md' | 'lg';
  className?: string;
}

const sizes = {
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl',
} as const;

/** Centered section title with an optional lead paragraph. */
const SectionHeading = ({
  id,
  title,
  lead,
  as = 'h2',
  size = 'lg',
  className = '',
}: SectionHeadingProps) => {
  // h1 and h2 accept identical props; narrowing keeps the JSX types simple.
  const Tag = as as 'h2';

  return (
    <Reveal className={`text-center ${className}`}>
      <Tag
        id={id}
        className={`text-balance font-playfair text-gold ${sizes[size]} ${
          lead ? 'mb-4' : 'mb-0'
        }`}
      >
        {title}
      </Tag>
      {lead && (
        <p className="mx-auto max-w-2xl text-pretty font-montserrat text-white/60">
          {lead}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
