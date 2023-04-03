import { LineChart } from 'chartist';
import { GameWidget } from '../game-widget';
import { Game } from '../game';
import { Market } from '../../../../simulation/market';
import { MarketOrderMenu } from './market-order-menu';
export declare class MarketDetails extends GameWidget<null> {
    market: Market;
    chartElement: Element;
    orderMenu: MarketOrderMenu;
    chart: LineChart;
    constructor(game: Game, market: Market);
    gameTick(): void;
    updateElement(state: null | undefined): void;
}
