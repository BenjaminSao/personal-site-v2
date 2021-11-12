import "@babel/polyfill";
import "@nivinjoseph/n-ext";
import "./styles/main.scss";
import * as $ from "jquery";
(<any>window).jQuery = $; (<any>window).$ = $;
import { ClientApp, Vue } from "@nivinjoseph/n-app";
import { Routes } from "./pages/routes";
import { pages } from "./pages/pages";
import { ComponentInstaller, Registry } from "@nivinjoseph/n-ject";
import { given } from "@nivinjoseph/n-defensive";
import { components } from "./components/components";
import { Chart, registerables } from "chart.js";


// Element-UI stuff
import * as Element from "element-ui"; // https://element.eleme.io/#/en-US/component
// @ts-ignore
import locale from "element-ui/lib/locale/lang/en";
import { DefaultProjectService } from "../sdk/services/project-service/default-project-service";

Vue.use(Element, { locale });


class Installer implements ComponentInstaller
{
    public install(registry: Registry): void
    {
        given(registry, "registry").ensureHasValue().ensureIsObject();
        registry.registerSingleton("ProjectService", DefaultProjectService);
    }
}


const client = new ClientApp("#app", "shell")
    .useInstaller(new Installer())
    .useAccentColor("#93C5FC")
    .registerComponents(...components) // registering all your app components
    .registerPages(...pages)  // registering all your app pages
    .useAsInitialRoute(Routes.home)
    .useAsUnknownRoute(Routes.home)
    .useHistoryModeRouting(); 
    
    Chart.register(...registerables);

client.bootstrap();