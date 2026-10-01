import SectionLabel from "./SectionLabel";

const projects = [
  {
    number: "01",
    title: "Pulse",
    description:
      "Emergency response system that locates patients by GPS, finds the nearest hospital with ER capacity, and dispatches an ambulance or community driver on an optimised route. I led the backend.",
    tags: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    caseStudy: "/work/pulse",
    github: null,
    live: null,
  },
  {
    number: "02",
    title: "MedGate",
    description:
      "Platform connecting local and international patients to verified hospitals in Rwanda — request matching, appointment scheduling and hospital profiles. Built at Cylacon.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    caseStudy: "/work/medgate",
    github: null,
    live: "https://www.medgate.rw/",
  },
  {
    number: "03",
    title: "AI Job Screener",
    description:
      "Upload PDF résumés and get an AI-ranked shortlist with scores, strengths and gaps for every candidate. Gemini extracts structured data from each résumé and ranks candidates against a weighted rubric.",
    tags: ["Next.js", "Tailwind", "MongoDB", "Gemini API"],
    caseStudy: "/work/ai-job-screener",
    github: "https://github.com/Serginey/ai_job_screener",
    live: null,
  },
  {
    number: "04",
    title: "Nyumba",
    description:
      "Rwanda-first property marketplace for affordable housing: verified listings, search and filters, mobile-money payments and a mobile-first UI. Built at Cylacon.",
    tags: ["React", "TypeScript", "Node.js"],
    caseStudy: null,
    github: null,
    live: "https://www.kunyumba.site/",
  },
  {
    number: "05",
    title: "Delish",
    description:
      "Worked on the delish online food ordering platform, contributing to both frontend and backend development. Implemented features such as user authentication, restaurant listings, menu management, and order processing using Next.js, Tailwind CSS, and Supabase.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    caseStudy: null,
    github: "https://github.com/Serginey/Delish_online",
    live: null,
  },
  {
    number: "06",
    title: "GrowthIndex Dashboard",
    description:
      "A presentation-ready analytics dashboard for exploring Green Growth Index performance across countries, continents, and sustainability dimensions. It transforms country-level data into interactive maps, comparison views, regional summaries, country profiles, searchable evidence tables, projections, and scenario simulations.",
    tags: ["Data Analytics", "Dashboard", "Visualization"],
    caseStudy: null,
    github: "https://github.com/Serginey/GrowthIndex",
    live: "https://growthindex-dashboard-4.onrender.com/",
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
          href="https://github.com/Serginey"
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
                {p.caseStudy && (
                  <a
                    href={p.caseStudy}
                    className="text-accent hover:text-accent/70 transition-colors text-sm"
                  >
                    Case study →
                  </a>
                )}
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
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    GitHub ↗
                  </a>
                )}
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
