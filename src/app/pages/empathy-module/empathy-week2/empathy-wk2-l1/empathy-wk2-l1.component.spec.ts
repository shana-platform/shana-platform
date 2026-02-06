import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk2L1Component } from './empathy-wk2-l1.component';

describe('EmpathyWk2L1Component', () => {
  let component: EmpathyWk2L1Component;
  let fixture: ComponentFixture<EmpathyWk2L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk2L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk2L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
