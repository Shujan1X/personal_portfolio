import { Mail, ArrowUp } from 'lucide-react';
import type { ComponentType } from 'react';
import Container from '../ui/Container';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { SITE_NAME, SOCIAL_LINKS } from '../../data/constants';

const ICON_MAP: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  mail: Mail,
};

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-grid bg-panel/40">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-text-primary">{SITE_NAME}</p>
          <p className="mt-1 font-mono text-xs text-text-secondary">
            &copy; {year} &middot; Built with React &amp; Tailwind CSS
          </p>
        </div>

        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => {
            const Icon = ICON_MAP[social.icon];
            const isExternal = social.href.startsWith('http');
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-grid text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
                >
                  {Icon ? <Icon size={16} /> : null}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-md border border-grid px-3 py-2 font-mono text-xs uppercase tracking-wider text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
        >
          Back to top
          <ArrowUp size={14} />
        </button>
      </Container>
    </footer>
  );
};

export default Footer;
