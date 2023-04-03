import { Widget } from '../../../widget';
import { NavigationBar } from './navigation-bar';
export declare class NavigationBarButton extends Widget<boolean> {
    index: number;
    rail: NavigationBar;
    constructor(icon: string, text: string, index: number, rail: NavigationBar);
    updateElement(state: boolean): void;
}
