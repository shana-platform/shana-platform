import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk2L2ActivityComponent } from './planning-wk2-l2-activity.component';

describe('PlanningWk2L2ActivityComponent', () => {
  let component: PlanningWk2L2ActivityComponent;
  let fixture: ComponentFixture<PlanningWk2L2ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk2L2ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk2L2ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
