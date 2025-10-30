import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek3Component } from './confidence-week3.component';

describe('ConfidenceWeek3Component', () => {
  let component: ConfidenceWeek3Component;
  let fixture: ComponentFixture<ConfidenceWeek3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
