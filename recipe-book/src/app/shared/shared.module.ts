import { CommonModule } from '@angular/common';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        IngredientListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IngredientListComponent
    ]
})
export class SharedModule {}
