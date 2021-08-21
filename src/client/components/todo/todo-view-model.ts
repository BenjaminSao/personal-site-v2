import { ComponentViewModel, template, element, bind, NavigationService } from "@nivinjoseph/n-app";
import "./todo-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { given } from "@nivinjoseph/n-defensive";
import * as Routes from "../../pages/routes";
import { Todo } from "../../../sdk/proxies/todo/todo";


@template(require("./todo-view.html"))
@element("todo") // Name of the element. This is what you put as the html tag inside other page/component's template
@bind("value")  // The name of the properties that this component take (binds) using v-bind. example: `v-bind:value="todo"` 
@inject("NavigationService") // dependency
export class TodoViewModel extends ComponentViewModel
{
    private readonly _navigationService: NavigationService;


    public get todo(): Todo { return this.getBound<Todo>("value"); } // getting the bound value in the VM.


    public constructor(navigationService: NavigationService)
    {
        super();

        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }


    public async completeTodo(): Promise<void> // public function can be accessed from the template and can be bound to buttons
    {
        try
        {
            await this.todo.complete();
        } catch (e)
        {
            console.log(e);
        }
    }

    public editTodo(): void
    {
        this._navigationService.navigate(Routes.manageTodo, { id: this.todo.id }); // navigating to a different page and, passing a path param to the route. 
    }

    public async deleteTodo(): Promise<void>
    {
        try
        {
            await this.todo.delete();
        } catch (e)
        {
            console.log(e);
        }
    }

    /**
     *  Life cycle methods for components are same as pages, but no onEnter and onLeave.
     */

    protected override onCreate()
    {
        super.onCreate();
        console.log("onCreate component");
    }

    protected override onMount(e: HTMLElement)
    {
        super.onMount(e);
        console.log("onMount component");
    }

    protected override onDestroy()
    {
        super.onDestroy();
        console.log("onDestroy component");
    }
}