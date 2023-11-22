import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.models';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
updateRecipe(_t7: Recipe) {
throw new Error('Method not implemented.');
}
  recipes: Recipe[] =[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.getRecipesList();
  }

  getRecipesList(): void {
    this.recipesService.getRecipesList()
      .subscribe(recipes => this.recipes = recipes);
  }



  deleteRecipe(recipe: Recipe): void {
    console.log(recipe.recipeid);
    if (recipe) {
      console.log('Recipe ID to be deleted:', recipe);
      this.recipesService.deleteRecipe(recipe.recipeid).subscribe(response => {
        console.log(response);
        
        this.getRecipesList();
      });
    } else {
      console.error('Invalid recipe ID:', recipe);
    }
  }
  
}
