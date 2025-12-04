import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek3L1Component } from './planning-week3-l1.component';

describe('PlanningWeek3L1Component', () => {
  let component: PlanningWeek3L1Component;
  let fixture: ComponentFixture<PlanningWeek3L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek3L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek3L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
