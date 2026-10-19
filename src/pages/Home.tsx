import type React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { NavBar } from "@/components/ui/nav-bar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { BackToTheTop } from "@/components/ui/back-to-the-top";
import { ClassroomVisual, DialogueVisual, EdgeVisual } from "@/components/ui/research-visual";
import { Marble, MarbleGlyph, MarbleRun, type MarbleTone } from "@/components/ui/marbles";

// Matches the tinted backgrounds of the project images on the Research page.
const TINT: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(rgba(86,5,145,0.09) 1.1px, transparent 1.1px), linear-gradient(135deg, #faf6fd, #ede2f7)",
  backgroundSize: "20px 20px, 100% 100%",
};

const PILLARS: { step: string; tone: MarbleTone; title: string; body: string }[] = [
  {
    step: "Collect",
    tone: "glass",
    title: "Data from real classrooms",
    body: "Our evidence comes from courses already in use, gathered under IRB protocols with consent from each participant.",
  },
  {
    step: "Analyze",
    tone: "lilac",
    title: "AI as an instrument",
    body: "We apply machine learning and language models as analytical methods, to see patterns in how students actually work.",
  },
  {
    step: "Publish",
    tone: "ink",
    title: "Open by default",
    body: "Findings are published openly, and so is the underlying data wherever the participants have agreed to it.",
  },
];

const CATEGORIES = [
  {
    name: "Assessment & feedback",
    visual: DialogueVisual,
    topics: ["AI-Assisted Grading", "Pedagogically Aligned LLMs"],
  },
  {
    name: "Private, on-device analysis",
    visual: EdgeVisual,
    topics: ["Local LLM Agents", "Agentic Educational Workflows"],
  },
  {
    name: "Engagement & access",
    visual: ClassroomVisual,
    topics: ["In-Classroom Gamification", "Open Education"],
  },
];

export function HomePage() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#560591] to-[#3a0263] text-white">
        {/* Background: a faint dot grid, plus rings that echo the marble's outline. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          className="pointer-events-none absolute -right-48 top-1/2 w-[44rem] -translate-y-1/2 text-white md:-right-24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="300" cy="300" r="290" strokeOpacity="0.06" strokeWidth="1" />
          <circle cx="300" cy="300" r="220" strokeOpacity="0.09" strokeWidth="1" />
          <circle cx="300" cy="300" r="150" strokeOpacity="0.12" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="80" strokeOpacity="0.16" strokeWidth="2" />
          <g className="hidden md:inline" stroke="none">
            <MarbleGlyph cx={300} cy={300} r={44} tone="lilac" />
          </g>
        </svg>

        <div className="container relative mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Marble Labs</h1>
            <p className="mt-4 max-w-[46ch] text-lg text-white/90 md:text-xl">
              We study how learning actually happens, using classroom data and the analytical methods of
              computer science.
            </p>
            <p className="mt-3 text-sm text-white/60">Learning analytics and AI</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-[#3a0263] hover:bg-white/90">
                <Link to="/research">
                  See our research <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* What we do */}
      <section id="what-we-do" className="scroll-mt-24 md:scroll-mt-28" aria-label="What we do">
        <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What we do</h2>
          <p className="mt-2 max-w-[62ch] text-muted-foreground">
            We analyze how people learn and publish what we find, working across computer science, psychology, and
            education.
          </p>

          <MarbleRun className="mt-10 hidden w-full md:block" />

          <div className="mt-8 grid gap-10 md:mt-6 md:grid-cols-3 md:gap-0">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="md:px-4 md:text-center">
                <div className="flex items-center gap-3 md:justify-center">
                  <Marble tone={p.tone} className="size-7 md:hidden" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#560591]">
                    {String(i + 1).padStart(2, "0")} · {p.step}
                  </p>
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 max-w-[34ch] md:mx-auto text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section
        id="research"
        className="scroll-mt-24 border-t bg-[#faf6fd] md:scroll-mt-28"
        aria-label="Research"
      >
        <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Research</h2>
              <p className="mt-2 max-w-[62ch] text-muted-foreground">Three directions we are pursuing now.</p>
            </div>
            <Button asChild variant="outline" className="bg-white">
              <Link to="/research">
                All projects <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map(({ name, visual: Visual, topics }) => (
              <Link
                key={name}
                to="/research"
                className="group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="px-8 py-6" style={TINT}>
                  <Visual className="mx-auto w-full max-w-[13rem] text-[#560591]" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {topics.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-[#560591]/15 bg-[#560591]/5 px-2.5 py-0.5 text-xs font-medium text-[#3a0263]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-[#560591]">
                    See projects <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            We work with collaborators in computer science, psychology, and education.
          </p>
        </div>
      </section>

      <Footer />
      <BackToTheTop />
    </>
  );
}
