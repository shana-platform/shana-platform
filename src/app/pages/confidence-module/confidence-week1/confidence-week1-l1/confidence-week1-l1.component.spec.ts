import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek1L1Component } from './confidence-week1-l1.component';

describe('ConfidenceWeek1L1Component', () => {
  let component: ConfidenceWeek1L1Component;
  let fixture: ComponentFixture<ConfidenceWeek1L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek1L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek1L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
