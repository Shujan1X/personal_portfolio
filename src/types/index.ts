// Shared type definitions for the portfolio's content model.
// Populated with real data in Phase 3 (Content).

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface QuickFact {
  label: string;
  value: string;
}
