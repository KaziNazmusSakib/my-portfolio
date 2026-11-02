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
  image?: string;
  imageAlt?: string;
};

const linkClass =
  "text-accent underline underline-offset-4 decoration-rule hover:decoration-accent";

export default function ProjectCard({
  title,
  summary,
  tech,
  github,
  demo,
  status,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      {image && (
        <div className="project-media">
          <img src={image} alt={imageAlt ?? title} loading="lazy" />
        </div>
      )}

      <p className="project-meta flex items-center gap-2 text-xs">
        <span aria-hidden="true" className={`h-2 w-2 rounded-full ${statusDot[status]}`} />
        {status}
      </p>

      <h3 className="project-title mt-4 font-display text-2xl leading-tight">{title}</h3>

      <p className="project-text mt-3 text-sm leading-relaxed">{summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li key={t} className="tech-chip">
            {t}
          </li>
        ))}
      </ul>

      {(github || demo) && (
        <div className="project-footer mt-auto flex gap-5 pt-5 text-sm">
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