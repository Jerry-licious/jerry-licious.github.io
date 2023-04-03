import { GameWidget } from '../game-widget';
import { Good } from '../../../../simulation/good';
import { Game } from '../game';
import { GoodWidget } from './good-widget';
export declare class TechnologyCategory extends GameWidget<null> {
    goods: GoodWidget[];
    constructor(game: Game, goods: Good[], title: string);
    gameTick(): void;
    updateElement(state: null | undefined): void;
}
