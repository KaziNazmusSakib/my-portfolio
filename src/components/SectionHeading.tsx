// src/components/SectionHeading.tsx
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

   // src/components/SectionHeading.tsx
   export default function SectionHeading({ title }: { title: string }) {
     return (
       <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
     );
   }
