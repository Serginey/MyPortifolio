import SectionLabel from "./SectionLabel";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Cylacon",
    
    period: "2026",
    type: "Internship",
    bullets: [
      "Contributed to engineering projects across front-end and back-end systems.",
      "Participated in product delivery workflows and internal tooling improvements.",
      "Collaborated with the engineering team on feature development and testing.",
    ],
  },
  {
    role: "Student Developer",
    company: "Rwanda Coding Academy",
    period: "2023 – 2026",
    type: "Academic Projects",
    bullets: [
      "Built software engineering projects as part of the RCA curriculum.",
      "Worked on embedded systems and cybersecurity-adjacent coursework.",
      "Developed collaborative projects with peers in a competitive environment.",
    ],
  },
  {
    role: "Personal Projects",
    company: "Self-directed",
    period: "Ongoing",
    type: "Independent",
    bullets: [
      "Designed and built full-stack web applications and developer tools.",
      "Explored data pipelines, APIs, and product design independently.",
      "Shipped real tools used by people outside of a classroom context.",
    ],
  },
  {
    role: "Hackathon Participant",
    company: "Multiple Events",
    period: "Ongoing",
    type: "Independent",
    bullets: [
      "Competed in multiple hackathons, shipping functional product prototypes under time pressure. Strong emphasis on real-world relevance, product thinking, and clean execution.",
      "Pitched technical products to judges and stakeholder audiences",
      "Led cross-functional teams under 24–48 hour build timelines",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <SectionLabel>Experience</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-14">
        Where I&apos;ve shown up.
      </h2>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border group"
          >
            {/* Left */}
            <div>
              <p className="text-foreground text-sm font-medium mb-1">{exp.period}</p>
              <p className="text-muted text-xs uppercase tracking-widest">{exp.type}</p>
            </div>

            {/* Right */}
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="text-white text-lg font-semibold">{exp.role}</h3>
                <span className="text-accent text-sm">@ {exp.company}</span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-subtle text-sm leading-relaxed flex gap-3">
                    <span className="text-accent mt-1.5 shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
