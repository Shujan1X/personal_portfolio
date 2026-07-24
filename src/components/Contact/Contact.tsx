import { useState, type FormEvent } from 'react';
import { Mail, Phone } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FORMSPREE_ENDPOINT, SITE_PHONE, SOCIAL_LINKS } from '../../data/constants';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact = () => {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const emailLink = SOCIAL_LINKS.find((social) => social.icon === 'mail');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    // FORMSPREE_ENDPOINT is empty until a real form ID is set in
    // src/data/constants.ts — see that file for the TODO.
    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" className="border-t border-grid">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeading eyebrow="// Contact" title="Let's talk" />
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Have a role, project, or question in mind? Send a message and I&apos;ll get back to you.
          </p>

          {emailLink && (
            <a
              href={emailLink.href}
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent-primary hover:underline"
            >
              <Mail size={16} aria-hidden="true" />
              {emailLink.href.replace('mailto:', '')}
            </a>
          )}

          <a
            href={`tel:${SITE_PHONE}`}
            className="mt-3 flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent-primary hover:underline"
          >
            <Phone size={16} aria-hidden="true" />
            {SITE_PHONE}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-grid bg-panel/60 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-secondary/60"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-grid bg-panel/60 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-secondary/60"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-none rounded-lg border border-grid bg-panel/60 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-secondary/60"
              placeholder="How can I help?"
            />
          </div>

          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </Button>

          <p role="status" aria-live="polite" className="font-body text-sm">
            {status === 'success' && (
              <span className="text-accent-primary">Thanks — your message is on its way.</span>
            )}
            {status === 'error' && (
              <span className="text-text-secondary">Something went wrong. Please email me directly instead.</span>
            )}
          </p>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
