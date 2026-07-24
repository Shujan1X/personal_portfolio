interface StatusBadgeProps {
  label: string;
  className?: string;
}

/**
 * Small pulsing-dot badge styled like a monitoring/dashboard status indicator.
 * Ties the "data-driven" visual language to something functionally useful:
 * signalling availability to a recruiter viewing the page.
 */
const StatusBadge = ({ label, className = '' }: StatusBadgeProps) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full border border-grid bg-panel/60 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-text-secondary ${className}`}
  >
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
    </span>
    {label}
  </div>
);

export default StatusBadge;
