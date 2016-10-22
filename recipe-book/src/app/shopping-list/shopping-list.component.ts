import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent  {
  ingredients: Ingredient[] = [];
}
