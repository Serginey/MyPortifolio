export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-xs">
          © {new Date().getFullYear()} Iyamuremye Sergine. All rights reserved.
        </p>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/Serginey" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/iyamuremye-sergine-77aa812b2/" },
            { label: "Email", href: "mailto:iyamuremyesergine241@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted text-xs hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
