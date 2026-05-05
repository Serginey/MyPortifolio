import SectionLabel from "./SectionLabel";

const projects = [
  {
    number: "01",
    title: "Nyumba",
    description:
      "Nyumba is a Rwanda-first digital property marketplace addressing critical gaps in the affordable housing segment, Unlike existing platforms that cater to premium properties, Nyumba enforces quality through paid listings, integrates local payment methods, and focuses on trust-building between renters, landlords, and agents",
    tags: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/Cylacon-Rda/nyumba",
    live: "https://www.kunyumba.site/",
  },
  {
    number: "02",
    title: "Medgate",
    description:
      "MedGate is a Rwanda-based digital platform that connects international and local patients to verified hospitals and medical services in Rwanda.",
    tags: ["React", "Typescript", "PostgreSQL"],
    github: "https://github.com/Cylacon-Rda/MedGate",
    live: "https://www.medgate.rw/",
  },
  {
    number: "03",
    title: "Delish",
    description:
      "Worked on the delish online food ordering platform, contributing to both frontend and backend development. Implemented features such as user authentication, restaurant listings, menu management, and order processing using Next.js, Tailwind CSS, and Supabase.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    github: "https://github.com/Serginey/Delish_online",
    live: null,
  },
  {
    number: "04",
    title: "AI_JOB_SCREENER",
    description:
      "An AI-powered tool designed to streamline the recruitment process by automatically screening job applications. It uses natural language processing to analyze resumes and cover letters, identifying key skills and qualifications to help recruiters quickly shortlist candidates.",
    tags: ["JavaScript", "CSS", "APIs"],
    github: "https://github.com/Serginey/ai_job_screener",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <div className="flex items-end justify-between mb-14">
        <div>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4">
            Things I&apos;ve built.
          </h2>
        </div>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:text-accent/70 transition-colors hidden md:block"
        >
          All on GitHub →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {projects.map((p) => (
          <div
            key={p.number}
            className="bg-bg p-8 group hover:bg-surface transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-border text-4xl font-bold">{p.number}</span>
              <div className="flex items-center gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    Live ↗
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors text-sm"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-accent transition-colors duration-200">
              {p.title}
            </h3>
            <p className="text-subtle text-sm leading-relaxed mb-6">{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-muted text-xs border border-border px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
