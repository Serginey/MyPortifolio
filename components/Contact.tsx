import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <SectionLabel>Contact</SectionLabel>
      <div className="mt-10 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Let&apos;s build something
            <br />
            meaningful.
          </h2>
          <p className="text-subtle text-base leading-relaxed">
            I&apos;m always open to conversations about software, collaboration,
            roles, and ideas that matter. Whether it&apos;s a role or just
            a hello — reach out.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              label: "Email",
              value: "iyamuremyesergine241@gmail.com",
              href: "mailto:iyamuremyesergine241@gmail.com",
            },
            {
              label: "GitHub",
              value: "github.com/Serginey",
              href: "https://github.com/Serginey",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/iyamuremye-sergine",
              href: "https://www.linkedin.com/in/iyamuremye-sergine-77aa812b2/",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-border p-5 group hover:border-accent/40 transition-colors duration-200"
            >
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-foreground text-sm">{item.value}</p>
              </div>
              <span className="text-muted group-hover:text-accent transition-colors text-lg">
                ↗
              </span>
            </a>
          ))}

          <div className="pt-4">
            <p className="text-muted text-xs uppercase tracking-widest mb-3">
              Open to
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Full-time roles",
                "Remote (UTC+2)",
                "Product teams",
                "Design + engineering",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-border text-subtle px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
