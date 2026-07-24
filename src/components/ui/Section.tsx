import type { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Standard vertical padding + Container wrapper, reused by every content section. */
const Section = ({ id, children, className = '' }: SectionProps) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export default Section;
