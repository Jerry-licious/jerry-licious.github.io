import { Good } from './good';
import { Basket } from './basket';
export declare enum FirmTier {
    Manual = 0,
    Basic = 1,
    Industrial = 2,
    Advanced = 3
}
export declare namespace FirmTier {
    const values: FirmTier[];
    function next(upgrade: FirmTier): FirmTier;
    function tier(upgrade: FirmTier): 0 | 1 | 2 | 3;
    function icon(upgrade: FirmTier): Good;
    function efficiencyMultiplier(upgrade: FirmTier): number;
    function cost(upgrade: FirmTier): Basket;
    function name(upgrade: FirmTier): "Manual" | "Basic" | "Industrial" | "Advanced";
}
