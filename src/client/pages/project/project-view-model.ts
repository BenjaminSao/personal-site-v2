import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import { Routes } from "../routes";
import "./project-view.scss";

@template(require("./project-view.html"))
@route(Routes.project)
export class ProjectViewModel extends PageViewModel
{
    
}