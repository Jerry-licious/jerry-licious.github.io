import { Widget } from '../../../widget';
import { TimeControl } from './time-control';
export declare class TimeControlButton extends Widget<boolean> {
    index: number;
    timeControl: TimeControl;
    constructor(icon: string, index: number, timeControl: TimeControl);
    updateElement(state: boolean): void;
}
