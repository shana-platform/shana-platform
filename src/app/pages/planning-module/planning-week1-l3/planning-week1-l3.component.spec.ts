import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek1L3Component } from './planning-week1-l3.component';

describe('PlanningWeek1L3Component', () => {
  let component: PlanningWeek1L3Component;
  let fixture: ComponentFixture<PlanningWeek1L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek1L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek1L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
