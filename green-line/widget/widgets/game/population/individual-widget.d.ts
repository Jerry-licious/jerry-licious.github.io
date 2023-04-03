import { GameWidget } from '../game-widget';
import { Game } from '../game';
import { Individual } from '../../../../simulation/actors/individual';
export declare class IndividualWidget extends GameWidget<null> {
    individual: Individual;
    face: Element;
    labour: Element;
    preferredGoods: Element;
    job: Element;
    constructor(game: Game, individual: Individual);
    updateElement(state?: null): void;
    updateFace(): void;
    updateLabour(): void;
    updateInputsAndOutputs(): void;
    gameTick(): void;
}
