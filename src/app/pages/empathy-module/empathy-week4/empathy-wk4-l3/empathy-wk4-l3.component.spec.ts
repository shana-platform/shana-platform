import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk4L3Component } from './empathy-wk4-l3.component';

describe('EmpathyWk4L3Component', () => {
  let component: EmpathyWk4L3Component;
  let fixture: ComponentFixture<EmpathyWk4L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk4L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk4L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
