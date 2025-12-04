import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek2Level2Component } from './planning-week2-level2.component';

describe('PlanningWeek2Level2Component', () => {
  let component: PlanningWeek2Level2Component;
  let fixture: ComponentFixture<PlanningWeek2Level2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek2Level2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek2Level2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
