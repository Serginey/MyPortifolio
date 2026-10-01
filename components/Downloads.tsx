import SectionLabel from "./SectionLabel";

const docs = [
  {
    title: "Curriculum Vitae",
    desc: "One page: skills, experience, projects and education.",
    file: "/Iyamuremye_Sergine_CV.pdf",
    label: "Download CV",
  },
  {
    title: "Motivation Letter",
    desc: "My story, goals, and why I build what I build.",
    file: "/Iyamuremye_Sergine_Motivation_Letter.pdf",
    label: "Download Letter",
  },
];

export default function Downloads() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <SectionLabel>Documents</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-14">
        Resume & documents.
      </h2>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {docs.map((doc) => (
          <div
            key={doc.title}
            className="bg-bg p-8 flex flex-col justify-between hover:bg-surface transition-colors duration-200 group"
          >
            <div>
              <div className="w-8 h-8 border border-border flex items-center justify-center mb-6 group-hover:border-accent/50 transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent"
                >
                  <path d="M2 2h6l3 3v7H2V2z" />
                  <path d="M8 2v3h3" />
                  <path d="M4 7h5M4 9.5h3" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base mb-2">
                {doc.title}
              </p>
              <p className="text-subtle text-sm leading-relaxed mb-8">
                {doc.desc}
              </p>
            </div>
            <a
              href={doc.file}
              download
              className="text-xs text-accent border border-border px-4 py-2 hover:border-accent hover:bg-accent hover:text-bg transition-all duration-200 inline-block text-center"
            >
              {doc.label} ↓
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
