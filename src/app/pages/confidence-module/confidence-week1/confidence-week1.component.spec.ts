import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek1Component } from './confidence-week1.component';

describe('ConfidenceWeek1Component', () => {
  let component: ConfidenceWeek1Component;
  let fixture: ComponentFixture<ConfidenceWeek1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
