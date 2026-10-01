import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { caseStudies, getCaseStudy } from "@/lib/work";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case study · Iyamuremye Sergine`,
    description: study.tagline,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <article className="px-6 max-w-3xl mx-auto pt-32 pb-24">
        <a href="/#projects" className="text-sm text-subtle hover:text-accent transition-colors">
          ← All projects
        </a>

        <header className="mt-10 mb-14">
          <SectionLabel>Case study</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mt-4 mb-4">
            {study.title}
          </h1>
          <p className="text-subtle text-lg md:text-xl font-light leading-relaxed">{study.tagline}</p>

          <dl className="grid sm:grid-cols-2 gap-px bg-border mt-10 border border-border">
            <div className="bg-bg p-5">
              <dt className="text-muted text-xs uppercase tracking-widest mb-1">My role</dt>
              <dd className="text-foreground text-sm">{study.role}</dd>
            </div>
            <div className="bg-bg p-5">
              <dt className="text-muted text-xs uppercase tracking-widest mb-1">Context</dt>
              <dd className="text-foreground text-sm">{study.context}</dd>
            </div>
            <div className="bg-bg p-5 sm:col-span-2">
              <dt className="text-muted text-xs uppercase tracking-widest mb-2">Stack</dt>
              <dd className="flex flex-wrap gap-2">
                {study.stack.map((s) => (
                  <span key={s} className="text-foreground text-xs border border-border px-2 py-1">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            {study.live && (
              <a
                href={study.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-accent text-bg text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Visit live product ↗
              </a>
            )}
            {study.repo && (
              <a
                href={study.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-border text-foreground text-sm hover:border-accent hover:text-accent transition-all"
              >
                View code ↗
              </a>
            )}
            {study.repoNote && <p className="text-muted text-xs">{study.repoNote}</p>}
          </div>
        </header>

        <section className="mb-14">
          <h2 className="text-white text-xl font-semibold mb-4">The problem</h2>
          <p className="text-subtle leading-[1.9]">{study.problem}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-white text-xl font-semibold mb-4">What we built</h2>
          <ul className="space-y-2">
            {study.built.map((b) => (
              <li key={b} className="text-subtle text-sm leading-relaxed flex gap-3">
                <span className="text-accent shrink-0">—</span>
                {b}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-white text-xl font-semibold mb-6">Key decisions</h2>
          <div className="space-y-px bg-border border border-border">
            {study.decisions.map((d, i) => (
              <div key={d.title} className="bg-bg p-6">
                <p className="text-accent text-xs tracking-widest mb-2">0{i + 1}</p>
                <h3 className="text-white font-medium mb-2">{d.title}</h3>
                <p className="text-subtle text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid sm:grid-cols-2 gap-8 border-t border-border pt-10">
          <div>
            <h2 className="text-muted text-xs uppercase tracking-widest mb-2">Outcome</h2>
            <p className="text-foreground text-sm leading-relaxed">{study.outcome}</p>
          </div>
          <div>
            <h2 className="text-muted text-xs uppercase tracking-widest mb-2">What I&apos;d do next</h2>
            <p className="text-foreground text-sm leading-relaxed">{study.next}</p>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
