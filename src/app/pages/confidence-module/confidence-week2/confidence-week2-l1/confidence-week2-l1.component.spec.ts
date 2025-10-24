import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek2L1Component } from './confidence-week2-l1.component';

describe('ConfidenceWeek2L1Component', () => {
  let component: ConfidenceWeek2L1Component;
  let fixture: ComponentFixture<ConfidenceWeek2L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek2L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek2L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
