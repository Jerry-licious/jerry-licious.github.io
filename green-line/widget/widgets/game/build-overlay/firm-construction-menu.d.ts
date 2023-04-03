import { FirmBlueprintWidget } from './firm-blueprint-widget';
import { Firm } from '../../../../simulation/actors/firm';
import { FirmBlueprint } from '../../../../simulation/templates/firm-blueprint';
import { GameWidget } from '../game-widget';
import { Game } from '../game';
export declare class FirmConstructionMenu extends GameWidget<null> {
    blueprints: FirmBlueprintWidget[];
    target: Firm[];
    container: Element;
    constructor(game: Game, blueprints: FirmBlueprint[], target: Firm[]);
    removeBlueprint(blueprint: FirmBlueprintWidget): void;
    gameTick(): void;
    updateElement(state?: null): void;
}
