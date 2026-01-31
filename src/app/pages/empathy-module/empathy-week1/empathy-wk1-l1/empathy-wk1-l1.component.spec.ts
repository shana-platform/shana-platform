import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk1L1Component } from './empathy-wk1-l1.component';

describe('EmpathyWk1L1Component', () => {
  let component: EmpathyWk1L1Component;
  let fixture: ComponentFixture<EmpathyWk1L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk1L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk1L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
