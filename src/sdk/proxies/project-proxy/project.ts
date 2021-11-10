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
    
    description: Array<DescriptionImages | DescriptionTexts>;
    
    projectLinks: Array<ProjectLink>;
}

interface DescriptionImages
{
    header: string | null;
    images: Array<string>;
}

interface DescriptionTexts
{
    texts: Array<DescriptionText>;
}

interface DescriptionText
{
    header: string | null;
    text: string;
}

enum ProjectType
{
    hackathon = "hackathon",
    work = "work",
    personal = "personal"
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
}