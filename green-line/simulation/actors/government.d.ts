import { EconomicActor } from './economic-actor';
import { Simulation } from '../simulation';
import { Good } from '../good';
export declare class Government extends EconomicActor {
    orderGoal: Map<Good, number>;
    constructor();
    consumeGoods(): void;
    setSellGoals(simulation: Simulation): void;
    addOrderGoal(good: Good, amount: number): void;
    setBuyGoals(simulation: Simulation): void;
    placeBuyOrders(simulation: Simulation): void;
    onSuccessfulBuy(good: Good): void;
}
