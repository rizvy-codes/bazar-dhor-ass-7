export interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface IChange {
  dir: "up" | "down" | "flat";
  pct: number;
}

export interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: IChange;
  markets: IMarket[];
}

export interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}