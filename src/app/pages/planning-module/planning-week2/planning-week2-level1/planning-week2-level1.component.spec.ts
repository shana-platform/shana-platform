import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek2Level1Component } from './planning-week2-level1.component';

describe('PlanningWeek2Level1Component', () => {
  let component: PlanningWeek2Level1Component;
  let fixture: ComponentFixture<PlanningWeek2Level1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek2Level1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek2Level1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
