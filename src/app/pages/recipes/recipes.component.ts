import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipePicked?: IRecipe;

  constructor() {}

  ngOnInit(): void {}
}
