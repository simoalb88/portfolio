import projectsJson from "@/src/data/side-projects.json";
import type { SideProject } from "@/src/types/portfolio";

export function getSideProjects(): SideProject[] {
  return projectsJson as SideProject[];
}
