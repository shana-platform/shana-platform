import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWeek4Component } from './empathy-week4.component';

describe('EmpathyWeek4Component', () => {
  let component: EmpathyWeek4Component;
  let fixture: ComponentFixture<EmpathyWeek4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWeek4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWeek4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
