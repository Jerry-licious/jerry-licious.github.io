import { Widget } from '../../../widget';
import { NavigationBarButton } from './navigation-bar-button';
import { Game } from '../../game';
export declare class NavigationBar extends Widget<number> {
    game: Game;
    buttons: NavigationBarButton[];
    constructor(game: Game);
    updateElement(state: number): void;
}
