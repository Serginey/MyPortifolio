export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-xs">
          © {new Date().getFullYear()} Iyamuremye Sergine. All rights reserved.
        </p>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/" },
            { label: "LinkedIn", href: "https://linkedin.com/" },
            { label: "Email", href: "mailto:hello@example.com" },
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
