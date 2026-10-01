// Case studies for projects whose code is private (owned by the team or company that built them).
// Each page explains the problem, my role, and the decisions behind the build.

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  context: string;
  role: string;
  stack: string[];
  live?: string;
  repo?: string;
  repoNote?: string;
  problem: string;
  built: string[];
  decisions: { title: string; body: string }[];
  outcome: string;
  next: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pulse",
    title: "Pulse",
    tagline: "Emergency response that sends patients to a hospital that can actually take them.",
    context: "Team hackathon project · Rwanda Coding Academy · mentored by Dr Awet Fesseha",
    role: "Backend lead",
    stack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    repoNote: "Code is owned by the hackathon team. I'm happy to walk through the architecture on a call.",
    problem:
      "In an emergency, the nearest hospital is not always the right one. If its emergency room is full, the patient loses time being redirected, and the hospital receiving them knows nothing about them until they arrive.",
    built: [
      "Automatic patient location via GPS",
      "Matching to the nearest hospital with emergency-room capacity available",
      "Dispatch of an ambulance or a community driver, with route optimisation",
      "Real-time notifications to patients, hospitals and drivers",
      "Pre-arrival handover of essential patient details (blood type, compatible insurance, medical notes)",
    ],
    decisions: [
      {
        title: "Capacity first, then distance",
        body: "Hospitals are filtered by available ER capacity before they are ranked by travel time. Sending someone to a closer hospital that turns them away is slower than sending them slightly further to one that can admit them.",
      },
      {
        title: "Travel time, not straight-line distance",
        body: "Ranking uses road routes from the Google Maps API rather than distance on a map. In Kigali's hills, the closest hospital as the crow flies is often not the quickest to reach.",
      },
      {
        title: "Community drivers as a fallback",
        body: "Ambulances are limited, so when none is available the system can dispatch a registered community driver. A realistic option now beats an ideal option that never arrives.",
      },
      {
        title: "Share only what the ER needs",
        body: "Hospitals receive a minimal handover — blood type, insurance compatibility and key medical details — enough to prepare, without exposing a full medical record.",
      },
    ],
    outcome:
      "Strong recognition from judges and mentors for addressing a real gap in Rwanda's emergency-care infrastructure.",
    next: "Keep hospital capacity fresh without relying on manual updates, and add an SMS fallback for patients with poor data connectivity.",
  },
  {
    slug: "medgate",
    title: "MedGate",
    tagline: "Connecting local and international patients to verified hospitals in Rwanda.",
    context: "Client product · built during my internship at Cylacon",
    role: "UI/UX & frontend engineer (team project)",
    stack: ["React", "TypeScript", "PostgreSQL"],
    live: "https://www.medgate.rw/",
    repoNote: "Repository is private to Cylacon. The product is live.",
    problem:
      "Patients — especially those travelling to Rwanda for care — struggle to know which hospital is right for them, whether it is trustworthy, and how to organise the care, travel and accommodation around a visit.",
    built: [
      "Secure user authentication",
      "Medical request flow that matches patients to suitable hospitals",
      "Appointment scheduling",
      "Hospital profile management for partner facilities",
    ],
    decisions: [
      {
        title: "Describe the need, don't pick the doctor",
        body: "Patients submit one request describing their needs and get matched to suitable hospitals, instead of being asked to choose a specialty they may not understand.",
      },
      {
        title: "Verified facilities only",
        body: "Only verified hospitals are listed. For a healthcare product, trust is the feature — so verification was treated as a requirement, not a badge.",
      },
      {
        title: "Be explicit about what it is not",
        body: "The product clearly states it is not an emergency service, so nobody in urgent need waits on a booking flow.",
      },
      {
        title: "One flow for care, travel and stay",
        body: "Care, accommodation and transport are arranged in one place, removing the hardest part of medical travel for international patients.",
      },
    ],
    outcome: "Live at medgate.rw with partner hospitals listed.",
    next: "Measure where patients drop off in the request flow and shorten it.",
  },
  {
    slug: "ai-job-screener",
    title: "AI Job Screener",
    tagline: "Upload résumés, get a ranked shortlist with reasons.",
    context: "Personal project",
    role: "Solo — design and full-stack",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "MongoDB", "Gemini API"],
    repo: "https://github.com/Serginey/ai_job_screener",
    problem:
      "Recruiters spend hours reading résumés by hand. Screening is a repetitive workflow that AI can speed up — as long as the result is explainable and a human makes the final call.",
    built: [
      "Job creation with required skills and experience",
      "PDF résumé upload — the AI extracts structured candidate data",
      "Applicant management per job",
      "AI shortlist ranking every candidate, with score, strengths, gaps and a recommendation",
    ],
    decisions: [
      {
        title: "Weighted rubric in the prompt",
        body: "Candidates are scored against explicit weights — skills 40%, experience 30%, education 20%, availability and fit 10% — so rankings are consistent and can be explained to a recruiter.",
      },
      {
        title: "Strengths and gaps, not just a score",
        body: "A number alone is not trustworthy. Every candidate comes with strengths, gaps and a recommendation so a human can check the reasoning.",
      },
      {
        title: "Structured JSON output",
        body: "The model is asked for JSON that matches a schema, and responses are validated before anything is saved. When the AI fails, users get a clear retry message instead of a broken page.",
      },
      {
        title: "Multimodal PDF parsing",
        body: "Résumés are sent to the model as PDFs directly, rather than through a separate text-extraction step that loses layout and tables.",
      },
    ],
    outcome: "Working end-to-end screening flow, open source on GitHub.",
    next: "Add authentication for recruiters and keep an audit trail of every AI ranking.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
