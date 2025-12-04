import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek4L3Component } from './planning-week4-l3.component';

describe('PlanningWeek4L3Component', () => {
  let component: PlanningWeek4L3Component;
  let fixture: ComponentFixture<PlanningWeek4L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek4L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek4L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
