import { Good } from '../good';
import { Basket } from '../basket';
import { Simulation } from '../simulation';
import { EconomicActor } from './economic-actor';
export declare class Individual extends EconomicActor {
    moneyValue: number;
    personalValues: Map<Good, number>;
    productivity: Map<Good, number>;
    preferences: Good[];
    mostProductiveLabour: Good;
    job: Good;
    lastUtility: number;
    constructor();
    utilityOf(basket: Basket): number;
    willingAndAbleToBuy(simulation: Simulation, currentBasket: Basket, desiredGood: Good): boolean;
    decideSpendingBasket(simulation: Simulation): Basket;
    setSellGoals(simulation: Simulation): void;
    placeSellOrders(simulation: Simulation): void;
    setBuyGoals(simulation: Simulation): void;
    onSuccessfulSale(good: Good): void;
    consumeGoods(): void;
    calculateInventoryValue(): number;
}
