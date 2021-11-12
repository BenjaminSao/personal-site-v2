export interface Project
{
    id: string;
    shortProjectDescription: ShortProjectDescription;
    
    projectDescription: ProjectDescription | null;
}


interface ProjectDescription
{
    problem: string;
    solution: string;
    projectType: ProjectType;
    timeSpan: number | null;
    programmingLanguages: Array<ProgrammingLanguage> | null;
    projectLinks: Array<ProjectLink> | null;
    
    bannerStyle: string;
    
    description: Array<DescriptionImages | DescriptionTexts>;
}

interface DescriptionImages
{
    type: DescriptionType;
    header: string | null;
    images: Array<string>;
}

interface DescriptionTexts
{
    type: DescriptionType;
    texts: Array<DescriptionText>;
}

interface DescriptionText
{
    header: string | null;
    content: string;
}

export enum ProjectType
{
    hackathon = "Hackathon",
    work = "Work",
    personal = "Personal"
}

interface ProjectLink
{
    logo: string;
    url: string;
}

export interface ShortProjectDescription
{
    name: string;
    subtitle: string;
    description: string;
    image: string | null;
    tags: ReadonlyArray<string>;
    /**
     * NOTE: Must be true for Project Description Page to Work
     */
    hasFullDescription: boolean;
    hasAward: boolean;
}

export enum DescriptionType
{
    image = "image",
    text = "text"
}

export interface ProgrammingLanguage
{
    language: string;
    percent: number;
}