import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe.model';
import { FavoriteRecipeService } from 'src/app/services/favorite-recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './recipe-favorite.component.html',
  styleUrls: ['./recipe-favorite.component.scss'],
})
export class RecipeFavoriteComponent implements OnInit {
  favoriteRecipes?: IRecipe[];
  origin?: string = 'favorite';

  constructor(private favoriteService: FavoriteRecipeService) {}

  ngOnInit(): void {
    this.favoriteRecipes = this.favoriteService.getFavoriteRecipes();
    this.favoriteService.origin = this.origin;
  }
}
