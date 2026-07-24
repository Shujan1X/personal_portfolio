import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Consistent max-width + horizontal padding wrapper, reused by every section. */
const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>
);

export default Container;
