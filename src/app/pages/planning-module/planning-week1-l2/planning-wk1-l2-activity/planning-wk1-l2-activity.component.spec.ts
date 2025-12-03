import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk1L2ActivityComponent } from './planning-wk1-l2-activity.component';

describe('PlanningWk1L2ActivityComponent', () => {
  let component: PlanningWk1L2ActivityComponent;
  let fixture: ComponentFixture<PlanningWk1L2ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk1L2ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk1L2ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
