import { Good } from './good';
export declare class Basket extends Map<Good, number> {
    money: number;
    constructor();
    static withItems(items: Map<Good, number>): Basket;
    static individualInitialInventory(): Basket;
    static firmInitialInventory(): Basket;
    addGood(good: Good, amount?: number): void;
    subtract(other: Basket): Basket;
    removeItemsFrom(other: Basket): void;
    hasNegatives(): boolean;
    isEmpty(): boolean;
    copy(): Basket;
}
