export interface SetupInvestmentSchema {
  renovation: number | null;
  kitchenEquipment: number | null;
  furniture: number | null;
  posSystem: number | null;
  branding: number | null;
  initialInventory: number | null;
  licenses: number | null;
  other: number | null;
}

export interface DailyOperatingCostSchema {
  ingredients: number | null;
  labor: number | null;
  rentAllocation: number | null;
  utilities: number | null;
  marketing: number | null;
  deliveryPlatform: number | null;
  miscellaneous: number | null;
}

export const defaultInvestmentData: SetupInvestmentSchema = {
  renovation: null,
  kitchenEquipment: null,
  furniture: null,
  posSystem: null,
  branding: null,
  initialInventory: null,
  licenses: null,
  other: null,
};

export const defaultDailyOperatingCost: DailyOperatingCostSchema = {
  ingredients: null,
  labor: null,
  rentAllocation: null,
  utilities: null,
  marketing: null,
  deliveryPlatform: null,
  miscellaneous: null,
};

// Preset benchmark values for realistic F&B hotpot / dining setup demo
export const benchmarkInvestmentData: SetupInvestmentSchema = {
  renovation: 350000000, // 350M
  kitchenEquipment: 220000000, // 220M
  furniture: 150000000, // 150M
  posSystem: 30000000, // 30M
  branding: 45000000, // 45M
  initialInventory: 80000000, // 80M
  licenses: 15000000, // 15M
  other: 30000000, // 30M
};

export const benchmarkDailyCost: DailyOperatingCostSchema = {
  ingredients: 11550000, // COGS ~35% of 33M
  labor: 4950000, // Staff ~15%
  rentAllocation: 2310000, // Rent ~7%
  utilities: 990000, // Water, power ~3%
  marketing: 825000, // Marketing ~2.5%
  deliveryPlatform: 413500, // Platform ~1.25%
  miscellaneous: 413500, // Misc ~1.25%
};

export function calculateTotalInvestment(data: SetupInvestmentSchema): number | null {
  const values = Object.values(data).filter((v): v is number => v !== null);
  if (values.length === 0) return null;
  return values.reduce((sum, val) => sum + val, 0);
}

export function calculateTotalDailyCost(data: DailyOperatingCostSchema): number | null {
  const values = Object.values(data).filter((v): v is number => v !== null);
  if (values.length === 0) return null;
  return values.reduce((sum, val) => sum + val, 0);
}
