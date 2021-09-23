import { bind, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import "./project-panels-view.scss";

@template(require("./project-panels-view.html"))
@element("project-panels")
@bind("projectsData")    
export class ProjectPanelsViewModel extends ComponentViewModel
{
    
}