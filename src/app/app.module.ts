import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { ButtonComponent } from './components/button/button.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RemoveSpace } from './pipes/remove-space.pipe';
import { RecipeFavoriteComponent } from './pages/favorites/recipe-favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ButtonComponent,
    RecipeCardComponent,
    NewRecipeComponent,
    RecipeListComponent,
    RecipeFavoriteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [RemoveSpace],
  bootstrap: [AppComponent],
})
export class AppModule {}
