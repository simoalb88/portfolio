import { SideProjects } from "@/src/components/sections/SideProjects";
import { getSideProjects } from "@/src/lib/side-projects";

export default function HomePage() {
  const projects = getSideProjects();

  return (
    <>
      <nav className="sticky top-0 z-10 border-b border-neutral-800/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-sm text-neutral-400">portfolio</span>
          <a
            href="#projects"
            className="font-mono text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            projects ↓
          </a>
        </div>
      </nav>

      <main className="flex-1 px-6 py-24 max-w-3xl mx-auto w-full">
        <h1 className="font-mono text-4xl sm:text-5xl tracking-tight mb-4">
          Portfolio
        </h1>
        <p className="text-lg opacity-80 mb-8">
          Scaffold ready. Experience section coming soon.
        </p>
        <span className="inline-block px-3 py-1 rounded-full text-sm font-mono bg-accent/15 text-accent">
          next 14 · typescript · tailwind
        </span>

        <SideProjects projects={projects} />
      </main>
    </>
  );
}
