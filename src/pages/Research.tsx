import { NavBar } from "../components/ui/nav-bar";
import { ProjectCard } from "../components/ui/project-card";

// const asset = (p: string) => new URL(p.replace(/^\//, ""), import.meta.env.BASE_URL).toString();

// ---- Customize these -------------------------------------------------------
const PROJECTS = [
  {
    title: "AI-Assisted Grading",
    imageSrc: "projects/ai_grading.svg",
    description:
      "How reliably AI can assess open-ended student work (essays, code), and where its judgments diverge from a teacher's.",
    tags: ["LLMs", "NLP", "Education"],
  },
  {
    title: "Local LLM Agents",
    imageSrc: "projects/local_llm_agents.svg",
    description:
      "Analysis that runs on-device, so the student data behind a finding never has to leave the machine it was collected on.",
    tags: ["LLMs", "Privacy", "Edge Computing"],
  },
  {
    title: "Pedagogically Aligned LLMs",
    imageSrc: "projects/pedagogically_aligned_llms.svg",
    description:
      "Fine-tuning and prompting strategies that align large language models with pedagogical best practices, ensuring educationally sound interactions.",
    tags: ["LLMs", "Learning Sciences", "Alignment"],
  },
  {
    title: "In-Classroom Gamification",
    imageSrc: "projects/classroom_gamification.svg",
    description:
      "Measuring what game-like mechanics and multiplayer modes actually do to engagement and social learning.",
    tags: ["Gamification", "Reward Systems", "Collaboration"],
  },
  {
    title: "Agentic Educational Workflows",
    imageSrc: "projects/agentic_educational_workflows.svg",
    description:
      "Evaluating multi-step agentic workflows on educational tasks — lesson planning, assessment creation, adaptive sequencing — to see where they hold up.",
    tags: ["AI Agents", "Automation", "Curriculum Design"],
  },
  {
    title: "Open Education",
    imageSrc: "projects/open_education.svg",
    description:
      "Open datasets, analysis code, and findings released under participant consent, so the work can be reproduced and extended.",
    tags: ["Open Source", "OER", "Accessibility"],
  },
] as const;

// ----------------------------------------------------------------------------

export function ResearchPage() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main: Projects */}
          <div className="lg:col-span-12">
            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">On-Going Projects</h1>
              <p className="mt-2 text-muted-foreground max-w-[70ch]">
                We study learning processes with sensing data and human‑AI methods. Here are a few active projects and directions.
              </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  imageSrc={p.imageSrc}
                  imageAlt={p.title}
                  description={p.description}
                  tags={[...p.tags]}
                  href={"href" in p ? (p as { href: string }).href : undefined}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
