import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe.models';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = 'http://localhost:8080'; 
  
  private apiUrll = 'http://localhost:8080/CooK/recipesList'
  constructor(private http: HttpClient) { }

  addRecipe(recipe: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CooK/store`, recipe, {responseType: 'text'});
  }
  getRecipesList(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrll);
  }

  deleteRecipe(recipeId: number): Observable<string> {
    return this.http.delete<string>(`http://localhost:8080/CooK/delete/${recipeId}`);
  }
}
