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
    errorButton: Element;
    constructor(firm: Firm, game: Game);
    updateUpgradeStatus(): void;
    updateInputs(): void;
    updateOutputs(): void;
    updateCapacityBar(): void;
    updateButtons(): void;
    updateError(): void;
    updateElement(state: null | undefined): void;
    gameTick(): void;
    upgradeAvailable(): boolean;
}
