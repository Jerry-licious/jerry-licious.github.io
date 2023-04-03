import { FirmTier } from './firm-tier';
export declare enum Good {
    Coal = "coal",
    Oil = "oil",
    Wood = "wood",
    Mineral = "mineral",
    PreciousMineral = "precious_mineral",
    Rocks = "rock",
    Crop = "crop",
    Fruit = "fruit",
    Milk = "milk",
    Wool = "wool",
    Meat = "meat",
    Mining = "mining",
    Farming = "farming",
    Technical = "technical",
    Forestry = "forestry",
    Artisan = "artisan",
    Assembly = "assembly",
    BasicEquipment = "basic_tools",
    IndustrialEquipment = "industrial_tools",
    AdvancedEquipment = "advanced_tools",
    MobileEquipment = "mobile_tools",
    Fertilizer = "fertilizer",
    Electricity = "electricity",
    ProcessedWood = "processed_wood",
    Chemicals = "chemicals",
    Metal = "metal",
    PreciousMetal = "precious_metal",
    Motor = "motor",
    Circuit = "circuit",
    MachineParts = "machine_parts",
    Textile = "textile",
    Flour = "flour",
    Clothes = "clothes",
    ProcessedMeat = "processed_meat",
    ProcessedFruit = "processed_fruit",
    ProcessedVegetables = "processed_vegetables",
    Dairy = "dairy",
    Baked = "baked",
    LuxuryFood = "luxury_food",
    Furniture = "furniture",
    LuxuryFurniture = "luxury_furniture",
    Appliance = "appliance",
    SmartAppliance = "smart_appliance",
    Electronics = "electronics",
    Automobiles = "automobiles"
}
export declare namespace Good {
    const values: Good[];
    const labourTypes: Good[];
    function getBaseUtility(good: string): number;
    function isLabour(good: string): boolean;
    function name(good: Good): "Coal" | "Oil" | "Wood" | "Mineral" | "Precious Mineral" | "Rock" | "Crop" | "Fruit" | "Milk" | "Wool" | "Meat" | "Mining" | "Farming" | "Technical" | "Forestry" | "Artisan" | "Assembly" | "Basic Equipment" | "Industrial Equipment" | "Advanced Equipment" | "Mobile Equipment" | "Fertilizer" | "Electricity" | "Processed Wood" | "Chemicals" | "Metal" | "Precious Metal" | "Motor" | "Circuit" | "Machine Parts" | "Textile" | "Flour" | "Clothes" | "Processed Meat" | "Processed Fruit" | "Processed Vegetables" | "Dairy" | "Baked" | "Luxury Food" | "Furniture" | "Luxury Furniture" | "Appliance" | "Smart Appliance" | "Electronics" | "Automobiles";
    function getTier(good: Good): FirmTier;
}
