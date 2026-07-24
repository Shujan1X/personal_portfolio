import { ExternalLink } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { GithubIcon } from '../ui/BrandIcons';
import { projects } from '../../data/portfolio';

const Projects = () => {
  return (
    <Section id="projects" className="border-t border-grid">
      <SectionHeading eyebrow="// Projects" title="Selected work" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="flex flex-col rounded-xl border border-grid bg-panel/60 p-6">
            <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>
            <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-secondary">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-grid px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-text-secondary"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-5 flex gap-4 border-t border-grid pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-accent-primary hover:underline"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-accent-primary hover:underline"
                  >
                    <GithubIcon size={14} /> Code
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
