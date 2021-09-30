import { bind, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import "./custom-work-card-view.scss";

// @ts-ignore
import ScrollReveal from "scrollreveal";

@template(require("./custom-work-card-view.html"))
@element("custom-work-card")
@bind("workCards")
export class CustomWorkCardViewModel extends ComponentViewModel
{
    protected onMount(element: HTMLElement)
    {
        super.onMount(element);
        
        const slideRightCards = {
            origin: "right",
            distance: "100px",
            duration: 750,
            delay: 300,
            interval: 80
        };
        
        ScrollReveal().reveal(".slideRightCards", slideRightCards);
    }
}