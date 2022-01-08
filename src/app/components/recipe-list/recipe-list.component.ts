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
import { FavoriteRecipeService } from 'src/app/services/favorite-recipe.service';

type Favorite = {
  id: string;
  isFavorite: boolean;
};

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  @Output() recipePicked = new EventEmitter<IRecipe>();
  recipes: IRecipe[] = [];
  sub?: Subscription;
  favoriteRecipes?: IRecipe[];
  origin?: string = 'list';

  constructor(
    private recipeService: RecipeService,
    private favoriteService: FavoriteRecipeService
  ) {}

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

    this.favoriteRecipes = this.favoriteService.getFavoriteRecipes();
    this.favoriteService.origin = this.origin;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onPickedParent(recipe: IRecipe): void {
    this.recipePicked.emit(recipe);
  }

  onFavoriteParent(value: Favorite) {
    const fav = this.recipes.find((item) => item.id === value.id);

    if (!fav) {
      return;
    }

    return this.favoriteService.manageRecipe(fav, value.isFavorite);
  }
}
