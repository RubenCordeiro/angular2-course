import { Component } from '@angular/core';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent  {
  ingredients: Ingredient[] = [];

  constructor(private sls: ShoppingListService) {

  }
}
