export interface IRecipe {
  id: string;
  name: string;
  source: string;
  instructions: string;
  ingredients: string[];
  isFavorite?: boolean;
  tags: string[] | null;
}
