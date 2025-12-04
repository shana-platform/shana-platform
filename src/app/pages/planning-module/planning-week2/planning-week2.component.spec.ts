import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek2Component } from './planning-week2.component';

describe('PlanningWeek2Component', () => {
  let component: PlanningWeek2Component;
  let fixture: ComponentFixture<PlanningWeek2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
