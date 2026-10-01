"use client";
import { useState } from "react";
import SectionLabel from "./SectionLabel";

const traits = [
  {
    title: "Builder",
    desc: "I think in systems and ship real products. If it solves a real problem, I want to build it.",
  },
  {
    title: "Design-Driven",
    desc: "Great software isn't just functional — it's beautiful. I care deeply about UI/UX and the experience behind every interface.",
  },
  {
    title: "Data-focused",
    desc: "Good decisions come from good data. I love turning raw information into insight and building the pipelines that make it possible.",
  },
  {
    title: "Community-Driven",
    desc: "As Spring-initiative mentor, I know that technical work doesn't happen in isolation. People and trust matter as much as code.",
  },
];

const tabs = {
  Background: `I'm Iyamuremye Sergine — a full-stack developer and UI/UX designer from Rwanda.
My path has been shaped by a genuine curiosity: not just what the tools do, but why they work, and how they can become more useful.


That curiosity extends beyond coursework. I've built full-stack applications, dug into data pipelines,
and shipped tools that real people use. I learn by building, and I build toward things that actually matter.`,

  Interests: `I'm especially drawn to problems where software meets the
  real world in high-stakes ways —  healthcare data tools,
  nonprofit infrastructure,  and developer tooling that helps other builders move faster.

I'm also interested in the craft of software itself: clean architecture, thoughtful
product design, and the kind of engineering
that makes systems feel inevitable once you encounter them..`,

  "Beyond Tech": `Outside of code and research, I serve as a PLP Coordinator at RCA —
  a role that has taught me more about leadership, empathy, and navigating hard conversations than any class ever could.
  Supporting a community of students is its own kind of systems work.

I care deeply about mentorship, academic access, and building environments where people feel
supported to take risks,ask hard questions, and grow into their potential.`,
};

export default function About() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("Background");

  return (
    <section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-border"
    >
      <SectionLabel>About</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-14">
        The person behind the builds.
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — traits */}
        <div className="space-y-8">
          {traits.map((t) => (
            <div key={t.title} className="flex gap-4">
              <div className="w-px bg-accent/60 shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold text-sm mb-1">
                  {t.title}
                </p>
                <p className="text-subtle text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-3 pt-4">
            {[
              { label: "Location", value: "Kigali · UTC+2" },
              { label: "Focus", value: "Eng. + Design" },
              { label: "Currently", value: "Engineer @ NHIC" },
              { label: "Status", value: "Open to opportunities" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-border p-4 hover:border-accent/40 transition-colors duration-300"
              >
                <p className="text-muted text-xs uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-foreground text-sm font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — tabbed content */}
        <div>
          <div className="flex gap-0 border-b border-border mb-8">
            {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-3 text-sm transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-muted hover:text-subtle"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-accent" />
                )}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {tabs[activeTab]
              .trim()
              .split("\n\n")
              .map((para, i) => (
                <p key={i} className="text-subtle text-sm leading-[1.9]">
                  {para.trim()}
                </p>
              ))}
          </div>

          <a
            href="#contact"
            className="inline-block mt-10 text-sm text-accent hover:text-accent/70 transition-colors"
          >
            Let&apos;s connect →
          </a>
        </div>
      </div>
    </section>
  );
}
