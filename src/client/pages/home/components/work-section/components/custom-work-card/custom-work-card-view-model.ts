import { bind, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import "./custom-work-card-view.scss";

@template(require("./custom-work-card-view.html"))
@element("custom-work-card")
@bind("workCards")
export class CustomWorkCardViewModel extends ComponentViewModel
{
    
}