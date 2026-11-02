// src/components/Header.tsx
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/content/profile";

const navLinks = [
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="font-display text-lg text-ink">
          {profile.name}
        </a>

        <nav aria-label="Main" className="hidden gap-6 text-sm text-muted xl:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MobileMenu links={navLinks} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}


