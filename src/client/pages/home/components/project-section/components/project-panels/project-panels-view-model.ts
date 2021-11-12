import { bind, ComponentViewModel, element, events, NavigationService, template } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import { Routes } from "../../../../../routes";
import "./project-panels-view.scss";

@template(require("./project-panels-view.html"))
@element("project-panels")
@bind("projectsData")    
@events("tagSelected")
@inject("NavigationService")    
export class ProjectPanelsViewModel extends ComponentViewModel
{
    private readonly _navigationService: NavigationService;
    
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    
    
    public tagSelected(selectedTag: string)
    {
        this.emit("tagSelected", selectedTag);
    }
    
    public gotoProject(id: string)
    {
        this._navigationService.navigate(Routes.project, { id });
    }
}