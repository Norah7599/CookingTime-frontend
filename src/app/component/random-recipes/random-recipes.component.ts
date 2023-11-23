import { Component } from '@angular/core';

@Component({
  selector: 'app-random-recipes',
  templateUrl: './random-recipes.component.html',
  styleUrls: ['./random-recipes.component.css']
})
export class RandomRecipesComponent {
  selectedRecipe: any;
  recipes: any;
  

  constructor() {
    this.getRandomRecipe();
  }
  getRandomRecipe(): void {
    if (this.recipes && this.recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.recipes.length);
      this.selectedRecipe = this.recipes[randomIndex];
    } else {
      console.error('No recipes');
    }
  }
  
}
