import { GameWidget } from '../game-widget';
import { Game } from '../game';
export declare class FactorsOfProductionWidget extends GameWidget<null> {
    labourProgress: HTMLElement;
    resourcesProgress: HTMLElement;
    physicalCapitalProgress: HTMLElement;
    humanCapitalProgress: HTMLElement;
    technologyProgress: HTMLElement;
    constructor(game: Game);
    gameTick(): void;
    calculateWidth(factor: number): string;
    updateElement(state: null | undefined): void;
}
