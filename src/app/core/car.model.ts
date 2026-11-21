export type CarCategory = 'Pre-guerra' | 'Clásico' | 'Sport' | 'Youngtimer';

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  category: CarCategory;
  power: number;
  country: string;
  image: string;
  alt: string;
  featured: boolean;
  history: string;
}
