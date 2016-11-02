import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeService } from './recipes/recipe.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
