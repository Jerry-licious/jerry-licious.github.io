import { FirmTier } from '../firm-tier';
import { Recipe } from '../actors/recipe';
import { Basket } from '../basket';
import { Firm } from '../actors/firm';
export declare class FirmBlueprint {
    firmID: string;
    startingTier: FirmTier;
    finalTier: FirmTier;
    recipe: Recipe;
    cost: Basket;
    consumesCoal: boolean;
    consumesElectricity: boolean;
    capacity: number;
    constructor({ id, startingTier, finalTier, recipe, consumesCoal, consumesElectricity, cost, capacity }: {
        id: string;
        startingTier?: FirmTier;
        finalTier?: FirmTier;
        recipe: Recipe;
        consumesCoal?: boolean;
        consumesElectricity?: boolean;
        cost: Basket;
        capacity?: number;
    });
    createFirm(): Firm;
    static mineSetupCost: Basket;
    static farmSetupCost: Basket;
    static forestSetupCost: Basket;
    static workshopSetupCost: Basket;
    static basicSetupCost: Basket;
    static factorySetupCost: Basket;
    static advancedFactorySetupCost: Basket;
    static resourcesBlueprints: FirmBlueprint[];
    static factoryBlueprints: FirmBlueprint[];
}
