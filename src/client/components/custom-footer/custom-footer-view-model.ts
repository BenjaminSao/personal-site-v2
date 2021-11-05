import { ComponentViewModel, element, NavigationService, template } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import "./custom-footer-view.scss";

@template(require("./custom-footer-view.html"))
@element("custom-footer")
@inject("NavigationService")    
export class CustomFooterViewModel extends ComponentViewModel
{
    private readonly _navigationService: NavigationService;
    
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    
    
    public gotoLinkedIn(): void
    {
        this._navigationService.navigateSiteSameTab("https://www.linkedin.com/in/bensaobuppha");
    }
    
    public gotoGithub(): void
    {
        this._navigationService.navigateSiteSameTab("https://github.com/BenjaminSao");
    }
    
    public gotoInstagram(): void
    {
        this._navigationService.navigateSiteSameTab("https://www.instagram.com/saobupphaben/");
    }
}