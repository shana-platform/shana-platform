import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk3L3Component } from './empathy-wk3-l3.component';

describe('EmpathyWk3L3Component', () => {
  let component: EmpathyWk3L3Component;
  let fixture: ComponentFixture<EmpathyWk3L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk3L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk3L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
