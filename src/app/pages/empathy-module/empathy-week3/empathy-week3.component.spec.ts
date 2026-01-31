import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWeek3Component } from './empathy-week3.component';

describe('EmpathyWeek3Component', () => {
  let component: EmpathyWeek3Component;
  let fixture: ComponentFixture<EmpathyWeek3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWeek3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWeek3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
