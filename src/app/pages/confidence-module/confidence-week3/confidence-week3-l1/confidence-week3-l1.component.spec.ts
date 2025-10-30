import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek3L1Component } from './confidence-week3-l1.component';

describe('ConfidenceWeek3L1Component', () => {
  let component: ConfidenceWeek3L1Component;
  let fixture: ComponentFixture<ConfidenceWeek3L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek3L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek3L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
