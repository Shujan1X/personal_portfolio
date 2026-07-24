import { Award, ExternalLink } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { certifications } from '../../data/portfolio';

const Certifications = () => {
  return (
    <Section id="certifications">
      <SectionHeading eyebrow="// Certifications" title="Continued learning" />

      {certifications.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.id} className="rounded-xl border border-grid bg-panel/60 p-6">
              <Award className="text-accent-primary" size={20} aria-hidden="true" />
              <h3 className="mt-3 font-display text-base font-semibold text-text-primary">{cert.name}</h3>
              <p className="mt-1 font-body text-sm text-text-secondary">{cert.issuer}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-text-secondary">
                {cert.issueDate}
              </p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-body text-sm text-accent-primary hover:underline"
                >
                  View credential <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-grid p-8 text-center">
          <Award className="mx-auto text-text-secondary" size={20} aria-hidden="true" />
          <p className="mt-3 font-body text-sm text-text-secondary">
            Certifications coming soon — check back later.
          </p>
        </div>
      )}
    </Section>
  );
};

export default Certifications;
