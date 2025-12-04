import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk3L2VideoComponent } from './planning-wk3-l2-video.component';

describe('PlanningWk3L2VideoComponent', () => {
  let component: PlanningWk3L2VideoComponent;
  let fixture: ComponentFixture<PlanningWk3L2VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk3L2VideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk3L2VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
