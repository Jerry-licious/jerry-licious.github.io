import { GameWidget } from '../game-widget';
import { MarketListButton } from './market-list-button';
import { Game } from '../game';
import { MarketsWidget } from './markets-widget';
export declare class MarketList extends GameWidget<number> {
    marketButtons: MarketListButton[];
    container: MarketsWidget;
    constructor(game: Game, container: MarketsWidget);
    gameTick(): void;
    updateElement(state: number): void;
}
