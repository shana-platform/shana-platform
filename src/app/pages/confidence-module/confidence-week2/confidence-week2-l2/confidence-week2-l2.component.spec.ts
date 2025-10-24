import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek2L2Component } from './confidence-week2-l2.component';

describe('ConfidenceWeek2L2Component', () => {
  let component: ConfidenceWeek2L2Component;
  let fixture: ComponentFixture<ConfidenceWeek2L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek2L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek2L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
