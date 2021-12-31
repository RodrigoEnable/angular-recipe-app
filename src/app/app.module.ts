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
import { RecipeService } from './services/recipe.service';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

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
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
