import { Firm } from '../../../../simulation/actors/firm';
import { Game } from '../game';
import { GameWidget } from '../game-widget';
export declare class FirmWidget extends GameWidget<null> {
    firm: Firm;
    game: Game;
    inputs: Element;
    outputs: Element;
    upgradeStatus: Element;
    capacityBar: Element;
    upgradeButton: HTMLElement;
    errorMessage: Element;
    errorButton: HTMLElement;
    constructor(firm: Firm, game: Game);
    subsidiseFirm(): void;
    updateUpgradeStatus(): void;
    updateInputs(): void;
    updateOutputs(): void;
    updateCapacityBar(): void;
    updateButtons(): void;
    getErrors(): string[];
    updateError(): void;
    gameTick(): void;
    upgradeAvailable(): boolean;
    getUpgradeWarning(): string;
    updateElement(state: null | undefined): void;
}
