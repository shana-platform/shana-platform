import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk1L2VideoComponent } from './planning-wk1-l2-video.component';

describe('PlanningWk1L2VideoComponent', () => {
  let component: PlanningWk1L2VideoComponent;
  let fixture: ComponentFixture<PlanningWk1L2VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk1L2VideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk1L2VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
