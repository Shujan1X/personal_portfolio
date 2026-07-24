// App-wide constants: navigation, site metadata, and social links.

import type { NavLink, SocialLink } from '../types';

export const SITE_NAME = 'Shujan Kumar Chakraborty';
export const SITE_ROLE = 'Senior Business Analyst';
export const SITE_PHONE = '+91-9101614826';
export const SITE_LOCATION = 'Bengaluru, India';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

// No GitHub profile provided on the resume, so it's omitted rather than
// left as a dead placeholder link — add it back in if/when there is one.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shujankumar3', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:shujan.chakraborty2001@gmail.com', icon: 'mail' },
];

// Grounded in the resume: 3+ years experience, 3 documented projects, and
// work spanning 4 business domains (marketing, sales, operations, gaming/LiveOps).
export const HERO_STATS: { value: string; label: string }[] = [
  { value: '3+', label: 'Years in Analytics' },
  { value: '3', label: 'Key Projects' },
  { value: '4', label: 'Business Domains' },
];

export const RESUME_URL = '/resume.pdf';

// TODO: create a form at https://formspree.io and paste its endpoint here,
// e.g. 'https://formspree.io/f/abcdwxyz' — the contact form won't submit
// successfully until this is set.
export const FORMSPREE_ENDPOINT = '';
