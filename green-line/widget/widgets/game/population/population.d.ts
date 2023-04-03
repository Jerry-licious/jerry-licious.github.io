import { GameWidget } from '../game-widget';
import { Game } from '../game';
import { IndividualWidget } from './individual-widget';
export declare class PopulationWidget extends GameWidget<null> {
    individualWidgets: IndividualWidget[];
    constructor(game: Game);
    gameTick(): void;
    updateElement(state: null | undefined): void;
}
