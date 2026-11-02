// src/content/profile.ts
 
export const profile = {
  name: "Kazi Nazmus Sakib",
  title: "Computer Science & Engineering Graduate", // TODO: align with academic CV
  email: "kazinazmussakib36@gmail.com",           // TODO: confirm public contact
  location: "Dhaka, Bangladesh",
  links: {
    github: "https://github.com/KaziNazmusSakib",
    linkedin: "https://www.linkedin.com/in/kazi-nazmus-sakib-54b25b2a3/", // TODO: add your profile URL
    leetcode: "https://leetcode.com/u/KaziNazmusSakib/",     // TODO: add your profile URL
  },
  summary:
    "CSE graduate from American International University–Bangladesh with hands-on full-stack development experience using TypeScript, React, Next.js and NestJS. Interested in applied AI, geospatial analysis and deep learning.", // TODO: rewrite for academic audience
  researchInterests: [
    "Applied machine learning",  
    "Computer vision",
    "Geospatial analysis",
    "Artificial Intilligence",
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "American International University–Bangladesh (AIUB)",
      period: "2022 – 2026",
      detail: "CGPA 3.72",  
    },
  ],
  experience: [
    {
      role: "Full Stack Web Developer Intern",
      company: "OITS Dhaka Ltd",
      period: "May 2026 – Aug 2026",
      points: [
        "Built the company website with React and TypeScript",
        "Integrated Sanity.io headless CMS for dynamic blog content",
        "Developed inventory and product dashboards with Next.js and REST APIs",
      ],
    },
  ],
  projects: [
    {
      title: "NexifyStore",
      summary: "Full-stack store built with NestJS, Next.js and PostgreSQL.",
      tech: ["NestJS", "Next.js", "PostgreSQL", "Tailwind"],
      github: "https://github.com/KaziNazmusSakib",  
      status: "Code only" as const, // "Live demo" | "Code only" | "In progress"
    },
    {
      title: "Hotel Management System",
      summary: "Full-stack hotel management with a PHP backend and relational MySQL schema.",
      tech: ["PHP", "JavaScript", "MySQL"],
      github: "https://github.com/KaziNazmusSakib/Hotel-Management-System",
      status: "Code only" as const,
    },
    {
      title: "Dengue Risk Analysis (BSc Thesis)",
      summary: "Satellite-based dengue risk analysis in Dhaka.",  
      tech: ["Geospatial data", "Machine learning"],  
      github: "", // TODO: add link if public
      status: "In progress" as const,
    },
    {
      title: "Image Captioning",
      summary: "Attention-based English image captioning using CNN with LSTM/GRU.",
      tech: ["Python", "Deep learning"],
      github: "https://github.com/KaziNazmusSakib/Img_to_Caption_Generate",
      status: "Code only" as const,
    },
  ],
  publications: [
    {
      title: "Satellite-based dengue risk analysis in Dhaka", // TODO: final title
      venue: "BSc thesis, AIUB", // TODO: update if submitted to a conference
      year: 2026,
      status: "Thesis", // TODO: "Published" | "Accepted" | "Under review"
      link: "", // TODO
    },
    // {
    //   title: "Attention-based English image captioning", // TODO: final title
    //   venue: "Co-authored paper", // TODO
    //   year: 2026,
    //   status: "Not Published Yet", // TODO
    //   link: "", // TODO
    // },
  ],
  awards: [
    "Dean's Certificate of Excellence (4 times, 2022–2025)",
    "Winner, Science Poster Contest 2022",
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C#", "R"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "NestJS", "REST APIs"],
    data: ["MySQL", "PostgreSQL", "Geospatial analysis"],
    tools: ["Git", "GitHub", "Docker", "Postman"],
  },
};