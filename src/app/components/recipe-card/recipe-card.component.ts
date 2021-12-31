import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from '../../models/recipe.model';

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
  @Output() recipePicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onPickedLayer01() {
    this.recipePicked.emit();
  }
}
