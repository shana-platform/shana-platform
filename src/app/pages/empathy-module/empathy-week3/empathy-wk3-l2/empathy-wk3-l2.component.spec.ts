import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk3L2Component } from './empathy-wk3-l2.component';

describe('EmpathyWk3L2Component', () => {
  let component: EmpathyWk3L2Component;
  let fixture: ComponentFixture<EmpathyWk3L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk3L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk3L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
