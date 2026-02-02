import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk1L1ActivityComponent } from './empathy-wk1-l1-activity.component';

describe('EmpathyWk1L1ActivityComponent', () => {
  let component: EmpathyWk1L1ActivityComponent;
  let fixture: ComponentFixture<EmpathyWk1L1ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk1L1ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk1L1ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
