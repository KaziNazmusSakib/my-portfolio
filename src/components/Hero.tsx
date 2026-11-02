// src/components/Hero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";

function ContourMotif() {
  const base =
    "M300 60 C430 40 540 150 530 300 C520 450 410 560 290 540 C160 520 60 430 70 290 C80 150 170 80 300 60 Z";
  const rings = [0, 1, 2, 3, 4, 5];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="pointer-events-none absolute right-0 top-1/2 h-[120%] -translate-y-1/2 text-rule opacity-70 md:h-[140%]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {rings.map((i) => (
        <path
          key={i}
          d={base}
          transform={`translate(300 300) scale(${1 - i * 0.14}) translate(-300 -300)`}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden px-6">
      <ContourMotif />

      <div className="relative mx-auto w-full max-w-4xl py-24">
        <motion.p {...rise(0)} className="text-sm text-muted">
          {profile.location}
        </motion.p>

        <motion.h1
          {...rise(0.1)}
          className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p {...rise(0.2)} className="mt-5 text-lg text-muted md:text-xl">
          {profile.title}
        </motion.p>

        <motion.p {...rise(0.3)} className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/85">
          {profile.summary}
        </motion.p>

        <motion.div {...rise(0.4)} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
          <a href="#research" className="text-accent underline underline-offset-4 decoration-rule hover:decoration-accent">
            Research
          </a>
          <a href={`mailto:${profile.email}`} className="text-accent underline underline-offset-4 decoration-rule hover:decoration-accent">
            Email
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-accent underline underline-offset-4 decoration-rule hover:decoration-accent">
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}