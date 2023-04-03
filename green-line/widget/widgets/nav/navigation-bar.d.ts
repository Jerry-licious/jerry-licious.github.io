import { Widget } from '../widget';
import { NavigationBarButtons } from './navigation-bar-buttons';
export declare class NavigationBar extends Widget<number> {
    buttons: NavigationBarButtons[];
    constructor();
    updateElement(state: number): void;
}
