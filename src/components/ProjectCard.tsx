// src/components/ProjectCard.tsx
type Status = "Live demo" | "Code only" | "In progress";

const statusStyles: Record<Status, string> = {
  "Live demo": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Code only": "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "In progress": "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

type ProjectCardProps = {
  title: string;
  summary: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: Status;
};

export default function ProjectCard({
  title,
  summary,
  tech,
  github,
  demo,
  status,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/40 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li key={t} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-4 text-sm">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
            Code
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}