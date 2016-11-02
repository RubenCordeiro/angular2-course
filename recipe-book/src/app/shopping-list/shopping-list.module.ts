import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListAddComponent
    ],
    imports: [FormsModule, CommonModule, SharedModule]
})
export class ShoppingListModule {}