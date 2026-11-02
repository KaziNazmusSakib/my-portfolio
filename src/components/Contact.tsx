// src/components/Contact.tsx
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/profile";

const linkClass =
  "text-accent underline underline-offset-4 decoration-rule hover:decoration-accent";

export default function Contact() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "GitHub", href: profile.links.github },
    { label: "LinkedIn", href: profile.links.linkedin },
    { label: "LeetCode", href: profile.links.leetcode },
  ].filter((link) => link.href);

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading title="Contact" />

      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/85">
        Open to research collaboration, internships and graduate opportunities. If my work is relevant to your group, I would be glad to hear from you.
      </p>

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className={linkClass}
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="mt-16 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}