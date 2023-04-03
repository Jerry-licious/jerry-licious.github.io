import { Game } from '../game';
import { Firm } from '../../../../simulation/actors/firm';
import { FirmWidget } from './firm-widget';
import { GameWidget } from '../game-widget';
import { FirmBlueprint } from '../../../../simulation/templates/firm-blueprint';
import { FirmConstructionMenu } from '../build-overlay/firm-construction-menu';
export declare class FirmsContainer extends GameWidget<null> {
    firms: Firm[];
    firmWidgets: FirmWidget[];
    firmContainer: Element;
    constructionMenu: FirmConstructionMenu;
    constructor(game: Game, firms: Firm[], addButton: boolean, blueprints: FirmBlueprint[]);
    updateWidgetList(): void;
    updateElement(state: null | undefined): void;
    gameTick(): void;
}
