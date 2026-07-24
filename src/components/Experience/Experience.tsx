import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { experience } from '../../data/portfolio';

const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="// Experience" title="Where I've made an impact" />

      <ol className="mt-10 border-l border-grid pl-8">
        {experience.map((role) => (
          <li key={role.id} className="relative pb-10 last:pb-0">
            <span className="absolute -left-9 top-1.5 h-2.5 w-2.5 rounded-full bg-accent-primary ring-4 ring-background" />

            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              {role.startDate} &ndash; {role.endDate} &middot; {role.location}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-text-primary">
              {role.role} <span className="text-text-secondary">&middot; {role.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl font-body text-sm text-text-secondary sm:text-base">{role.summary}</p>

            <ul className="mt-4 space-y-2">
              {role.achievements.map((achievement, index) => (
                <li key={index} className="flex gap-2 font-body text-sm text-text-secondary sm:text-base">
                  <span className="mt-1 text-accent-primary" aria-hidden="true">
                    &#9656;
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
