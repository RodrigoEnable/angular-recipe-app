import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'new-recipe', component: NewRecipeComponent },
  { path: '**', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
