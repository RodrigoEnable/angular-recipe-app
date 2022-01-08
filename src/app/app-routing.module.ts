import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { RecipeFavoriteComponent } from './pages/favorites/recipe-favorite.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'new-recipe', component: NewRecipeComponent },
  { path: 'favorites', component: RecipeFavoriteComponent },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: '**', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
