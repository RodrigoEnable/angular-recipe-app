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

  ngOnInit(): void {
    this.sub = this.recipeService.getRecipes().subscribe({
      next: (data) => (this.recipes = data),
      error: (error) => console.log(error),
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onPickedLayer02(recipe: any): void {
    this.recipePicked.emit(recipe);
  }
}
