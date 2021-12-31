export interface IRecipe {
  id: string;
  name: string;
  source: string;
  instructions: string;
  ingredients: string[];
  tags: string[] | null;
}
