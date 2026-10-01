import SectionLabel from "./SectionLabel";

const experiences = [
  {
    role: "Software Engineer, Full-Stack",
    company: "National Health Intelligence Center",
    period: "Aug 2026 – Present",
    type: "Full-time",
    bullets: [
      "Build frontend and backend features for the Rwanda FDA Inspection Platform (RFIP), a national system digitising regulatory inspection workflows.",
      "Ship UI with React, TypeScript and Tailwind CSS, and APIs with NestJS and PostgreSQL, in a Dockerised monorepo.",
      "Deliver role-based dashboard features that give each user a personal, actionable view of their work.",
      "Write Jest tests and take part in code reviews through a merge-request workflow.",
    ],
  },
  {
    role: "Software Engineering Intern, UI/UX & Frontend",
    company: "Cylacon",
    period: "2026",
    type: "Internship",
    bullets: [
      "Designed and built client-facing interfaces for MedGate and Nyumba, from Figma mockup to deployment.",
      "Built responsive React and TypeScript components that work across devices.",
      "Ran usability reviews of existing products and delivered usability and accessibility improvements.",
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
    role: "Hackathon Participant",
    company: "Multiple Events",
    period: "Ongoing",
    type: "Independent",
    bullets: [
      "Competed in multiple hackathons, shipping functional product prototypes under time pressure. Strong emphasis on real-world relevance, product thinking, and clean execution.",
      "Led backend development for Pulse, an emergency response system built under hackathon time pressure.",
      "Pitched technical products to judges and stakeholder audiences.",
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
