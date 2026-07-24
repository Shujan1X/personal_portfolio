import type { ReactNode, MouseEventHandler } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  /** Renders as an anchor when provided, a button otherwise. */
  href?: string;
  target?: string;
  rel?: string;
  /** Passed through to the anchor's `download` attribute for file downloads. */
  download?: boolean | string;
  type?: 'button' | 'submit';
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-body text-sm font-medium transition-all duration-200 focus-visible:outline-none';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-primary text-background shadow-[0_0_0_1px_rgba(34,225,255,0.4)] hover:-translate-y-0.5 hover:shadow-glow',
  secondary:
    'border border-grid text-text-primary hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary',
};

/**
 * Single reusable CTA button used across Navbar, Hero, and future sections.
 * Renders as <a> when `href` is present, otherwise as <button>, so callers
 * don't need two separate components for links vs actions.
 */
const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  target,
  rel,
  download,
  type = 'button',
}: ButtonProps) => {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} onClick={onClick} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
