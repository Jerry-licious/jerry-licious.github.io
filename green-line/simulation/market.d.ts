import { Order } from './order';
import { Good } from './good';
export declare class Market {
    good: Good;
    buyOrders: Order[];
    sellOrders: Order[];
    currentExchangePrice: number;
    currentExchangeQuantity: number;
    exchangeQuantityHistory: number[];
    exchangePriceHistory: number[];
    constructor(good: Good);
    placeBuyOrder(order: Order): void;
    placeSellOrder(order: Order): void;
    process(): void;
    recordData(): void;
    get recentExchangePrice(): number;
}
