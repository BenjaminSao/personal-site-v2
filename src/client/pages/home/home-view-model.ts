import { components, PageViewModel, route, template } from "@nivinjoseph/n-app";
import { Routes } from "../routes";
import { IntroHeroViewModel } from "./components/intro-hero/intro-hero-view-model";
import { ProjectSectionViewModel } from "./components/project-section/project-section-view-model";
import { WorkSectionViewModel } from "./components/work-section/work-section-view-model";
import "./home-view.scss";

@template(require("./home-view.html"))
@route(Routes.home)
@components(IntroHeroViewModel, WorkSectionViewModel, ProjectSectionViewModel)
export class HomeViewModel extends PageViewModel
{
    
}