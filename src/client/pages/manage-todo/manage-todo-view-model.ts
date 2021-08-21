import { PageViewModel, template, route, NavigationService } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./manage-todo-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { given } from "@nivinjoseph/n-defensive";
import { Validator, strval } from "@nivinjoseph/n-validate";
import { TodoService } from "../../../sdk/services/todo-service/todo-service";
import { Todo } from "../../../sdk/proxies/todo/todo";


@template(require("./manage-todo-view.html"))
@route(Routes.manageTodo)
@inject("TodoService", "NavigationService")
export class ManageTodoViewModel extends PageViewModel
{
    private readonly _todoService: TodoService;
    private readonly _navigationService: NavigationService;

    private _isNew: boolean;
    private _todo: Todo | null;
    private _title: string;
    private _description: string;
    private readonly _validator: Validator<this>;


    public get isNew(): boolean { return this._isNew; }

    public get title(): string { return this._title; }
    public set title(value: string) { this._title = value; } // setter so the input field can set the new val

    public get description(): string { return this._description; }
    public set description(value: string) { this._description = value; }

    public get hasErrors(): boolean { return !this.validate(); }
    public get errors(): Object { return this._validator.errors; }


    public constructor(todoService: TodoService, navigationService: NavigationService)
    {
        super();
        given(todoService, "todoService").ensureHasValue().ensureIsObject();
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();

        this._todoService = todoService;
        this._navigationService = navigationService;
        this._isNew = false;
        this._todo = null;
        this._title = "";
        this._description = "";
        this._validator = this.createValidator();
    }


    public async save(): Promise<void>
    {
        this._validator.enable();
        if (!this.validate())
            return;

        try
        {
            if (this._todo)
                await this._todo.update(this._title, this._description);
            else
                await this._todoService.createTodo(this._title, this._description);
        } catch (e)
        {
            console.log(e);
            return;
        }

        this._navigationService.navigate(Routes.listTodos);
    }


    protected override onEnter(id?: string): void // getting the path parameter from the url
    {
        if (id && !id.isEmptyOrWhiteSpace())
        {
            this._isNew = false;

            this._todoService.getTodo(id)
                .then(t =>
                {
                    this._todo = t;

                    this._title = t.title;
                    this._description = t.description || "";
                })
                .catch(e => console.log(e));
        }
        else
        {
            this._isNew = true;
        }
    }


    private validate(): boolean
    {
        this._validator.validate(this);
        return this._validator.isValid;
    }

    private createValidator(): Validator<this>
    {
        const validator = new Validator<this>(true);

        validator
            .prop("title")
            .isRequired().withMessage("The title field is required.")
            .isString()
            .useValidationRule(strval.hasMaxLength(50));

        validator
            .prop("description")
            .isOptional()
            .isString()
            .useValidationRule(strval.hasMaxLength(500));

        return validator;
    }
}