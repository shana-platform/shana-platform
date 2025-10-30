import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek3L3Component } from './confidence-week3-l3.component';

describe('ConfidenceWeek3L3Component', () => {
  let component: ConfidenceWeek3L3Component;
  let fixture: ComponentFixture<ConfidenceWeek3L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek3L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek3L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
