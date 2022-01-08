import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from '../../models/recipe.model';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: IRecipe = {
    id: '',
    name: '',
    source: '',
    instructions: '',
    ingredients: [],
    tags: [],
  };
  @Input() favoriteRecipes?: IRecipe[];
  @Output() recipePicked = new EventEmitter<IRecipe>();
  @Output() favorited = new EventEmitter();
  isFavoriteIcon: boolean = false;

  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }

  ngOnInit(): void {
    this.favoriteRecipes?.map((item) => {
      if (item.id === this.recipe.id) {
        this.isFavoriteIcon = true;
      } else {
        return;
      }
    });
  }

  onPicked() {
    this.recipePicked.emit();
  }

  onFavorited(id: string) {
    this.isFavoriteIcon = !this.isFavoriteIcon;

    const fav = {
      id: id,
      isFavorite: this.isFavoriteIcon,
    };

    this.favorited.emit(fav);
  }
}
