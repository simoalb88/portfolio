import experienceJson from "@/data/experience.json";
import type { ExperienceData, WorkRole } from "@/types/portfolio";

export function getExperience(): ExperienceData {
  return experienceJson as ExperienceData;
}

const MONTH_FMT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export function formatRolePeriod(role: WorkRole): string {
  const start = parseMonth(role.startDate);
  const end = role.endDate ? parseMonth(role.endDate) : null;
  const startLabel = start ? MONTH_FMT.format(start) : role.startDate;
  const endLabel = end ? MONTH_FMT.format(end) : "Present";
  return `${startLabel} – ${endLabel}`;
}

export function roleDurationLabel(role: WorkRole): string {
  const start = parseMonth(role.startDate);
  const end = (role.endDate ? parseMonth(role.endDate) : null) ?? new Date();
  if (!start) return "";
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  return remMonths === 0 ? `${years} yr` : `${years} yr ${remMonths} mo`;
}

function parseMonth(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, y, m] = match;
  return new Date(Number(y), Number(m) - 1, 1);
}

export function sortRolesByRecency(roles: WorkRole[]): WorkRole[] {
  return [...roles].sort((a, b) => {
    const aEnd = a.endDate ?? "9999-12";
    const bEnd = b.endDate ?? "9999-12";
    if (aEnd !== bEnd) return aEnd < bEnd ? 1 : -1;
    return a.startDate < b.startDate ? 1 : -1;
  });
}
