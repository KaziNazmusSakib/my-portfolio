// src/components/Research.tsx
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/profile";

export default function Research() {
  const thesis = profile.projects.find((p) => p.title.includes("Dengue"));

  return (
    <section id="research" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading title="Research" />

      <ul className="mt-10">
        {profile.researchInterests.map((interest) => (
          <li key={interest} className="border-t border-rule py-4 text-lg text-ink/85">
            {interest}
          </li>
        ))}
      </ul>

      {thesis && (
        <div className="mt-14 border-t border-rule pt-10">
          <p className="text-sm text-muted">Current work</p>
          <h3 className="mt-2 font-display text-2xl text-ink">{thesis.title}</h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/85">{thesis.summary}</p>
          <p className="mt-3 text-sm text-muted">{thesis.status}</p>
        </div>
      )}
    </section>
  );
}