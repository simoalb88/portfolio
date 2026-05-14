import type { SideProject } from "@/src/types/portfolio";

interface SideProjectsProps {
  projects: SideProject[];
}

export function SideProjects({ projects }: SideProjectsProps) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mt-24 pt-8 border-t border-neutral-800/50"
    >
      <h2
        id="projects-heading"
        className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6"
      >
        Side Projects
      </h2>
      <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-lg border border-neutral-800/60 bg-neutral-900/30 px-4 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-900/60"
            >
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h3 className="text-sm font-semibold text-neutral-300 group-hover:text-neutral-100 transition-colors">
                  {project.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-neutral-600">
                  {project.year}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-neutral-500 flex-1 mb-4">
                {project.description}
              </p>
              <ul aria-label={`${project.title} tech stack`} className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded px-1.5 py-0.5 text-xs font-mono text-neutral-600 bg-neutral-800/60"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
