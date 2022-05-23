import { components, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import { CustomWorkCardViewModel } from "./components/custom-work-card/custom-work-card-view-model";
import "./work-section-view.scss";

// @ts-ignore
import ScrollReveal from "scrollreveal";

@template(require("./work-section-view.html"))
@element("work-section")
@components(CustomWorkCardViewModel)
export class WorkSectionViewModel extends ComponentViewModel
{
    private readonly _workCards: ReadonlyArray<WorkCard> = [
        {
            type: WorkCardType.work,
            name: "Oracle - Incoming Software Developer",
            date: "2022 (4-month)",
            description: "Started an Internship (4-month) position @ Oracle Netsuite as a Software Developer Co-op fot the ERP Cash Management Team.",
            tags: [],
            image: require("./images/tsconfig.client.png")
        },
        {
            type: WorkCardType.work,
            name: "NS Labs Inc - Software Development Engineer",
            date: "2021 (8-month)",
            description: "Started an Internship (8-month) @ NS Labs as a Software Development Engineer. Worked with web applications, creating insights on consumer B2C enterprise applications, documenting company framework & code.",
            tags: ["Vue.js", "TypeScript", "SCSS"],
            image: require("./images/90d9fcc5c4a4dc0d2b2c20c2edee98a5.png")
        },
        {
            type: WorkCardType.school,
            name: "University of Toronto - Machine Learning & Data Mining",
            date: "2019 - Present",
            description: "Started school @ the University of Toronto. Currently, specializing in Statistics inside the Machine Learning and Data Mining Stream.",
            tags: ["Machine Learning & Data Mining", "Statistics"],
            image: require("./images/1200px-Utoronto_coa.svg.png")
        },
    ];
    
    public get workCards() { return this._workCards; }
    
    protected onMount(element: HTMLElement)
    {
        super.onMount(element);
        
        const slideUpWorkSection = {
            origin: "bottom",
            distance: "100px",
            duration: 500,
            // delay: 250,
            interval: 20
        };
        
        ScrollReveal().reveal(".slideUpWorkSection", slideUpWorkSection);
    }
}

interface WorkCard
{
    type: WorkCardType;
    name: string;
    date: string;
    image: string;
    
    description: string;
    
    tags: ReadonlyArray<string>;
}

enum WorkCardType
{
    work = "work",
    school = "school"
}