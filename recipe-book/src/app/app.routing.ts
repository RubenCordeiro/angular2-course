import { HomeComponent } from './home/home.component';
import { recipesRouting } from './recipes/recipes.routing';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: 'app/recipes/recipe.module#RecipeModule'},
    { path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
