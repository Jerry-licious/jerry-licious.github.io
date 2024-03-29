import { Widget } from '../widget';
import { Simulation } from '../../../simulation/simulation';
import { TopBar } from './topbar/top-bar';
import { FirmsContainer } from './firms/firms-container';
import { PopulationWidget } from './population/population';
import { MarketsWidget } from './markets/markets-widget';
import { Overview } from './overview/overview';
import { OverlayActionMenu } from './overlay-action-menu';
import { FirmConstructionMenu } from './build-overlay/firm-construction-menu';
import { TechnologyWidget } from './technology/technology-widget';
export declare class Game extends Widget<null> {
    simulation: Simulation;
    firmsMenuOpened: boolean;
    actionMenuOpened: boolean;
    topBar: TopBar;
    display: Element;
    actionOverlayContainer: HTMLDivElement;
    constructionOverlayContainer: HTMLDivElement;
    overview: Overview;
    resources: FirmsContainer;
    factories: FirmsContainer;
    population: PopulationWidget;
    markets: MarketsWidget;
    technology: TechnologyWidget;
    timeSinceLastUpdate: number;
    updateInterval: number;
    constructor();
    previousTime: number;
    update(currentTime: number): void;
    tick(): void;
    updateChildren(): void;
    clearDisplay(): void;
    updateSelection(selection: number): void;
    updateTimeControl(speed: number): void;
    openActionMenu(menu: OverlayActionMenu): void;
    dismissActionMenu(): void;
    openConstructionMenu(menu: FirmConstructionMenu): void;
    dismissConstructionMenu(): void;
    updateElement(state: Simulation | undefined): void;
}
