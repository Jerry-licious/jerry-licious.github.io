import { Game } from '../game';
import { GameWidget } from '../game-widget';
import { FirmBlueprint } from '../../../../simulation/templates/firm-blueprint';
import { FirmConstructionMenu } from './firm-construction-menu';
export declare class FirmBlueprintWidget extends GameWidget<null> {
    blueprint: FirmBlueprint;
    overlay: FirmConstructionMenu;
    constructor(game: Game, blueprint: FirmBlueprint, overlay: FirmConstructionMenu);
    gameTick(): void;
    updateElement(state?: null): void;
}
