import { ComponentViewModel, template, element } from "@nivinjoseph/n-app";
import "./shell-view.scss";
// @ts-ignore
import ScrollReveal from "scrollreveal";

@template(require("./shell-view.html"))
@element("shell")
export class ShellViewModel extends ComponentViewModel
{
    protected onMount(element: HTMLElement): void
    {
        super.onMount(element);
        
        const reveal = {
            scale: 0.85,
            duration: 750,
            interval: 80,
        };
        
        const slideLeft = {
            origin: "left",
            distance: "100px",
            duration: 1000,
        };
        
        const slideRight = {
            origin: "right",
            distance: "100px",
            duration: 1000,
        };
        
        const slideBottom = {
            origin: "bottom",
            distance: "100px",
            duration: 1000,
        };
        
        const slideTop = {
            origin: "top",
            distance: "100px",
            duration: 1000,
        };
        
        
        ScrollReveal().reveal(".reveal", reveal);
        
        ScrollReveal().reveal(".slideLeft", slideLeft);
        
        ScrollReveal().reveal(".slideRight", slideRight);
        
        ScrollReveal().reveal(".slideBottom", slideBottom);
        
        ScrollReveal().reveal(".slideTop", slideTop);
    }
}