import { Good } from '../good';
import { Basket } from '../basket';
import { Simulation } from '../simulation';
export declare abstract class EconomicActor {
    buyGoal: Map<Good, number>;
    sellGoal: Map<Good, number>;
    expectedMarketPrices: Map<Good, number>;
    inventory: Basket;
    constructor();
    abstract setBuyGoals(simulation: Simulation): void;
    abstract setSellGoals(simulation: Simulation): void;
    placeSellOrders(simulation: Simulation): void;
    placeBuyOrders(simulation: Simulation): void;
    onSuccessfulSale(good: Good): void;
    onSuccessfulBuy(good: Good): void;
    updatePriceExpectationsBasedOnGoals(): void;
    abstract consumeGoods(): void;
    expectedPrice(good: Good): number;
    setExpectedPrice(good: Good, value: number): void;
    changeExpectedPrice(good: Good, value: number): void;
}
