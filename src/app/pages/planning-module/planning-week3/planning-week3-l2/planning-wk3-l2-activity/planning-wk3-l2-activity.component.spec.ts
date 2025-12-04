import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk3L2ActivityComponent } from './planning-wk3-l2-activity.component';

describe('PlanningWk3L2ActivityComponent', () => {
  let component: PlanningWk3L2ActivityComponent;
  let fixture: ComponentFixture<PlanningWk3L2ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk3L2ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk3L2ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
