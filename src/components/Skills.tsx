// src/components/Skills.tsx
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/profile";

const labels: Record<keyof typeof profile.skills, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  data: "Data",
  tools: "Tools",
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading title="Skills" />

      <dl className="mt-10">
        {(Object.keys(profile.skills) as (keyof typeof profile.skills)[]).map((key) => (
          <div key={key} className="grid gap-2 border-t border-rule py-5 md:grid-cols-[1fr_2fr] md:gap-12">
            <dt className="text-sm text-muted">{labels[key]}</dt>
            <dd className="leading-relaxed text-ink/85">{profile.skills[key].join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}