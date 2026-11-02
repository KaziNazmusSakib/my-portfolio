// // src/app/page.tsx
// import { profile } from "@/content/profile";
// import FadeIn from "@/components/FadeIn";
// import ProjectCard from "@/components/ProjectCard";
// import SectionHeading from "@/components/SectionHeading";
// import Experience from "@/components/Experience";
// import Research from "@/components/Research";
// import Hero from "@components/Hero";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
//       <div className="mx-auto max-w-5xl">
//         <FadeIn>
//           <h1 className="text-4xl font-bold text-white">{profile.name}</h1>
//           <p className="mt-2 text-slate-400">{profile.title}</p>
//         </FadeIn>

//         <section className="mt-16 grid gap-6 md:grid-cols-2">
//           {profile.projects.map((project, i) => (
//             <FadeIn key={project.title} delay={i * 0.1}>
//               <ProjectCard
//                 title={project.title}
//                 summary={project.summary}
//                 tech={project.tech}
//                 github={project.github || undefined}
//                 status={project.status}
//               />
//             </FadeIn>
//           ))}
//         </section>
//       </div>
//     </main>
//   );
// }


// src/app/page.tsx
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Research from "@/components/Research";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <main>
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
  );
}