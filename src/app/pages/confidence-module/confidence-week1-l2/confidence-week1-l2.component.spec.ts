import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek1L2Component } from './confidence-week1-l2.component';

describe('ConfidenceWeek1L2Component', () => {
  let component: ConfidenceWeek1L2Component;
  let fixture: ComponentFixture<ConfidenceWeek1L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek1L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek1L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
