import { EconomicActor } from './actors/economic-actor';
import { Good } from './good';
export declare class Order {
    source: EconomicActor;
    good: Good;
    offerPrice: number;
    constructor(source: EconomicActor, good: Good, expectedPrice: number);
}
