import type { EducationEntry } from "@/types/portfolio";

interface EducationProps {
  entries: EducationEntry[];
}

export function Education({ entries }: EducationProps) {
  if (entries.length === 0) return null;

  return (
    <ul role="list" className="space-y-4">
      {entries.map((entry) => (
        <li
          key={entry.id}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dashed border-neutral-200 pb-3 last:border-b-0 last:pb-0 dark:border-neutral-800"
        >
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {entry.credential}
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {entry.institution}
            </p>
            {entry.details ? (
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {entry.details}
              </p>
            ) : null}
          </div>
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {entry.startYear}–{entry.endYear}
          </p>
        </li>
      ))}
    </ul>
  );
}
