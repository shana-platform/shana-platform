import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek4L2Component } from './planning-week4-l2.component';

describe('PlanningWeek4L2Component', () => {
  let component: PlanningWeek4L2Component;
  let fixture: ComponentFixture<PlanningWeek4L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek4L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek4L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
