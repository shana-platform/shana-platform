import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk1L2Component } from './empathy-wk1-l2.component';

describe('EmpathyWk1L2Component', () => {
  let component: EmpathyWk1L2Component;
  let fixture: ComponentFixture<EmpathyWk1L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk1L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk1L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
