import { GameWidget } from '../game-widget';
import { MarketList } from './market-list';
import { Game } from '../game';
import { Market } from '../../../../simulation/market';
export declare class MarketListButton extends GameWidget<boolean> {
    index: number;
    list: MarketList;
    market: Market;
    price: Element;
    quantity: Element;
    constructor(game: Game, list: MarketList, market: Market, index: number);
    updateElement(state: boolean): void;
    gameTick(): void;
}
