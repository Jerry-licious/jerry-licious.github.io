import { Good } from '../good';
import { Basket } from '../basket';
export declare class Recipe {
    inputs: Map<Good, number>;
    output: Good;
    outputQuantity: number;
    constructor(inputs: Map<Good, number>, output: Good, outputQuantity: number);
    copy(): Recipe;
    canApply(basket: Basket): boolean;
    apply(basket: Basket): void;
}
