interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Mono "// eyebrow" label + display-font title, reused by every content section for visual consistency. */
const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div>
    <p className="font-mono text-xs uppercase tracking-wider text-accent-primary">{eyebrow}</p>
    <h2 className="mt-3 font-display text-2xl font-semibold text-text-primary sm:text-3xl">{title}</h2>
    {description && (
      <p className="mt-3 max-w-2xl font-body text-sm text-text-secondary sm:text-base">{description}</p>
    )}
  </div>
);

export default SectionHeading;
