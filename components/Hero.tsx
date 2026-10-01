export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
      <div className="max-w-2xl">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
          Open to remote full-time roles
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-3">
          Iyamuremye
          <br />
          Sergine
        </h1>
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-6 italic">
          Full-Stack Developer · UI/UX Designer
        </p>
        <p className="text-subtle text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
          I design and build complete products — from Figma to production —
          with React, Next.js, Tailwind CSS and Node.js. Currently shipping a
          national regulatory platform at Rwanda&apos;s National Health
          Intelligence Center.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-accent text-bg text-sm font-medium hover:bg-accent/90 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6 mt-14">
          {[
            { label: "GitHub", href: "https://github.com/Serginey" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/iyamuremye-sergine-77aa812b2/" },
            { label: "Email", href: "mailto:iyamuremyesergine241@gmail.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-sm hover:text-accent transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-subtle tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-border animate-pulse" />
      </div>
    </section>
  );
}
