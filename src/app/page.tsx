// src/app/page.tsx
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Publications from "@/components/Publications";
import Research from "@/components/Research";
import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Research />

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading title="Projects" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profile.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                summary={project.summary}
                tech={project.tech}
                github={project.github || undefined}
                status={project.status}
              />
            ))}
          </div>
        </section>

        <Experience />
        <Publications />
        <Awards />
        <Skills />
        <Contact />
      </main>
    </>
  );
}