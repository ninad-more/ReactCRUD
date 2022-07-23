export interface FoodItemDto {
  id: number;
  name: string;
  poster: string;
}

export interface LandingPageDto {
  burgerItems?: FoodItemDto[];
  pastaItems?: FoodItemDto[];
}
