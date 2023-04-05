import { Widget } from './widget';
import { App } from './app';
export declare class InfoPanel extends Widget<number> {
    images: string[];
    titles: string[];
    texts: string[];
    app: App;
    imageElement: HTMLImageElement;
    titleElement: Element;
    textElement: Element;
    previousButton: HTMLButtonElement;
    nextButton: HTMLButtonElement;
    constructor(app: App, images: string[], titles: string[], texts: string[]);
    updateElement(state: number): void;
}
