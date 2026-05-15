import { getExperience } from "@/lib/experience";
import { WorkHistory } from "./WorkHistory";
import { Skills } from "./Skills";
import { Education } from "./Education";

export function ExperienceSection() {
  const { workHistory, skillGroups, education } = getExperience();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 sm:px-8"
    >
      <header className="mb-12 max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          01 · Experience
        </p>
        <h2
          id="experience-heading"
          className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50"
        >
          What I&apos;ve built and where.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          A chronological view of roles, the problems I owned, and the stack I
          shipped with.
        </p>
      </header>

      <div className="space-y-16">
        <div>
          <h3 className="sr-only">Work history</h3>
          <WorkHistory roles={workHistory} />
        </div>

        <div>
          <h3 className="mb-6 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Skills &amp; tech stack
          </h3>
          <Skills groups={skillGroups} />
        </div>

        {education.length > 0 && (
          <div>
            <h3 className="mb-6 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              Education
            </h3>
            <Education entries={education} />
          </div>
        )}
      </div>
    </section>
  );
}
