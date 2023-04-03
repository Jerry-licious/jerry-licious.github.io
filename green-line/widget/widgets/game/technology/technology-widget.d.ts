import { GameWidget } from '../game-widget';
import { Game } from '../game';
import { TechnologyCategory } from './technology-category';
export declare class TechnologyWidget extends GameWidget<null> {
    categories: TechnologyCategory[];
    constructor(game: Game);
    gameTick(): void;
    updateElement(state?: null): void;
}
