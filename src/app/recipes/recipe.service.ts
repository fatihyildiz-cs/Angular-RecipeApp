import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Kuru Fasulye',
      'Sulamayi unutma',
      'https://im.haberturk.com/2020/04/21/ver1587444948/2652945_810x458.jpg',
      [
        new Ingredient('Fasulye', 1),
        new Ingredient('Su', 2),
      ]
    ),
    new Recipe('Barbunya',
      'Sulamayi unutma',
      'https://im.haberturk.com/2020/04/21/ver1587444948/2652945_810x458.jpg',
      [
        new Ingredient('Barbunya', 1),
        new Ingredient('Tuz', 2),
      ]
    ),
    new Recipe('Taze Fasulye',
      'Sulamayi unutma',
      'https://im.haberturk.com/2020/04/21/ver1587444948/2652945_810x458.jpg',
      [
        new Ingredient('Taze Fasulye', 1),
        new Ingredient('Su', 2),
        new Ingredient('Salca', 2)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }
  // tslint:disable-next-line:typedef
  getRecipes() {
    return this.recipes.slice();
  }

  // tslint:disable-next-line:typedef
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
