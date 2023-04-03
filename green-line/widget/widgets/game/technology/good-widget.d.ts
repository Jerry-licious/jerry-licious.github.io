import { GameWidget } from '../game-widget';
import { Good } from '../../../../simulation/good';
import { Game } from '../game';
export declare class GoodWidget extends GameWidget<null> {
    good: Good;
    constructor(game: Game, good: Good);
    gameTick(): void;
    updateElement(state: null | undefined): void;
}
