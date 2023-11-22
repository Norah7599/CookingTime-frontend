import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRecipesComponent } from './random-recipes.component';

describe('RandomRecipesComponent', () => {
  let component: RandomRecipesComponent;
  let fixture: ComponentFixture<RandomRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomRecipesComponent]
    });
    fixture = TestBed.createComponent(RandomRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
