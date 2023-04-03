import { GameWidget } from '../game-widget';
import { Game } from '../game';
import { MarketList } from './market-list';
import { MarketDetails } from './market-details';
export declare class MarketsWidget extends GameWidget<number> {
    marketList: MarketList;
    details: MarketDetails[];
    infoContainer: Element;
    constructor(game: Game);
    gameTick(): void;
    updateElement(state: number): void;
}
