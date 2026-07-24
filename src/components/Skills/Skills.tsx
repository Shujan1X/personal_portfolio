import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { skills } from '../../data/portfolio';
import type { SkillItem } from '../../types';

const groupByCategory = (items: SkillItem[]): Record<string, SkillItem[]> => {
  return items.reduce<Record<string, SkillItem[]>>((groups, item) => {
    groups[item.category] = groups[item.category] ? [...groups[item.category], item] : [item];
    return groups;
  }, {});
};

const Skills = () => {
  const groupedSkills = groupByCategory(skills);

  return (
    <Section id="skills" className="border-t border-grid">
      <SectionHeading eyebrow="// Skills" title="What I bring to the table" />

      <div className="mt-10 space-y-8">
        {Object.entries(groupedSkills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-secondary">{category}</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {items.map((skill) => (
                <li
                  key={skill.id}
                  className="rounded-full border border-grid px-4 py-2 font-body text-sm text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
