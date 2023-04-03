import { Widget } from '../../widget';
import { Good } from '../../../../simulation/good';
import { ItemList } from './item-list';
export declare class Item extends Widget<number> {
    good: Good;
    amountElement: Element;
    list: ItemList;
    constructor(good: Good, amount: number, list: ItemList, allowDelete: boolean);
    updateElement(state: number): void;
}
