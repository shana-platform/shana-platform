import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek1L1Component } from './planning-week1-l1.component';

describe('PlanningWeek1L1Component', () => {
  let component: PlanningWeek1L1Component;
  let fixture: ComponentFixture<PlanningWeek1L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek1L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek1L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
