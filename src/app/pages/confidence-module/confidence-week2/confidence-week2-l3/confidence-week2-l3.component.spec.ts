import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek2L3Component } from './confidence-week2-l3.component';

describe('ConfidenceWeek2L3Component', () => {
  let component: ConfidenceWeek2L3Component;
  let fixture: ComponentFixture<ConfidenceWeek2L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek2L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek2L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
