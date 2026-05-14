export type SkillLevel = "expert" | "proficient" | "familiar";

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: SkillItem[];
}

export interface WorkRole {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  startYear: string;
  endYear: string;
  details?: string;
}

export interface ExperienceData {
  workHistory: WorkRole[];
  skillGroups: SkillGroup[];
  education: EducationEntry[];
}
