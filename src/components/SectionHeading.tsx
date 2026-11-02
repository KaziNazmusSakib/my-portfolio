// src/components/SectionHeading.tsx
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-widest text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2>
    </div>
  );
}

