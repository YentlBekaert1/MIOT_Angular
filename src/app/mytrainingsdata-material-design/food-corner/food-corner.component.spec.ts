import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCornerComponent } from './food-corner.component';

describe('FoodCornerComponent', () => {
  let component: FoodCornerComponent;
  let fixture: ComponentFixture<FoodCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
