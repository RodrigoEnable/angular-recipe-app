import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../models/recipe.model';

@Component({
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipePickedParent?: IRecipe;

  constructor() {}

  ngOnInit(): void {}
}
