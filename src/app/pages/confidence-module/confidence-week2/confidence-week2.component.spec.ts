import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek2Component } from './confidence-week2.component';

describe('ConfidenceWeek2Component', () => {
  let component: ConfidenceWeek2Component;
  let fixture: ComponentFixture<ConfidenceWeek2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
