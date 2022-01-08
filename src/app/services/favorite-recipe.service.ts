import { Injectable } from '@angular/core';
import { IRecipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteRecipeService {
  origin?: string;

  constructor() {}

  manageRecipe(currencyItem: IRecipe, isFavorite: boolean) {
    return isFavorite
      ? this.addRecipe(currencyItem)
      : this.removeRecipe(currencyItem);
  }

  addRecipe(currencyItem: IRecipe) {
    const favoritesArray: IRecipe[] = this.getFavoriteRecipes() ?? [];

    favoritesArray.push(currencyItem);
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  removeRecipe(currencyItem: IRecipe) {
    const favoritesArray: IRecipe[] = this.getFavoriteRecipes() ?? [];

    if (favoritesArray.length === 0) {
      return;
    }

    const newFavoritesArray = favoritesArray.filter(
      (item) => item.id !== currencyItem.id
    );

    localStorage.setItem('favorites', JSON.stringify(newFavoritesArray));
  }

  getFavoriteRecipes() {
    const favoritesArray: string | null = localStorage.getItem('favorites');

    if (!favoritesArray) {
      return;
    }

    return JSON.parse(favoritesArray);
  }
}
