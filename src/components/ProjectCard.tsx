// src/components/ProjectCard.tsx
type Status = "Live demo" | "Code only" | "In progress";

const statusDot: Record<Status, string> = {
  "Live demo": "bg-sage",
  "Code only": "bg-accent",
  "In progress": "bg-ochre",
};

type ProjectCardProps = {
  title: string;
  summary: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: Status;
};

const linkClass =
  "text-accent underline underline-offset-4 decoration-rule hover:decoration-accent";

export default function ProjectCard({ title, summary, tech, github, demo, status }: ProjectCardProps) {
  return (
    <article className="project-card">
      <p className="flex items-center gap-2 text-xs text-muted">
        <span aria-hidden="true" className={`h-2 w-2 rounded-full ${statusDot[status]}`} />
        {status}
      </p>

      <h3 className="mt-4 font-display text-2xl leading-tight text-ink">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-ink/80">{summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <li key={t} className="tech-chip">
            {t}
          </li>
        ))}
      </ul>

      {(github || demo) && (
        <div className="mt-auto flex gap-5 border-t border-rule pt-4 pt-5 text-sm">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className={linkClass}>
              Code
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className={linkClass}>
              Live demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}