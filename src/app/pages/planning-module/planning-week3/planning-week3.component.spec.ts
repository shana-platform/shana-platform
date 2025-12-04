import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek3Component } from './planning-week3.component';

describe('PlanningWeek3Component', () => {
  let component: PlanningWeek3Component;
  let fixture: ComponentFixture<PlanningWeek3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
