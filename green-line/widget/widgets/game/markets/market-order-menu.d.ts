import { GameWidget } from '../game-widget';
import { Game } from '../game';
import { Market } from '../../../../simulation/market';
export declare class MarketOrderMenu extends GameWidget<null> {
    market: Market;
    inventory: Element;
    pendingOrders: Element;
    cost: Element;
    amount: Element;
    orderButton: Element;
    constructor(game: Game, market: Market);
    get intendedAmount(): number;
    onAmountChange(): void;
    gameTick(): void;
    updateElement(state: number | undefined): void;
}
