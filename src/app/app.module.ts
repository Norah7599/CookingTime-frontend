import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecipesComponent } from './component/add-recipes/add-recipes.component';
import { HomeComponent } from './component/home/home.component';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';
import { RandomRecipesComponent } from './component/random-recipes/random-recipes.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddRecipesComponent,
    HomeComponent,
    RecipesListComponent,
    RandomRecipesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
