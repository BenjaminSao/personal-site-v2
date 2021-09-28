import { bind, ComponentViewModel, element, events, template } from "@nivinjoseph/n-app";
import "./project-panels-view.scss";

@template(require("./project-panels-view.html"))
@element("project-panels")
@bind("projectsData")    
@events("tagSelected")
export class ProjectPanelsViewModel extends ComponentViewModel
{
    public tagSelected(selectedTag: string)
    {
        this.emit("tagSelected", selectedTag);
    }
}