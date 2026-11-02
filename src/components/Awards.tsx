// src/components/Awards.tsx
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/profile";

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading title="Awards" />

      <ul className="mt-10">
        {profile.awards.map((award) => (
          <li key={award} className="border-t border-rule py-4 text-lg text-ink/85">
            {award}
          </li>
        ))}
      </ul>
    </section>
  );
}