import "@babel/polyfill";
import "@nivinjoseph/n-ext";
import "./styles/main.scss";
import * as $ from "jquery";
(<any>window).jQuery = $; (<any>window).$ = $;
import { ClientApp } from "@nivinjoseph/n-app";
import * as Routes from "./pages/routes";
import { pages } from "./pages/pages";
import { ComponentInstaller, Registry } from "@nivinjoseph/n-ject";
import { given } from "@nivinjoseph/n-defensive";
import { MockTodoService } from "../sdk/services/todo-service/mock-todo-service";
import { components } from "./components/components";



class Installer implements ComponentInstaller
{
    public install(registry: Registry): void
    {
        given(registry, "registry").ensureHasValue().ensureIsObject();

        registry.registerSingleton("TodoService", MockTodoService);
    }
}


const client = new ClientApp("#app", "shell")
    .useInstaller(new Installer())
    .useAccentColor("#93C5FC")
    .registerComponents(...components) // registering all your app components
    .registerPages(...pages)  // registering all your app pages
    .useAsInitialRoute(Routes.listTodos)
    .useAsUnknownRoute(Routes.listTodos);

client.bootstrap();