import { DescriptionType, Project, ProjectType, ShortProjectDescription } from "../../proxies/project-proxy/project";
import { ProjectService } from "./project-service";

export class DefaultProjectService implements ProjectService
{
    private static projects: Array<Project> =
    [
        {
            id: "Ecoblock",
            shortProjectDescription: {
                name: "Ecoblock",
                subtitle: "HooHacks 2021",
                description: "A Sustainable & Scalable Blockchain That Can Save Entire Countries Worth Of Energy.",
                image: require("./images/minimal.png"),
                tags: ["JavaScript", "Flutter", "Dart"],
                hasFullDescription: false,
            },
            projectDescription: null
        },
        {
            id: "Certi-Chain",
            shortProjectDescription: {
                name: "Certi-Chain",
                subtitle: "Hack Western 7",
                description: "A blockchain powered solution to prevent the counterfeiting of products.",
                image: require("./images/certimin.png"),
                tags: ["JavaScript", "HTML", "CSS", "Jinja2", "Python Flask"],
                hasFullDescription: true,
            },
            projectDescription: {
                problem: "How can I give the freedom of information to those who are affected by the censorship of knowledge?",
                solution: "Allow crucial information and knowledge to be concealed in transport by concealing their data in the pixels of images",
                projectType: ProjectType.hackathon,
                timeSpan: 48,
                projectLinks: null,
                description: [
                    {
                        type: DescriptionType.text,
                        texts: [{
                            header: "Description",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }]
                    },
                    {
                        type: DescriptionType.image,
                        header: "Gallery",
                        images: ["https://ca.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pocket-organizer-damier-graphite-canvas-small-leather-goods--N63143_PM1_Closeup%20view.png?wid=456&hei=456", "https://ca.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pocket-organizer-damier-graphite-canvas-small-leather-goods--N63143_PM1_Side%20view.png?wid=456&hei=456"]
                    },
                    {
                        type: DescriptionType.text,
                        texts: [{
                            header: "Description",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        },
                        {
                            header: "Description",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }]
                    }
                ]
            }
        },
        {
            id: "Vaccurate",
            shortProjectDescription: {
                name: "Vaccurate",
                subtitle: "nwHacks 2021",
                description: "Data Powered COVID-19 Vaccine Distribution.",
                image: require("./images/vaccmin.png"),
                tags: ["JavaScript", "CSS", "HTML", "Twilio", "Firebase", "Bootstrap"],
                hasFullDescription: false,
            },
            projectDescription: null
        },
        {
            id: "Dorm Buddies",
            shortProjectDescription: {
                name: "Dorm Buddies",
                subtitle: "CalgaryHacks 2021",
                description: "Give students back the social interactions that home lacks!",
                image: require("./images/dormmin.png"),
                tags: ["JavaScript", "Vue.js", "Node.js", "C#", "CSS", "HTML", "Firebase"],
                hasFullDescription: false,
            },
            projectDescription: null
        },
        {
            id: "AnimeTaro",
            shortProjectDescription: {
                name: "AnimeTaro",
                subtitle: "Hack the Northeast 2020",
                description: "Oh? You're Approaching This Project?",
                image: require("./images/animetaro.png"),
                tags: ["JavaScript", "CSS", "HTML", "Firebase"],
                hasFullDescription: false,
            },
            projectDescription: null
        },
        {
            id: "Journey Guide",
            shortProjectDescription: {
                name: "Journey Guide",
                subtitle: "OpenHacks",
                description: "A walking, running, cycling route-finding app.",
                image: require("./images/journeyguide.png"),
                tags: ["JavaScript", "Vue.js", "Node.js", "Figma", "Firebase", "Google Maps API"],
                hasFullDescription: false,
            },
            projectDescription: null
        },
        {
            id: "Grimsby Thai Website",
            shortProjectDescription: {
                name: "Grimsby Thai Website",
                subtitle: "Grimsby Thai",
                description: "Designed and created a modern looking website for the Restuarant, Grimsby Thai Cuisine.",
                image: require("./images/84cdcc11c8b00a7910666034a3ab68b9-grimsby-thai.png"),
                tags: ["HTML", "CSS"],
                hasFullDescription: false,
            },
            projectDescription: null
        },
        {
            id: "Thailandia Website",
            shortProjectDescription: {
                name: "Thailandia Website",
                subtitle: "Thailandia",
                description: "Designed and created a modern looking website for the Restuarant, Thailandia.",
                image: require("./images/d7d8e861a54ab9dc205d458ca2a20748-thailandia.png"),
                tags: ["HTML", "CSS"],
                hasFullDescription: false,
            },
            projectDescription: null
        },
        {
            id: "Young Thai Website",
            shortProjectDescription: {
                name: "Young Thai Website",
                subtitle: "Young Thai",
                description: "Designed and created a modern looking website for the Restuarant, Young Thai.",
                image: require("./images/3b54a8a0158744320dcd87ce96cff8c5-young-thai.png"),
                tags: ["HTML", "CSS"],
                hasFullDescription: false,
            },
            projectDescription: null
        }
    ];
    
    
    public retrieveShortProjectDescriptions(): Array<ShortProjectDescription>
    {
        return DefaultProjectService.projects.map(t => t.shortProjectDescription);
    }
    
    public retrieveProject(id: string): Project | null
    {
        return DefaultProjectService.projects.find(t => t.id === id) ?? null;
    }
    
    public retrieveProjects(): Array<Project>
    {
        return DefaultProjectService.projects;
    }
}