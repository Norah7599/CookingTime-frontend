import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = 'http://your-api-url'; 

  constructor(private http: HttpClient) { }

  addRecipe(recipe: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/store`, recipe);
  }
}
