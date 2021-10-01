import { ComponentViewModel, element, NavigationService, template } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import { Routes } from "../../pages/routes";
import "./custom-navbar-view.scss";

@template(require("./custom-navbar-view.html"))
@element("custom-navbar")
@inject("NavigationService")
export class CustomNavbarViewModel extends ComponentViewModel
{
    private readonly _navigationService: NavigationService;
    
    private _isDropdownOpen: boolean = false;
    
    
    public get isDropdownOpen(): boolean { return this._isDropdownOpen; }
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    
    
    public toggleDropdown(): void
    {
        this._isDropdownOpen = !this._isDropdownOpen;
    }
    
    public gotoLinkedIn(): void
    {
        this._navigationService.navigateSiteSameTab("https://www.linkedin.com/in/bensaobuppha");
    }
    
    public gotoGithub(): void
    {
        this._navigationService.navigateSiteSameTab("https://github.com/BenjaminSao");
    }
    
    public gotoHome(): void
    {
        this._navigationService.navigate(Routes.home);
    }
}