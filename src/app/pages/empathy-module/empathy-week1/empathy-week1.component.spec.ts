import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWeek1Component } from './empathy-week1.component';

describe('EmpathyWeek1Component', () => {
  let component: EmpathyWeek1Component;
  let fixture: ComponentFixture<EmpathyWeek1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWeek1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWeek1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
