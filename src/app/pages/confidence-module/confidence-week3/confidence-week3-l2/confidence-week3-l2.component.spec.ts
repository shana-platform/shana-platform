import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek3L2Component } from './confidence-week3-l2.component';

describe('ConfidenceWeek3L2Component', () => {
  let component: ConfidenceWeek3L2Component;
  let fixture: ComponentFixture<ConfidenceWeek3L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek3L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek3L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
