import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek1L2Component } from './planning-week1-l2.component';

describe('PlanningWeek1L2Component', () => {
  let component: PlanningWeek1L2Component;
  let fixture: ComponentFixture<PlanningWeek1L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek1L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek1L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
