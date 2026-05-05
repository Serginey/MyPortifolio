import SectionLabel from "./SectionLabel";

const education = [
  {
    school: "Rwanda Coding Academy",
    degree: "Software Engineering, Embedded Systems & Cybersecurity",
    period: "2023 – 2026",
    note: "Specialized high school focused on technical excellence.",
  },
  {
    school: "FAWE Girls School",
    degree: "Secondary Education",
    period: "2020 – 2023",
    note: "Foundation in sciences and mathematics.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <SectionLabel>Education</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-14">
        Academic background.
      </h2>

      <div className="space-y-6">
        {education.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center justify-between border border-border p-6 hover:border-accent/30 transition-colors duration-300"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">{e.school}</h3>
              <p className="text-subtle text-sm mb-1">{e.degree}</p>
              <p className="text-muted text-xs">{e.note}</p>
            </div>
            <span className="text-accent text-sm font-medium mt-4 md:mt-0 shrink-0">
              {e.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
