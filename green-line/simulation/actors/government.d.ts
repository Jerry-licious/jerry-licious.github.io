import { EconomicActor } from './economic-actor';
import { Simulation } from '../simulation';
import { Good } from '../good';
export declare class Government extends EconomicActor {
    constructor();
    consumeGoods(): void;
    setBuyGoals(simulation: Simulation): void;
    setSellGoals(simulation: Simulation): void;
    addBuyGoal(good: Good, amount: number): void;
    placeBuyOrders(simulation: Simulation): void;
}
