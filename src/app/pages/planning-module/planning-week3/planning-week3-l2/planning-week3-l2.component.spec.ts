import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek3L2Component } from './planning-week3-l2.component';

describe('PlanningWeek3L2Component', () => {
  let component: PlanningWeek3L2Component;
  let fixture: ComponentFixture<PlanningWeek3L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek3L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek3L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
