import { Component, Input, OnInit } from '@angular/core';
import { FavoriteRecipeService } from 'src/app/services/favorite-recipe.service';
import { IRecipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe?: IRecipe;
  origin?: string;

  constructor(private favoriteRecipes: FavoriteRecipeService) {}

  ngOnInit(): void {
    this.origin = this.favoriteRecipes.origin;
    console.log(this.origin);
  }
}
