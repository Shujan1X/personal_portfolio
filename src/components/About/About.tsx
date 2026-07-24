import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { ABOUT_PARAGRAPHS, QUICK_FACTS } from '../../data/portfolio';

const About = () => {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <SectionHeading eyebrow="// About" title="A bit about how I work" />
          <div className="mt-6 max-w-2xl space-y-4">
            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className="font-body text-base leading-relaxed text-text-secondary sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-grid bg-panel/60 p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-grid bg-background font-mono text-sm text-accent-primary">
            SC
          </span>

          <dl className="mt-6 space-y-4">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-text-secondary">{fact.label}</dt>
                <dd className="mt-1 font-body text-sm text-text-primary">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
};

export default About;
