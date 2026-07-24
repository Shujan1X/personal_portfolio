interface StatCardProps {
  value: string;
  label: string;
}

/** Small KPI card — mono numeral over a muted label, matching the analytics-dashboard brief. */
const StatCard = ({ value, label }: StatCardProps) => (
  <div className="rounded-xl border border-grid bg-panel/60 px-5 py-4 backdrop-blur-sm">
    <p className="font-mono text-2xl font-semibold text-accent-primary sm:text-3xl">{value}</p>
    <p className="mt-1 font-body text-xs uppercase tracking-wider text-text-secondary">{label}</p>
  </div>
);

export default StatCard;
