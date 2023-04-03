import { Game } from '../../game';
import { TimeControlButton } from './time-control-button';
import { GameWidget } from '../../game-widget';
export declare class TimeControl extends GameWidget<number> {
    buttons: TimeControlButton[];
    timeDisplay: Element;
    constructor(game: Game);
    updateTime(): void;
    updateElement(state: number): void;
    gameTick(): void;
}
