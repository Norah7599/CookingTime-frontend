import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipesComponent } from './add-recipes.component';

describe('AddRecipesComponent', () => {
  let component: AddRecipesComponent;
  let fixture: ComponentFixture<AddRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecipesComponent]
    });
    fixture = TestBed.createComponent(AddRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
