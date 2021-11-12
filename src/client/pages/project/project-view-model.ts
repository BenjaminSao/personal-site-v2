import { components, PageViewModel, route, template } from "@nivinjoseph/n-app";
import { Routes } from "../routes";
import "./project-view.scss";
import { Project } from "../../../sdk/proxies/project-proxy/project";
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
    
    private _project: Project = null as any;
    
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
        
        this._project = this._projectService.retrieveProject(id)!;
    }
}