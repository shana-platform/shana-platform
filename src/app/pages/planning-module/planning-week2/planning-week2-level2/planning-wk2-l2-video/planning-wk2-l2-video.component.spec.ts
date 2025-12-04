import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk2L2VideoComponent } from './planning-wk2-l2-video.component';

describe('PlanningWk2L2VideoComponent', () => {
  let component: PlanningWk2L2VideoComponent;
  let fixture: ComponentFixture<PlanningWk2L2VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk2L2VideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk2L2VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
