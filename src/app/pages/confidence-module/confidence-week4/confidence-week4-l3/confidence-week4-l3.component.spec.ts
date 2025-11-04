import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek4L3Component } from './confidence-week4-l3.component';

describe('ConfidenceWeek4L3Component', () => {
  let component: ConfidenceWeek4L3Component;
  let fixture: ComponentFixture<ConfidenceWeek4L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek4L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek4L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
