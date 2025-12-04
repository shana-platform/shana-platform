import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk4L2VideoComponent } from './planning-wk4-l2-video.component';

describe('PlanningWk4L2VideoComponent', () => {
  let component: PlanningWk4L2VideoComponent;
  let fixture: ComponentFixture<PlanningWk4L2VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk4L2VideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk4L2VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
