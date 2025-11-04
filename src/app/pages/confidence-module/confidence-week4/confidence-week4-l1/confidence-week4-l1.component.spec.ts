import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek4L1Component } from './confidence-week4-l1.component';

describe('ConfidenceWeek4L1Component', () => {
  let component: ConfidenceWeek4L1Component;
  let fixture: ComponentFixture<ConfidenceWeek4L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek4L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek4L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
