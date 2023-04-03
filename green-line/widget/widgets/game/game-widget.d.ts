import { Widget } from '../widget';
import { Game } from './game';
export declare abstract class GameWidget<S> extends Widget<S> {
    game: Game;
    constructor(game: Game, tag: string, ...styleClasses: string[]);
    abstract gameTick(): void;
}
