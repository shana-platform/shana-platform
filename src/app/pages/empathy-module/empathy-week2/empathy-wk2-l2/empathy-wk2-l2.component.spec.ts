import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk2L2Component } from './empathy-wk2-l2.component';

describe('EmpathyWk2L2Component', () => {
  let component: EmpathyWk2L2Component;
  let fixture: ComponentFixture<EmpathyWk2L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk2L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk2L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
