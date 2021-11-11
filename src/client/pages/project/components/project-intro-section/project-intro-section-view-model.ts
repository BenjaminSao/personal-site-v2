import { bind, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import "./project-intro-section-view.scss";
import * as Chart from "chart.js";
// @ts-ignore
import ScrollReveal from "scrollreveal";

@template(require("./project-intro-section-view.html"))
@element("project-intro-section")
@bind("problem", "solution", "type", "timeSpan")    
export class ProjectIntroSectionViewModel extends ComponentViewModel
{
    public constructor() 
    {
        super();
    }
    
    
    protected onMount(element: HTMLElement)
    {
        super.onMount(element);
        
        const programmingLanguageChart = document.getElementById("programming-language-chart") as HTMLCanvasElement; 
        
        new Chart.Chart(programmingLanguageChart, {
            type: "doughnut",
            data: {
                labels: [
                    "JavaScript",
                    "Python",
                    "CSS"
                ],
                datasets:
                    [{
                        label: "My First Dataset",
                        data: [37, 36, 24],
                        backgroundColor: [
                            "#EA899E",
                            "#4C77B0",
                            "#8D68A8"
                        ],
                        hoverOffset: 4
                    }]
            },
            options:
            {
                plugins: {
                    legend: {
                        position: "bottom",
                    }
                }
            }
        });
    }
}