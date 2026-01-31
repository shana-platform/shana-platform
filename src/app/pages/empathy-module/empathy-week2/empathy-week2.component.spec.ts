import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWeek2Component } from './empathy-week2.component';

describe('EmpathyWeek2Component', () => {
  let component: EmpathyWeek2Component;
  let fixture: ComponentFixture<EmpathyWeek2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWeek2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWeek2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
