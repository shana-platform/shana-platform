import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk4L2ActivityComponent } from './planning-wk4-l2-activity.component';

describe('PlanningWk4L2ActivityComponent', () => {
  let component: PlanningWk4L2ActivityComponent;
  let fixture: ComponentFixture<PlanningWk4L2ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk4L2ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk4L2ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
