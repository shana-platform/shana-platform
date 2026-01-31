import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk1L3Component } from './empathy-wk1-l3.component';

describe('EmpathyWk1L3Component', () => {
  let component: EmpathyWk1L3Component;
  let fixture: ComponentFixture<EmpathyWk1L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk1L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk1L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
