import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek1L3Component } from './confidence-week1-l3.component';

describe('ConfidenceWeek1L3Component', () => {
  let component: ConfidenceWeek1L3Component;
  let fixture: ComponentFixture<ConfidenceWeek1L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek1L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek1L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
