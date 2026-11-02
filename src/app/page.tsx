// src/app/page.tsx
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Research from "@/components/Research";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Research />

        <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading title="Projects" />
          <div className="mt-10">
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
      </main>
    </>
  );
}