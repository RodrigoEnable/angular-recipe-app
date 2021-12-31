import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe?: IRecipe;

  constructor() {}

  ngOnInit(): void {}
}
