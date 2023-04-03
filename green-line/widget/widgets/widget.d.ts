import { ElementBuilder } from '../builders/element-builder';
export declare abstract class Widget<S> {
    domElement: Element;
    lastState: S;
    constructor(tag: string, ...styleClasses: string[]);
    protected clearElement(): void;
    render(state?: S): Element;
    rerender(): void;
    addChildren(...children: ElementBuilder[]): void;
    removeChildren(element: Element): void;
    abstract updateElement(state?: S): void;
}
