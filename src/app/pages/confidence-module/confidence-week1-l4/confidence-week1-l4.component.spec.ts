import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceWeek1L4Component } from './confidence-week1-l4.component';

describe('ConfidenceWeek1L4Component', () => {
  let component: ConfidenceWeek1L4Component;
  let fixture: ComponentFixture<ConfidenceWeek1L4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceWeek1L4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceWeek1L4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
