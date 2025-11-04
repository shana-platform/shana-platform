import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek4L4Component } from './confidence-week4-l4.component';

describe('ConfidenceWeek4L4Component', () => {
  let component: ConfidenceWeek4L4Component;
  let fixture: ComponentFixture<ConfidenceWeek4L4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek4L4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek4L4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
