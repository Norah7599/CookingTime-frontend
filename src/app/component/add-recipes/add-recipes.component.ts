import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RecipesService } from 'src/app/service/recipes.service';


@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipesComponent implements OnInit {
 
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      const newRecipe = this.recipeForm.value;
      this.recipeService.addRecipe(newRecipe).subscribe(
        (response: any) => {
          console.log('Recipe added successfully:', response);
    
        },
        (error: any) => {
          console.error('Error adding recipe:', error);
        }
      );
    }
  }

  
}
