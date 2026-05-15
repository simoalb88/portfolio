import type { SkillGroup, SkillLevel } from "@/types/portfolio";

const LEVEL_DOTS: Record<SkillLevel, number> = {
  expert: 3,
  proficient: 2,
  familiar: 1,
};

const LEVEL_LABEL: Record<SkillLevel, string> = {
  expert: "Expert",
  proficient: "Proficient",
  familiar: "Familiar",
};

interface SkillsProps {
  groups: SkillGroup[];
}

export function Skills({ groups }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((group) => (
        <section
          key={group.id}
          aria-labelledby={`skill-group-${group.id}`}
          className="rounded-lg border border-neutral-200 bg-white/60 p-4 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/40"
        >
          <h3
            id={`skill-group-${group.id}`}
            className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
          >
            {group.label}
          </h3>
          <ul className="mt-3 space-y-2">
            {group.items.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between gap-2"
              >
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  {item.name}
                </span>
                <SkillLevelMeter level={item.level} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function SkillLevelMeter({ level }: { level: SkillLevel }) {
  const filled = LEVEL_DOTS[level];
  return (
    <span
      role="img"
      aria-label={LEVEL_LABEL[level]}
      title={LEVEL_LABEL[level]}
      className="flex items-center gap-1"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={
            i < filled
              ? "h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-50"
              : "h-1.5 w-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800"
          }
        />
      ))}
    </span>
  );
}
