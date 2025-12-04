import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk3L2LessonComponent } from './planning-wk3-l2-lesson.component';

describe('PlanningWk3L2LessonComponent', () => {
  let component: PlanningWk3L2LessonComponent;
  let fixture: ComponentFixture<PlanningWk3L2LessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk3L2LessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk3L2LessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
