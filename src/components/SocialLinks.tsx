import { Github, Linkedin, Hash, Twitter, Layers } from "lucide-react";
import { socials } from "@/content/site";

const icons: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Hashnode: Hash,
  BlueSky: Twitter,
  "Stack Overflow": Layers,
};

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map((social) => {
        const Icon = icons[social.label] ?? Github;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="me noreferrer"
            aria-label={social.label}
            title={social.label}
            className="flex size-10 items-center justify-center rounded-[10px] border border-border bg-card text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Icon className="size-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
