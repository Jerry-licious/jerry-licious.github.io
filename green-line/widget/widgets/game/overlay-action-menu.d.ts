import { Basket } from '../../../simulation/basket';
import { GameWidget } from './game-widget';
import { Game } from './game';
export declare class OverlayActionMenu extends GameWidget<null> {
    constructor(game: Game, message: string, cost: Basket, action: () => void, warning?: string);
    gameTick(): void;
    updateElement(state: null | undefined): void;
}
