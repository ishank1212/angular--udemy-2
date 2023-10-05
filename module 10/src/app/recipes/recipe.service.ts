import { Recipe } from "./recipe.model";
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService{
    constructor(private shoppingListService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('Meat', 1), 
            new Ingredient('Veggies', 2),
            new Ingredient('Cheese', 3)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('Buns',1), 
            new Ingredient('Potato', 2),
            new Ingredient('Mayo', 3)
        ])
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    
    }
}


