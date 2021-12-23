import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitieTableComponent } from './activitie-table.component';

describe('ActivitieTableComponent', () => {
  let component: ActivitieTableComponent;
  let fixture: ComponentFixture<ActivitieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitieTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
