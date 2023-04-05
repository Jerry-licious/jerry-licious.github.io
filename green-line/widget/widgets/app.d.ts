import { Widget } from './widget';
import { MainMenu } from './main-menu';
import { Game } from './game/game';
import { InfoPanel } from './info-panel';
export declare class App extends Widget<null> {
    mainMenu: MainMenu;
    concepts: InfoPanel;
    tutorial: InfoPanel;
    game: Game;
    constructor();
    play(): void;
    openConceptsPanel(): void;
    openTutorialPanel(): void;
    menu(): void;
    updateElement(state: null | undefined): void;
}
