import { Good } from './good';
import { Basket } from './basket';
import { Simulation } from './simulation';
export declare class Actor {
    moneyValue: number;
    personalValues: Map<Good, number>;
    expectedMarketPrices: Map<Good, number>;
    productivity: Map<Good, number>;
    inventory: Basket;
    personalValue: number;
    expectedMarketPrice: number;
    constructor();
    utilityOf(basket: Basket): number;
    decideSpendingBasket(simulation: Simulation): Basket;
    decideWork(): Good;
    placeSellOrders(simulation: Simulation): void;
    placeBuyOrders(simulation: Simulation): void;
    onSuccessfulSale(good: Good): void;
    consumeGoods(): void;
    expectedPrice(good: Good): number;
    setExpectedPrice(good: Good, value: number): void;
    changeExpectedPrice(good: Good, value: number): void;
}
