import { EconomicActor } from './economic-actor';
import { Good } from '../good';
import { Simulation } from '../simulation';
import { Recipe } from './recipe';
import { FirmTier } from '../firm-tier';
export declare class Firm extends EconomicActor {
    baseRecipe: Recipe;
    recipe: Recipe;
    maxCapacity: number;
    lastProduction: number;
    id: string;
    consumesCoal: boolean;
    consumesElectricity: boolean;
    startingTier: FirmTier;
    tier: FirmTier;
    finalTier: FirmTier;
    productionGoal: number;
    constructor(id: string, recipe: Recipe, startingTier: FirmTier, finalTier: FirmTier, consumesCoal: boolean, consumesElectricity: boolean, capacity: number);
    getProductionGoal(): number;
    setBuyGoals(simulation: Simulation): void;
    placeBuyOrders(simulation: Simulation): void;
    setSellGoals(simulation: Simulation): void;
    consumeGoods(): void;
    onSuccessfulSale(good: Good): void;
    updatePriceExpectationsBasedOnGoals(): void;
    setTier(tier: FirmTier): void;
}
