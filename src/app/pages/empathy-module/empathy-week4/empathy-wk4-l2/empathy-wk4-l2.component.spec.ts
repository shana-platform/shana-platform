import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk4L2Component } from './empathy-wk4-l2.component';

describe('EmpathyWk4L2Component', () => {
  let component: EmpathyWk4L2Component;
  let fixture: ComponentFixture<EmpathyWk4L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk4L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk4L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
