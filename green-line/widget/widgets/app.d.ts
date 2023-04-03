import { Widget } from './widget';
import { MainMenu } from './main-menu';
import { Game } from './game/game';
import { Tutorial } from './tutorial';
export declare class App extends Widget<null> {
    mainMenu: MainMenu;
    tutorial: Tutorial;
    game: Game;
    constructor();
    play(): void;
    openTutorial(): void;
    menu(): void;
    updateElement(state: null | undefined): void;
}
