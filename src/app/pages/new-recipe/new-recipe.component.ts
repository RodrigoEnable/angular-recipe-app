import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from '../../models/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent implements OnInit {
  recipes?: IRecipe[];
  recipeValue = {
    id: '',
    name: '',
    source: '',
    instructions: '',
    ingredients: '',
    tags: '',
  };
  postError = false;
  errorMessage?: string;

  constructor(private recipeService: RecipeService, private route: Router) {}

  ngOnInit(): void {}

  addIngredients(values: string): string[] {
    let removedSpaces = values.replace(/\s/g, '');
    let generateArray = removedSpaces.split(',');
    return generateArray;
  }

  addTags(values: string): string[] | null {
    let removedSpaces = values.replace(/\s/g, '');
    let generateArray = removedSpaces.split(',');
    if (generateArray[0] === '') {
      return null;
    } else {
      return generateArray;
    }
  }

  onHttpError(err: ErrorEvent) {
    const { error } = err;
    this.postError = true;
    this.errorMessage = error;
  }

  onSubmit(form: NgForm): void {
    const recipeValueUpdated = {
      id: String(Math.round(Math.random() * Date.now())),
      name: this.recipeValue.name,
      source: this.recipeValue.source,
      instructions: this.recipeValue.instructions,
      ingredients: this.addIngredients(this.recipeValue.ingredients),
      tags: this.addTags(this.recipeValue.tags),
    };

    if (form.valid) {
      this.recipeService.postRecipes(recipeValueUpdated).subscribe({
        next: (recipe) => this.recipes?.push(recipe),
        error: (error) => this.onHttpError(error),
      });

      this.route.navigate(['/']);
    } else {
      this.postError = true;
      this.errorMessage = 'Please fix the fields above and try again';
    }
  }
}
