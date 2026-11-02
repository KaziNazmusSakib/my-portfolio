// src/components/Publications.tsx
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/profile";

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading title="Publications" />

      <ol className="mt-10 space-y-0">
        {profile.publications.map((pub) => (
          <li key={pub.title} className="grid gap-2 border-t border-rule py-8 md:grid-cols-[1fr_2fr] md:gap-12">
            <p className="text-sm text-muted">
              {pub.year}
              <span className="block">{pub.status}</span>
            </p>

            <div>
              <h3 className="font-display text-xl leading-snug text-ink">{pub.title}</h3>
              <p className="mt-2 text-sm text-muted">{pub.venue}</p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-accent underline underline-offset-4 decoration-rule hover:decoration-accent"
                >
                  Read paper
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}