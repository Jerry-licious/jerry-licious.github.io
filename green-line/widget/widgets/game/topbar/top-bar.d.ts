import { NavigationBar } from './nav/navigation-bar';
import { Game } from '../game';
import { TimeControl } from './time/time-control';
import { GameWidget } from '../game-widget';
export declare class TopBar extends GameWidget<null> {
    navigationBar: NavigationBar;
    timeControl: TimeControl;
    gdpDisplay: Element;
    moneyDisplay: Element;
    constructor(game: Game);
    updateElement(): void;
    updateInfo(): void;
    gameTick(): void;
}
