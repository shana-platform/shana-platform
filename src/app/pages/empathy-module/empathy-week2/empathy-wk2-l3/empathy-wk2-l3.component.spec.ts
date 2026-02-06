import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk2L3Component } from './empathy-wk2-l3.component';

describe('EmpathyWk2L3Component', () => {
  let component: EmpathyWk2L3Component;
  let fixture: ComponentFixture<EmpathyWk2L3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk2L3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk2L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
