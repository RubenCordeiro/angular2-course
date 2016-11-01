import { RecipeService } from './recipes/recipe.service';
import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
}
