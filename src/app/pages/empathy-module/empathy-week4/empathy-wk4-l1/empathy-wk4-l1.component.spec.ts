import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk4L1Component } from './empathy-wk4-l1.component';

describe('EmpathyWk4L1Component', () => {
  let component: EmpathyWk4L1Component;
  let fixture: ComponentFixture<EmpathyWk4L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk4L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk4L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
