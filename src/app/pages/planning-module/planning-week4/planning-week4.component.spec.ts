import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWeek4Component } from './planning-week4.component';

describe('PlanningWeek4Component', () => {
  let component: PlanningWeek4Component;
  let fixture: ComponentFixture<PlanningWeek4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWeek4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWeek4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
