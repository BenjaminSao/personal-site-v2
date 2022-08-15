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
            name: "Oracle - Software Developer Co-op",
            date: "2022 (4-month)",
            description: "Started an Internship (4-month) position @ Oracle NetSuite as a Software Developer Co-op for the ERP Cash Management Team. Worked creating core functionality within the NetSuite enterprise B2B application, debugging customer accounts in production, and more.",
            tags: [],
            image: require("./images/oracle-logo.png")
        },
        {
            type: WorkCardType.work,
            name: "Hack the Valley - Web Developer",
            date: "2022",
            description: "Started volunteering @ HTV Executive Team as a Web Developer. Worked with managing the web application UI and backend applicant registration APIs.",
            tags: [],
            image: require("./images/htv-logo.svg")
        },
        {
            type: WorkCardType.work,
            name: "NS Labs Inc - Software Development Engineer",
            date: "2021 (8-month)",
            description: "Started an Internship (8-month) @ NS Labs as a Software Development Engineer. Worked with web applications, creating insights on consumer B2C enterprise applications, documenting company framework & code.",
            tags: ["Vue.js", "TypeScript", "SCSS"],
            image: require("./images/ns-lab-logo.png")
        },
        {
            type: WorkCardType.school,
            name: "University of Toronto - Machine Learning & Data Mining",
            date: "2019 - Present",
            description: "Started school @ the University of Toronto. Currently, specializing in Statistics inside the Machine Learning and Data Mining Stream.",
            tags: ["Machine Learning & Data Mining", "Statistics"],
            image: require("./images/uoft-logo.png")
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