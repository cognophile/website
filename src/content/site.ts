// Single source of truth for site content. Edit here to update the page.

export const person = {
  name: "Alex",
  role: "Senior Software Engineer",
  headline:
    "Building robust systems through precise engineering and understated design.",
  tagline:
    "Specialist in coffee consumption, often found building software or watching motorsport.",
  summary: [
    "I'm a senior software engineer with over a decade of experience building and maintaining business-critical software across finance, research and enterprise settings. My work sits where reliability, performance and developer experience meet.",
    "I care about clean, well-tested code, documentation that earns its keep, and mentoring other engineers. The best solutions I've shipped have been the simple, observable ones that were still easy to change three years later.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/cognophile" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alexboggis/" },
  { label: "Hashnode", href: "https://cognophile.hashnode.dev" },
  { label: "Mastodon", href: "https://mastodon.social/@cognophile" },
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
    category: "Web Platform",
    name: "MedClerk",
    description:
      "Medical centre management system covering patients, staff and scheduling.",
    links: [{ label: "Repo", href: "https://github.com/cognophile/MedClerk" }],
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
    company: "Mattioli Woods plc",
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
