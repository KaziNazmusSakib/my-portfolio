// src/components/Header.tsx
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/content/profile";

const navLinks = [
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="font-display text-lg text-ink">
          {profile.name}
        </a>

        <nav className="hidden gap-6 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}