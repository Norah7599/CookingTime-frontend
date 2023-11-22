import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';
import { AddRecipesComponent } from './component/add-recipes/add-recipes.component';
import { RandomRecipesComponent } from './component/random-recipes/random-recipes.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "recipes",
    component: RecipesListComponent
  },
  {
    path: "random-recipes",
    component: RandomRecipesComponent
  },
  {
    path: "new-recipes",
    component: AddRecipesComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
