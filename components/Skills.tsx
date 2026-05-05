import SectionLabel from "./SectionLabel";

const skillGroups = [
  {
    category: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript" ],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "React Native", "Node.js", "Nest.js", "SpringBoot", "Flask"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle SQL"],
  },
  {
    category: "Cloud & DevOps",
    items: [ "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Nginx"],
  },
  {
    category: "Tools",
    items: ["Git", "Postman", "Swagger", "Firebase", "Supabase", "Figma"],
  },
];

const humanLanguages = [
  { lang: "Kinyarwanda", level: "Native" },
  { lang: "English", level: "Fluent" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <SectionLabel>Skills</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-14">
        What I work with.
      </h2>

      <div className="space-y-10 mb-16">
        {skillGroups.map((group) => (
          <div key={group.category} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 items-start">
            <p className="text-muted text-xs uppercase tracking-widest pt-1">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-foreground text-xs border border-border px-3 py-1.5 hover:border-accent/50 hover:text-accent transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Human Languages */}
      <div className="border-t border-border pt-10">
        <p className="text-muted text-xs uppercase tracking-widest mb-6">Languages</p>
        <div className="flex flex-wrap gap-6">
          {humanLanguages.map((l) => (
            <div key={l.lang} className="flex items-center gap-3">
              <span className="text-white text-sm font-medium">{l.lang}</span>
              <span className="text-muted text-xs border border-border px-2 py-0.5">{l.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Design / Behance CTA */}
      <div className="mt-12 border border-border p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-accent/30 transition-colors duration-300">
        <div>
          <p className="text-muted text-xs uppercase tracking-widest mb-1">UI/UX Design</p>
          <p className="text-white font-medium text-sm">
            I also design. See my visual work on Behance.
          </p>
          <p className="text-subtle text-xs mt-1">
            Interfaces, product concepts, and visual explorations.
          </p>
        </div>
        <a
          href="https://behance.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2 border border-accent text-accent text-sm hover:bg-accent hover:text-bg transition-all duration-200"
        >
          View on Behance ↗
        </a>
      </div>
    </section>
  );
}
