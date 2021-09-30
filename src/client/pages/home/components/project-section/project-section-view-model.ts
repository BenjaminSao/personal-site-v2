import { components, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { ProjectPanelsViewModel } from "./components/project-panels/project-panels-view-model";
import "./project-section-view.scss";

@template(require("./project-section-view.html"))
@element("project-section")
@components(ProjectPanelsViewModel)
export class ProjectSectionViewModel extends ComponentViewModel
{
    private readonly _projectsData: ReadonlyArray<ProjectData> = [
        {
            name: "Ecoblock",
            subtitle: "HooHacks 2021",
            description: "A Sustainable & Scalable Blockchain That Can Save Entire Countries Worth Of Energy.",
            image: require("./images/minimal.png"),
            tags: ["JavaScript", "Flutter", "Dart"]
        },
        {
            name: "Certi-Chain",
            subtitle: "Hack Western 7",
            description: "A blockchain powered solution to prevent the counterfeiting of products.",
            image: require("./images/certimin.png"),
            tags: ["JavaScript", "HTML", "CSS", "Jinja2", "Python Flask"]
        },
        {
            name: "Vaccurate",
            subtitle: "nwHacks 2021",
            description: "Data Powered COVID-19 Vaccine Distribution.",
            image: require("./images/vaccmin.png"),
            tags: ["JavaScript", "CSS", "HTML", "Twilio", "Firebase", "Bootstrap"]
        },
        {
            name: "Dorm Buddies",
            subtitle: "CalgaryHacks 2021",
            description: "Give students back the social interactions that home lacks!",
            image: require("./images/dormmin.png"),
            tags: ["JavaScript", "Vue.js", "Node.js", "C#", "CSS", "HTML", "Firebase"]
        },
        {
            name: "AnimeTaro",
            subtitle: "Hack the Northeast 2020",
            description: "Oh? You're Approaching This Project?",
            image: require("./images/animetaro.png"),
            tags: ["JavaScript", "CSS", "HTML", "Firebase"]
        },
        {
            name: "Journey Guide",
            subtitle: "OpenHacks",
            description: "A walking, running, cycling route-finding app.",
            image: require("./images/journeyguide.png"),
            tags: ["JavaScript", "Vue.js", "Node.js", "Figma", "Firebase", "Google Maps API"]
        },
        {
            name: "Grimsby Thai Website",
            subtitle: "Grimsby Thai",
            description: "Designed and created a modern looking website using Weebly for the Restuarant, Grimsby Thai Cuisine. Displays elements such as a Home and Menu page.",
            image: require("./images/84cdcc11c8b00a7910666034a3ab68b9-grimsby-thai.png"),
            tags: ["Weebly", "HTML", "CSS"]
        },
        {
            name: "Thailandia Website",
            subtitle: "Thailandia",
            description: "Designed and created a modern looking website using Weebly for the Restuarant, Thailandia. Displays elements such as a Home and Menu page.",
            image: require("./images/d7d8e861a54ab9dc205d458ca2a20748-thailandia.png"),
            tags: ["Weebly", "HTML", "CSS"]
        },
        {
            name: "Young Thai Website",
            subtitle: "Young Thai",
            description: "Designed and created a modern looking website using Weebly for the Restuarant, Young Thai. Displays elements such as a Home and Menu page.",
            image: require("./images/3b54a8a0158744320dcd87ce96cff8c5-young-thai.png"),
            tags: ["Weebly", "HTML", "CSS"]
        }
    ];
    
    private _searchKeyword: string = "";
    
    private _uniqueTags: ReadonlyArray<string> = [];
    
    
    public get searchKeyword(): string { return this._searchKeyword; }
    public set searchKeyword(value: string) { this._searchKeyword = value; }
    
    public get uniqueTags(): ReadonlyArray<string> { return this._uniqueTags; }
    
    public get projectsData(): ReadonlyArray<ReadonlyArray<ProjectData>>
    {
        return this._convertArray(this._filterSearchResult(this._projectsData));
    }
    
    
    public tagSelected(selectedTag: string)
    {
        given(selectedTag, "selectedTag").ensureHasValue();
        
        this._searchKeyword = selectedTag;
    }
    
    
    protected onCreate()
    {
        this._uniqueTags = this._fetchUniqueTags(this._projectsData);
    }
    
    
    private _convertArray(arr: ReadonlyArray<ProjectData>): ReadonlyArray<ReadonlyArray<ProjectData>>
    {
        const chunkSize = 2;
        
        const result: Array<Array<ProjectData>> = [];
        
        for (let i = 0; i < arr.length; i += chunkSize)
        {
            const chunk = arr.slice(i, i + chunkSize);
            result.push(chunk);
        }
        
        return result;
    }
    
    private _filterSearchResult(arr: ReadonlyArray<ProjectData>): ReadonlyArray<ProjectData>
    {
        const formattedSearchKeyword = this._searchKeyword.trim().toLowerCase();
        
        const searchedArr = arr.filter((t) =>
        {
            if (this._checkContainsTag(t.tags, formattedSearchKeyword)
                || t.name.toLowerCase().contains(formattedSearchKeyword))
                return true;
            else
                return false;
        });
            
        return searchedArr;
    }
    
    private _checkContainsTag(arr: ReadonlyArray<string>, searchKeyword: string): boolean
    {
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i].toLowerCase().contains(searchKeyword))
                return true;
        }
        
        return false;
    }
    
    private _fetchUniqueTags(arr: ReadonlyArray<ProjectData>): Array<string>
    {
        const uniqueArray: Array<string> = [];
        
        arr.forEach((projectData) =>
        {
            projectData.tags.forEach(tag =>
            {
                if (!uniqueArray.contains(tag))
                    uniqueArray.push(tag);
            });
        });
        
        return uniqueArray;
    }
}

interface ProjectData
{
    name: string;
    subtitle: string;
    description: string;
    image: string | null;
    tags: ReadonlyArray<string>;
}