import SectionLabel from "./SectionLabel";

const certs = [
  {
    title: "Cybersecurity — Cyberium",
    issuer: "Cyberium",
    year: "2024",
    desc: "Completed a comprehensive cybersecurity programme covering core defence and offensive security concepts.",
  },
  {
    title: "Kigali Hacks — Hackathon Finalist",
    issuer: "Kigali Hacks",
    year: "2024",
    desc: "Participated and certified at Kigali Hacks 2024, one of Rwanda's leading student hackathon events.",
  },
  {
    title: "RCA Hackathon — Certificate of Participation",
    issuer: "Rwanda Coding Academy",
    year: "2024",
    desc: "Competed in the RCA internal hackathon, building and shipping a functional product under time pressure.",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <SectionLabel>Licences & Certifications</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-14">
        Credentials.
      </h2>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {certs.map((c, i) => (
          <div key={i} className="bg-bg p-6 hover:bg-surface transition-colors duration-200">
            <p className="text-accent text-xs uppercase tracking-widest mb-3">{c.year}</p>
            <h3 className="text-white font-medium text-base mb-1">{c.title}</h3>
            <p className="text-muted text-sm mb-4">{c.issuer}</p>
            <p className="text-xs text-subtle leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
