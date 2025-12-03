import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek1Component } from './planning-week1.component';

describe('PlanningWeek1Component', () => {
  let component: PlanningWeek1Component;
  let fixture: ComponentFixture<PlanningWeek1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
