import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek4L1Component } from './planning-week4-l1.component';

describe('PlanningWeek4L1Component', () => {
  let component: PlanningWeek4L1Component;
  let fixture: ComponentFixture<PlanningWeek4L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek4L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek4L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
