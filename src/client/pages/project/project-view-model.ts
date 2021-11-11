import { components, PageViewModel, route, template } from "@nivinjoseph/n-app";
import { Routes } from "../routes";
import "./project-view.scss";
import { DescriptionType, Project, ProjectType } from "../../../sdk/proxies/project-proxy/project";
import { ProjectHeroViewModel } from "./components/project-hero/project-hero-view-model";
import { ProjectIntroSectionViewModel } from "./components/project-intro-section/project-intro-section-view-model";
import { ProjectDescriptionSectionViewModel } from "./components/project-description-sections/project-description-section-view-model";
import { ProjectService } from "../../../sdk/services/project-service/project-service";
import { inject } from "@nivinjoseph/n-ject";
import { given } from "@nivinjoseph/n-defensive";

@template(require("./project-view.html"))
@route(Routes.project)
@components(
    ProjectHeroViewModel,
    ProjectIntroSectionViewModel,
    ProjectDescriptionSectionViewModel
)
@inject("ProjectService")    
export class ProjectViewModel extends PageViewModel
{
    private readonly _projectService: ProjectService;
    
    private _project: Project = {
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
        };
    
    public get project(): Project { return this._project; }
    
    
    public constructor(projectService: ProjectService)
    {
        super();
        
        given(projectService, "projectService").ensureHasValue().ensureIsObject();
        this._projectService = projectService;
    }
    
    
    protected onEnter(id: string)
    {
        super.onEnter(id);
        
        if (!this._projectService.retrieveProject(id))
            console.error("Project Not Found");
        
    }
}