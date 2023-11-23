import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.models';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
// ... (الاستيرادات)

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

  recipes: Recipe[] =[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.getRecipesList();
  }

  getRecipesList(): void {
    this.recipesService.getRecipesList()
      .subscribe(recipes => this.recipes = recipes.map(recipe => ({ ...recipe, isEditing: false })));
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

  updateRecipe(recipe: Recipe): void {
    
  }

  toggleEdit(recipe: Recipe): void {
   
    recipe.isEditing = !recipe.isEditing;
    
    
    if (recipe.isEditing) {
      recipe.editedTitle = recipe.title;
      recipe.editedIngredients = recipe.ingredients;
      recipe.instructions = recipe.instructions;
    }
  }

  saveChanges(recipe: Recipe): void {
    recipe.title = recipe.editedTitle;
    recipe.ingredients = recipe.editedIngredients;
    recipe.instructions = recipe.instructions;
  
    recipe.isEditing = false;
  
    
    this.recipesService.updateRecipe(recipe).subscribe(updatedRecipe => {
      console.log('Recipe updated successfully:', updatedRecipe);
    }, error => {
      console.error('Error updating recipe:', error);
    });
  }
}

