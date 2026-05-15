import Hero from "@/components/hero/Hero";
import { ExperienceSection } from "@/src/components/sections/ExperienceSection";
import { SideProjects } from "@/src/components/sections/SideProjects";
import { getSideProjects } from "@/src/lib/side-projects";

export default function HomePage() {
  const projects = getSideProjects();

  return (
    <>
      <Hero />

      <main className="flex-1 bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ExperienceSection />

        <div className="mx-auto w-full max-w-5xl px-6 pb-24 sm:px-8">
          <SideProjects projects={projects} />
        </div>
      </main>
    </>
  );
}
