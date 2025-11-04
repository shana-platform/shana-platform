import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek4Component } from './confidence-week4.component';

describe('ConfidenceWeek4Component', () => {
  let component: ConfidenceWeek4Component;
  let fixture: ComponentFixture<ConfidenceWeek4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
