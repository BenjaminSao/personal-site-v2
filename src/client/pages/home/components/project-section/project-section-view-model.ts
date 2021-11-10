import { components, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import { ShortProjectDescription } from "../../../../../sdk/proxies/project-proxy/project";
import { ProjectService } from "../../../../../sdk/services/project-service/project-service";
import { ProjectPanelsViewModel } from "./components/project-panels/project-panels-view-model";
import "./project-section-view.scss";

@template(require("./project-section-view.html"))
@element("project-section")
@components(ProjectPanelsViewModel)
@inject("ProjectService")
export class ProjectSectionViewModel extends ComponentViewModel
{
    private readonly _projectService: ProjectService;
    
    private _projectsData: Array<ShortProjectDescription> = null as any;
    
    private _searchKeyword: string = "";
    
    private _uniqueTags: ReadonlyArray<string> = [];
    
    
    public get searchKeyword(): string { return this._searchKeyword; }
    public set searchKeyword(value: string) { this._searchKeyword = value; }
    
    public get uniqueTags(): ReadonlyArray<string> { return this._uniqueTags; }
    
    public get projectsData(): ReadonlyArray<ReadonlyArray<ShortProjectDescription>>
    {
        return this._convertArray(this._filterSearchResult(this._projectsData));
    }
    
    
    public constructor(projectService: ProjectService)
    {
        super();
        
        given(projectService, "projectService").ensureHasValue().ensureIsObject();
        this._projectService = projectService;
    }
    
    
    public tagSelected(selectedTag: string)
    {
        given(selectedTag, "selectedTag").ensureHasValue();
        
        this._searchKeyword = selectedTag;
    }
    
    
    protected onCreate()
    {
        this._projectsData = this._projectService.retrieveShortProjectDescriptions();
        
        this._uniqueTags = this._fetchUniqueTags(this._projectsData);
    }
    
    
    private _convertArray(arr: ReadonlyArray<ShortProjectDescription>): ReadonlyArray<ReadonlyArray<ShortProjectDescription>>
    {
        const chunkSize = 2;
        
        const result: Array<Array<ShortProjectDescription>> = [];
        
        for (let i = 0; i < arr.length; i += chunkSize)
        {
            const chunk = arr.slice(i, i + chunkSize);
            result.push(chunk);
        }
        
        return result;
    }
    
    private _filterSearchResult(arr: ReadonlyArray<ShortProjectDescription>): ReadonlyArray<ShortProjectDescription>
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
    
    private _fetchUniqueTags(arr: ReadonlyArray<ShortProjectDescription>): Array<string>
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