import type { WorkRole } from "@/types/portfolio";
import {
  formatRolePeriod,
  roleDurationLabel,
  sortRolesByRecency,
} from "@/lib/experience";

interface WorkHistoryProps {
  roles: WorkRole[];
}

export function WorkHistory({ roles }: WorkHistoryProps) {
  const sorted = sortRolesByRecency(roles);

  return (
    <ol
      role="list"
      aria-label="Work history"
      className="relative border-l border-neutral-200 dark:border-neutral-800"
    >
      {sorted.map((role, index) => (
        <li
          key={role.id}
          className="relative pl-8 pb-10 last:pb-0"
          aria-posinset={index + 1}
          aria-setsize={sorted.length}
        >
          <span
            aria-hidden="true"
            className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-neutral-900 ring-1 ring-neutral-300 dark:border-neutral-950 dark:bg-neutral-50 dark:ring-neutral-700"
          />
          <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                {role.role}
              </h3>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {role.company}
                {role.location ? (
                  <span className="text-neutral-500 dark:text-neutral-500">
                    {" · "}
                    {role.location}
                  </span>
                ) : null}
              </p>
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <time dateTime={role.startDate}>{formatRolePeriod(role)}</time>
              <span aria-hidden="true"> · </span>
              <span>{roleDurationLabel(role)}</span>
            </p>
          </header>

          <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {role.summary}
          </p>

          {role.highlights.length > 0 && (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 marker:text-neutral-400">
              {role.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          )}

          {role.stack.length > 0 && (
            <ul
              aria-label={`${role.company} tech stack`}
              className="mt-4 flex flex-wrap gap-1.5"
            >
              {role.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
