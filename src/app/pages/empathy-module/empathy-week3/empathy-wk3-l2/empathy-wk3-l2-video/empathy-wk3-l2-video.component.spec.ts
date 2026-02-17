import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk3L2VideoComponent } from './empathy-wk3-l2-video.component';

describe('EmpathyWk3L2VideoComponent', () => {
  let component: EmpathyWk3L2VideoComponent;
  let fixture: ComponentFixture<EmpathyWk3L2VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk3L2VideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk3L2VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
