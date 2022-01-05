import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { IRecipe } from '../../models/recipe.model';
import { RemoveSpace } from 'src/app/pipes/remove-space.pipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: IRecipe[] = [];
  @Output() recipePicked = new EventEmitter();
  sub?: Subscription;

  constructor(private recipeService: RecipeService) {}

  formattedText(value: string[]): string[] {
    const ingredientsArray = value.map((text) =>
      text.replace(/\s+/g, ' ').trim()
    );
    return ingredientsArray;
  }

  ngOnInit(): void {
    this.sub = this.recipeService.getRecipes().subscribe({
      next: (data) =>
        (this.recipes = data.map((item) => ({
          ...item,
          ingredients: new RemoveSpace().transform(
            item.ingredients
          ) as string[],
        }))),
      error: (error) => error,
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onPickedLayer02(recipe: any): void {
    this.recipePicked.emit(recipe);
  }
}
