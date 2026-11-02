// src/components/Experience.tsx
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading title="Experience" />

      <div className="mt-10">
        {profile.experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="grid gap-3 border-t border-rule py-8 md:grid-cols-[1fr_2fr] md:gap-12"
          >
            <div>
              <h3 className="font-display text-2xl text-ink">{job.role}</h3>
              <p className="mt-1 text-sm text-muted">{job.company}</p>
              <p className="mt-1 text-sm text-muted">{job.period}</p>
            </div>

            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-ink/85">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}