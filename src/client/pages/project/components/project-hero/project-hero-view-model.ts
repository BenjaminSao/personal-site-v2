import { bind, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import "./project-hero-view.scss";

@template(require("./project-hero-view.html"))
@element("project-hero")
@bind("name", "shortDescription", "hasAward", "image", "bannerStyle")    
export class ProjectHeroViewModel extends ComponentViewModel
{
    
}