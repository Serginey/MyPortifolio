import SectionLabel from "./SectionLabel";

const articles = [
  {
    title:
      "Rwandan Students Emerge Winners of National Cyberlympics at Africa Cyber Defence Forum",
    publication: "The New Times",
    date: "October 2024",
    summary:
      "Placed 3rd in the inaugural Cyberlympics Rwanda — a national cybersecurity competition held at the Africa Cyber Defence Forum, covering offensive cyber warfare, digital forensics, and cyber defence.",
    href: "https://www.newtimes.co.rw/article/21006/news/technology/featured-rwandan-students-emerge-winners-of-national-cyberlympics-at-africa-cyber-defense-forum",
  },
 {
  title: "High School Students Get Front-Row Seat to Space Science at RSA Space Week",
  publication: "Rwanda Space Agency / Press",
  date: "October 2024",
  summary:
    "Presented an AI-powered satellite project at RSA's 3rd Space Week — using real-time satellite data and AI to monitor security and help humanitarian organisations predict crises like flooding.",
  href: "https://en.igihe.com/science-technology/article/rsa-engages-high-school-students-in-space-tech-and-science-during-space-week",
}

];

export default function Articles() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <SectionLabel>Writing & Features</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-14">
        Articles & mentions.
      </h2>

      <div className="space-y-0">
        {articles.map((a, i) => (
          <a
            key={i}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row md:items-start md:justify-between py-8 border-b border-border group hover:bg-surface/30 px-2 -mx-2 transition-colors duration-200"
          >
            <div className="flex-1">
              <h3 className="text-white font-medium text-base mb-1 group-hover:text-accent transition-colors duration-200">
                {a.title}
              </h3>
              <p className="text-subtle text-sm leading-relaxed max-w-lg">
                {a.summary}
              </p>
            </div>
            <div className="mt-3 md:mt-0 md:ml-10 shrink-0 text-right">
              <p className="text-accent text-sm">{a.publication}</p>
              <p className="text-muted text-xs mt-0.5">{a.date}</p>
              <p className="text-muted text-xs mt-2 group-hover:text-accent transition-colors">
                Read more ↗
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
