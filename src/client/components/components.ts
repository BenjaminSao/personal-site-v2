
import { CustomFooterViewModel } from "./custom-footer/custom-footer-view-model";
import { CustomNavbarViewModel } from "./custom-navbar/custom-navbar-view-model";
import { ShellViewModel } from "./shell/shell-view-model";


export const components: Array<Function> = [
    ShellViewModel,
    CustomNavbarViewModel,
    CustomFooterViewModel
];