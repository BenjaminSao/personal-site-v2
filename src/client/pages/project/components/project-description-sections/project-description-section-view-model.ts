import { bind, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import "./project-description-section-view.scss";

@template(require("./project-description-section-view.html"))
@element("project-description-section")
@bind("description")
export class ProjectDescriptionSectionViewModel extends ComponentViewModel
{
    
}