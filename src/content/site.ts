// Single source of truth for site content. Edit here to update the page.

export const person = {
  name: "Alex",
  pseudonym: "cognophile",
  role: "Senior Software Engineer",
  headline:
    "Crafting software and systems with care.",
  tagline:
    "Always learning; often coding. Powered by caffiene.",
  summary: [
    "I'm a senior software engineer with over a decade of experience building and maintaining business-critical software across finance, research, and enterprise settings.", 
    "My efforts sit where reliability, performance and engineering experience meet. I care deeply about crafting maintainable architectures, clean and well-tested code, and documentation that earns its keep, all whilst mentoring students and other engineers.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/cognophile" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alexboggis/" },
  { label: "Hashnode", href: "https://cognophile.hashnode.dev" },
  { label: "BlueSky", href: "https://bsky.app/profile/cognophile.bsky.social" },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/5012644/cognophile",
  },
];

export type Project = {
  category: string;
  name: string;
  description: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    category: "Productivity",
    name: "NotaFresca",
    description: "Notes, but simpler — a pared-back note-taking application.",
    links: [
      { label: "Repo", href: "https://github.com/cognophile/NotaFresca" },
      { label: "Site", href: "https://cognophile.github.io/NotaFrescaLander/" },
    ],
  },
  {
    category: "Mobile",
    name: "Worrybook",
    description:
      "Write more; worry less. My foray into iOS development, built in Swift.",
    links: [
      { label: "Repo", href: "https://github.com/cognophile/Worrybook" },
      { label: "Site", href: "https://worrybook.webflow.io/" },
    ],
  },
  {
    category: "Desktop",
    name: "Deskcal",
    description:
      "Google Calendar on any desktop — a lightweight always-visible agenda.",
    links: [{ label: "Repo", href: "https://github.com/cognophile/Deskcal" }],
  },
  {
    category: "Library",
    name: "Toolblox",
    description:
      "A one-stop library for common utilities for developing .NET applications.",
    links: [{ label: "Repo", href: "https://github.com/cognophile/Toolblox" }],
  },
];

export type Role = {
  period: string;
  company: string;
  title: string;
  href: string;
};

export const career: Role[] = [
  {
    period: "Present",
    company: "The Access Group",
    title: "Senior Software Engineer",
    href: "https://www.theaccessgroup.com/en-gb/",
  },
  {
    period: "Previously",
    company: "Mattioli Woods",
    title: "Software Developer",
    href: "https://mattioliwoods.com/",
  },
  {
    period: "Previously",
    company: "Isaac Newton Institute",
    title: "Software Developer",
    href: "https://www.newton.ac.uk/",
  },
  {
    period: "Previously",
    company: "University of Cambridge",
    title: "Computer Associate",
    href: "https://www.cam.ac.uk/",
  },
];

export const blogUrl = "https://cognophile.hashnode.dev";
