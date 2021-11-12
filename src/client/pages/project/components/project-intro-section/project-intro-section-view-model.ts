import { bind, ComponentViewModel, element, NavigationService, template } from "@nivinjoseph/n-app";
import "./project-intro-section-view.scss";
import * as Chart from "chart.js";
import { ProgrammingLanguage } from "../../../../../sdk/proxies/project-proxy/project";
import { inject } from "@nivinjoseph/n-ject";
import { given } from "@nivinjoseph/n-defensive";

@template(require("./project-intro-section-view.html"))
@element("project-intro-section")
@bind("problem", "solution", "type", "timeSpan", "programmingLanguages", "tags", "links")    
@inject("NavigationService")
export class ProjectIntroSectionViewModel extends ComponentViewModel
{
    private readonly _navigationService: NavigationService;
    
    private get _programmingLanguages(): Array<ProgrammingLanguage> | null {
        return this.getBound("programmingLanguages");
    }

    
    public constructor(navigationService: NavigationService) 
    {
        super();
        
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    
    
    public gotoLink(url: string)
    {
        this._navigationService.navigateSiteNewTab(url);
    }
    
    
    protected onMount(element: HTMLElement)
    {
        super.onMount(element);
        
        if (!this._programmingLanguages)
            return;
        
        const programmingLanguageChart = document.getElementById("programming-language-chart") as HTMLCanvasElement; 
        
        new Chart.Chart(programmingLanguageChart, {
            type: "doughnut",
            data: {
                labels: this._programmingLanguages.map(t => t.language),
                datasets:
                    [{
                        data: this._programmingLanguages.map(t => t.percent),
                        backgroundColor: [
                            "#EA899E",
                            "#4C77B0",
                            "#8D68A8",
                            "#AB699E"
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