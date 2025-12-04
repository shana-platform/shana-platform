import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek2Level3Component } from './planning-week2-level3.component';

describe('PlanningWeek2Level3Component', () => {
  let component: PlanningWeek2Level3Component;
  let fixture: ComponentFixture<PlanningWeek2Level3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek2Level3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek2Level3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
