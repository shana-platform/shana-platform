import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek3L3Component } from './planning-week3-l3.component';

describe('PlanningWeek3L3Component', () => {
  let component: PlanningWeek3L3Component;
  let fixture: ComponentFixture<PlanningWeek3L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek3L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek3L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
