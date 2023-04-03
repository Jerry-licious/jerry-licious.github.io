import { Widget } from '../../widget';
import { Item } from './item';
import { Good } from '../../../../simulation/good';
export declare class ItemList extends Widget<null> {
    basket: Map<Good, number>;
    allowDelete: boolean;
    list: Element;
    items: Item[];
    constructor(basket: Map<Good, number>, title: string, allowDelete: boolean);
    removeGood(item: Item): void;
    updateElement(): void;
}
