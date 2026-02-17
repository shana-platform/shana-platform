import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk3L1Component } from './empathy-wk3-l1.component';

describe('EmpathyWk3L1Component', () => {
  let component: EmpathyWk3L1Component;
  let fixture: ComponentFixture<EmpathyWk3L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk3L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk3L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
