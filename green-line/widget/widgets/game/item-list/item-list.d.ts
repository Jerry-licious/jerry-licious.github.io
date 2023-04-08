import { Widget } from '../../widget';
import { Item } from './item';
import { Good } from '../../../../simulation/good';
export declare class ItemList extends Widget<null> {
    basket: Map<Good, number>;
    allowDelete: boolean;
    showZeroes: boolean;
    list: Element;
    items: Item[];
    constructor(basket: Map<Good, number>, title: string, showZeroes: boolean, allowDelete: boolean);
    removeGood(item: Item): void;
    updateElement(): void;
}
