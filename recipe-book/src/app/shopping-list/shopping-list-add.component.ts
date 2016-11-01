import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd = true;
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) {

  }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = { name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }
  
  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

  onSubmit(value: Ingredient) {
    const newItem = new Ingredient(value.name, value.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, newItem);
      this.onClear();
    } else {
      this.sls.addItem(this.item);
    }

    this.item = newItem;
  }

}
