import { Project, ShortProjectDescription } from "../../proxies/project-proxy/project";
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
                tags: ["JavaScript", "Flutter", "Dart"]
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
                tags: ["JavaScript", "HTML", "CSS", "Jinja2", "Python Flask"]
            },
            projectDescription: null
        },
        {
            id: "Vaccurate",
            shortProjectDescription: {
                name: "Vaccurate",
                subtitle: "nwHacks 2021",
                description: "Data Powered COVID-19 Vaccine Distribution.",
                image: require("./images/vaccmin.png"),
                tags: ["JavaScript", "CSS", "HTML", "Twilio", "Firebase", "Bootstrap"]
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
                tags: ["JavaScript", "Vue.js", "Node.js", "C#", "CSS", "HTML", "Firebase"]
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
                tags: ["JavaScript", "CSS", "HTML", "Firebase"]
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
                tags: ["JavaScript", "Vue.js", "Node.js", "Figma", "Firebase", "Google Maps API"]
            },
            projectDescription: null
        },
        {
            id: "Grimsby Thai Website",
            shortProjectDescription: {
                name: "Grimsby Thai Website",
                subtitle: "Grimsby Thai",
                description: "Designed and created a modern looking website using Weebly for the Restuarant, Grimsby Thai Cuisine. Displays elements such as a Home and Menu page.",
                image: require("./images/84cdcc11c8b00a7910666034a3ab68b9-grimsby-thai.png"),
                tags: ["HTML", "CSS"]
            },
            projectDescription: null
        },
        {
            id: "Thailandia Website",
            shortProjectDescription: {
                name: "Thailandia Website",
                subtitle: "Thailandia",
                description: "Designed and created a modern looking website using Weebly for the Restuarant, Thailandia. Displays elements such as a Home and Menu page.",
                image: require("./images/d7d8e861a54ab9dc205d458ca2a20748-thailandia.png"),
                tags: ["HTML", "CSS"]
            },
            projectDescription: null
        },
        {
            id: "Young Thai Website",
            shortProjectDescription: {
                name: "Young Thai Website",
                subtitle: "Young Thai",
                description: "Designed and created a modern looking website using Weebly for the Restuarant, Young Thai. Displays elements such as a Home and Menu page.",
                image: require("./images/3b54a8a0158744320dcd87ce96cff8c5-young-thai.png"),
                tags: ["HTML", "CSS"]
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