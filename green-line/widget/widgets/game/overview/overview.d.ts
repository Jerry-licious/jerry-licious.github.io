import { GameWidget } from '../game-widget';
import { Game } from '../game';
import { ItemList } from '../item-list/item-list';
import { LineChart } from 'chartist';
import { FactorsOfProductionWidget } from './factors-of-production-widget';
export declare class Overview extends GameWidget<null> {
    inventory: ItemList;
    orders: ItemList;
    factors: FactorsOfProductionWidget;
    chartElement: Element;
    chart: LineChart;
    constructor(game: Game);
    gameTick(): void;
    updateElement(state: null | undefined): void;
}
