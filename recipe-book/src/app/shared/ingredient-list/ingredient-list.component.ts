import { Ingredient } from './../ingredient';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
  @Input() ingredients: Ingredient[];
  @Output() selectItem: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  
  onClick(item: Ingredient) {
    this.selectItem.emit(item);
  }
}
