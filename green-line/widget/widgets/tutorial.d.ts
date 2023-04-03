import { Widget } from './widget';
import { App } from './app';
export declare class Tutorial extends Widget<number> {
    images: string[];
    titles: string[];
    texts: string[];
    app: App;
    imageElement: HTMLImageElement;
    titleElement: Element;
    textElement: Element;
    previousButton: HTMLButtonElement;
    nextButton: HTMLButtonElement;
    constructor(app: App);
    updateElement(state: number): void;
}
