import Container from '../ui/Container';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import StatCard from '../ui/StatCard';
import { RESUME_URL, HERO_STATS, SITE_NAME, SITE_ROLE } from '../../data/constants';

const Hero = () => {
  return (
    <section id="hero" className="bg-grid-pattern relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Ambient glow behind the headline — the one deliberate "bold" accent, kept subtle */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent-secondary/20 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <StatusBadge label="Available for new opportunities" />

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            Turning complex data into
            <span className="text-accent-primary"> clear business decisions.</span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            I'm {SITE_NAME}, a {SITE_ROLE.toLowerCase()} who turns SQL, Python, and Databricks pipelines
            into dashboards leadership actually uses — across marketing, sales, operations, and gaming
            LiveOps.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href={RESUME_URL} variant="secondary" download>
              Download Resume
            </Button>
          </div>

          <ul className="mt-14 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <li key={stat.label}>
                <StatCard value={stat.value} label={stat.label} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
