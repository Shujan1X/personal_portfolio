// Central content source for the portfolio, sourced from Shujan's resume.
//
// No certifications are listed on the resume, so that array is intentionally
// empty — the Certifications component renders a graceful "coming soon"
// state rather than an empty grid. Add entries here once available.

import type {
  SkillItem,
  ExperienceItem,
  ProjectItem,
  CertificationItem,
  QuickFact,
} from '../types';

export const ABOUT_PARAGRAPHS: string[] = [
  "I'm a Senior Business Analyst with 3+ years of experience in requirements gathering, business process analysis, stakeholder management, and data-driven decision support. I specialize in translating business requirements into BRD/FRD documentation, scalable analytical workflows, and interactive dashboards using SQL, Python, Databricks, Tableau, and Power BI.",
  'My work spans gap analysis, root cause analysis, UAT coordination, and reporting automation across marketing, sales, operations, and gaming/LiveOps domains. I thrive in Agile/Scrum environments, partnering with cross-functional teams to deliver measurable business impact.',
];

export const QUICK_FACTS: QuickFact[] = [
  { label: 'Location', value: 'Bengaluru, India' },
  { label: 'Experience', value: '3+ Years in Business Analytics' },
  { label: 'Education', value: 'B.C.A., Bangalore University' },
  { label: 'Languages', value: 'English, Hindi, Bengali, Assamese' },
];

export const skills: SkillItem[] = [
  { id: 'skill-1', name: 'Requirements Gathering (BRD/FRD)', category: 'Business Analysis' },
  { id: 'skill-2', name: 'Stakeholder Management', category: 'Business Analysis' },
  { id: 'skill-3', name: 'Gap Analysis', category: 'Business Analysis' },
  { id: 'skill-4', name: 'Root Cause Analysis', category: 'Business Analysis' },
  { id: 'skill-5', name: 'UAT Coordination', category: 'Business Analysis' },
  { id: 'skill-6', name: 'SQL', category: 'Data & Analytics' },
  { id: 'skill-7', name: 'MS SQL Server', category: 'Data & Analytics' },
  { id: 'skill-8', name: 'MySQL', category: 'Data & Analytics' },
  { id: 'skill-9', name: 'Python', category: 'Data & Analytics' },
  { id: 'skill-10', name: 'PySpark', category: 'Data & Analytics' },
  { id: 'skill-11', name: 'Databricks', category: 'Data & Analytics' },
  { id: 'skill-12', name: 'ETL', category: 'Data & Analytics' },
  { id: 'skill-13', name: 'Data Cleaning', category: 'Data & Analytics' },
  { id: 'skill-14', name: 'Data Modeling', category: 'Data & Analytics' },
  { id: 'skill-15', name: 'Tableau', category: 'Dashboards & Reporting' },
  { id: 'skill-16', name: 'Power BI', category: 'Dashboards & Reporting' },
  { id: 'skill-17', name: 'Advanced Excel', category: 'Dashboards & Reporting' },
  { id: 'skill-18', name: 'KPI Dashboards', category: 'Dashboards & Reporting' },
  { id: 'skill-19', name: 'Reporting Automation', category: 'Dashboards & Reporting' },
  { id: 'skill-20', name: 'Agile / Scrum', category: 'Ways of Working' },
];

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Business Analyst',
    company: 'Affine Analytics',
    startDate: 'Oct 2024',
    endDate: 'Present',
    location: 'Bengaluru, India',
    summary: 'Driving KPI dashboards and LiveOps analytics for player engagement and monetization data.',
    achievements: [
      'Analyze business and player data using SQL, Databricks, Power BI, and Tableau to generate actionable insights.',
      'Develop dashboards to monitor KPIs, track monetization and player engagement, and support LiveOps analytics.',
      'Conduct ad-hoc analysis, troubleshooting, and root cause analysis to support monetization strategy decisions.',
      'Collaborate with cross-functional stakeholders and analytics teams to deliver accurate reporting and insights.',
      'Automate recurring reporting and dashboard workflows to reduce turnaround time for weekly and monthly business reviews.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Technical Research Analyst',
    company: 'Intellipaat Software Solutions',
    startDate: 'Aug 2022',
    endDate: 'Jan 2024',
    location: 'Bengaluru, India',
    summary: 'Resolved data problems and built dashboards to support marketing, sales, and operations decisions.',
    achievements: [
      'Resolved complex data problems using MS SQL and Python, improving operational efficiency.',
      'Built interactive dashboards in Power BI and Tableau to drive real-time decision-making.',
      'Transformed CRM and support data into actionable insights to inform business strategies.',
      'Reduced reporting time through automated dashboards and improved visual storytelling.',
      'Collaborated with marketing, sales, and operations to ensure data accuracy and consistency.',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Agent Performance Analysis',
    description:
      'Integrated Zoho Desk and CRM data into MS SQL Server to analyze agent performance and sales trends, then built weekly, monthly, and quarterly Power BI dashboards tracking resolution times and agent efficiency for leadership.',
    tags: ['SQL Server', 'Power BI', 'Data Wrangling'],
  },
  {
    id: 'proj-2',
    title: 'Call of Duty: Mobile (CODM) Analytics',
    description:
      'Designed an end-to-end analytics system tracking weapon, draw, and crate performance across LiveOps KPIs, using Databricks ETL pipelines and Tableau dashboards to monitor player engagement, conversion, and revenue.',
    tags: ['Databricks', 'Tableau', 'LiveOps'],
  },
  {
    id: 'proj-3',
    title: 'Help Desk Data Analysis',
    description:
      'Analyzed 9,542 support tickets, surfacing a 13.45% resolution rate and 71.66% open-ticket volume, then built Tableau dashboards tracking SLA trends and customer satisfaction to guide targeted improvements.',
    tags: ['Tableau', 'Data Analysis'],
  },
];

// No certifications listed on the resume yet.
export const certifications: CertificationItem[] = [];
