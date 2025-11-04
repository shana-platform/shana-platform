import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek4L2Component } from './confidence-week4-l2.component';

describe('ConfidenceWeek4L2Component', () => {
  let component: ConfidenceWeek4L2Component;
  let fixture: ComponentFixture<ConfidenceWeek4L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek4L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek4L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
