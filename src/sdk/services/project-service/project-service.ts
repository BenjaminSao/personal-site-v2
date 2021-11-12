import { Project, ShortProjectDescription } from "../../proxies/project-proxy/project";

export interface ProjectService
{
    retrieveProjects(): Array<Project>;
    retrieveProject(id: string): Project | null;
    retrieveShortProjectDescriptions(): Array<ShortProjectDescription>;
}    